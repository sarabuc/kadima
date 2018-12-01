import { Component, OnInit } from '@angular/core';
import { TreatGroup, DbService, Therapist } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: TreatGroup[];

  selectedTeam: TreatGroup;
  selectedTherapist: Therapist;
  selectedPatForGroup: any[] = [];
  displayDialog: boolean;

  sortOptions: any[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  constructor(public db: DbService, public sd: ShareDataService) { }

  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
   this.getTeams();
    this.sortOptions = [
      { label: ' לפי תאריך', value: 'startDate' },
      { label: ' לפי מטפל', value: 'Tid' },
      { label: 'לפי כתה', value: 'grade1' },
      { label: 'לפי תחום', value: 'area' }

    ];
  }

 async selectTeam(event: Event, team: TreatGroup, dialog) {
    this.db.isBusy = true;
    this.selectedTeam = team;
   await this.db.allTherapistsRef.doc<Therapist>(team.Tid).valueChanges().subscribe(T => this.selectedTherapist = T);
   await this.db.getTeamPatByGroupCode(team.groupCode).valueChanges().subscribe(async pats => {
     this.selectedPatForGroup = await this.db.allPatientList.filter(P =>
        pats.findIndex(pat => pat.Pid === P.id) > -1
     );
   });
   // this.displayDialog = true;
    event.preventDefault(); //??
    dialog.show();
    this.db.isBusy = false;
  }

  onSortChange(event) {
    const value = event.value;
    this.sortOrder = 1;
    this.sortField = value;
   /* if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }*/
  }

  onDialogHide() {
    this.selectedTeam = null;
  }


getTeams() {
  this.db.isBusy = true;
  this.db.getTeamsRef().valueChanges().subscribe(teams => {
    this.teams = teams;
    this.db.isBusy = false;
  });
}


  addNewGroup() {
this.sd.routeTo('newGroup');
  }

  addInfoTreat(team) {
    this.sd.routeTo('newGroupTreat', '' + team.groupCode);
  }
}
