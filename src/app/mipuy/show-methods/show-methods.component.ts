import { Component, OnInit } from '@angular/core';
import { DbService, Patient, Therapist, Method, Difficulty } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-show-methods',
  templateUrl: './show-methods.component.html',
  styleUrls: ['./show-methods.component.css']
})
export class ShowMethodsComponent implements OnInit {
  treatCategories: any[] = [];
  allMethodsList: any[] = [];
  therapists: any[] = [];
  selectedTheras: any[] = [];
  selectedDiffi: any[] = [];
  searchMethod = '';
  selectedMethod;
  newM;


  constructor(public db: DbService, private sd: ShareDataService) { }

  ngOnInit() {
    this.db.getTreatmentCategoriesRef().valueChanges().subscribe(C => {
      this.treatCategories = [];
      C.forEach(c => {
        this.treatCategories.push({ code: c.code });
      });
      console.log(this.treatCategories);
    });
    this.db.getAllMethodsRef().valueChanges().subscribe(M => {
      this.allMethodsList = M;
    });

    this.db.getAllTherapistsRef().valueChanges().subscribe(T => {
      this.therapists = [];
      T.forEach(t => {
        this.therapists.push({ id: t.id, name: t.firstName + ' ' + t.lastName });
      });

    });

  }

  isPrefix(M) {
    const filter = this.searchMethod.toUpperCase();
    return (M.toUpperCase().indexOf(filter) > -1);
  }
  matchToDiff(oPanel, event, treatCode) {
    oPanel.toggle(event);
    this.selectedMethod = treatCode;
  }
  matchToTherapist(oPanel, event, treatCode) {
    oPanel.toggle(event);
    this.selectedMethod = treatCode;
  }
  saveMatchTherapist(list, oPanel, event) {
    const M_T = {
      Mcode: this.selectedMethod,
      Tid: ''
    };
    this.selectedTheras.forEach(thera => {
      M_T.Tid = thera.id;
      this.db.addMethodForTherapist(M_T);
    });
    this.selectedTheras = [];
    list.value = [];
    oPanel.hide(event);
    this.sd.createAlert('success', 'עודכן בהצלחה', '');

  }
  saveMatchDiffi(list, oPanel, event) {
    const M_D = {
      Mcode: this.selectedMethod,
      Dcode: ''
    };
    this.selectedTheras.forEach(dif => {
      M_D.Dcode = dif.code;
      this.db.addMethodForDifficult(M_D);
    });
    this.selectedTheras = [];
    list.value = [];
    oPanel.hide(event);
    this.sd.createAlert('success', 'עודכן בהצלחה', '');
  }

  saveNewMethod() {
    const meth = {
      code: this.newM,
      description: this.newM
    };
    this.db.addMethod(meth);
    this.newM = '';
  }

  onChangeSelectedDiff(event, list) {
    console.log(list);
    console.log(event);
    const selected = event;
    const index = this.selectedDiffi.indexOf(selected);
    console.log(index);

    if (index > -1) {
      this.selectedDiffi.splice(index, 1);
    } else {
      this.selectedDiffi.push(selected);
    }


    list.value = this.selectedDiffi;
    console.log(list);
    console.log(this.selectedDiffi);
  }

  onChangeSelectedThera(event, list) {
    console.log(list);
    console.log(event);
    const selected = event;
    const index = this.selectedTheras.indexOf(selected);
    console.log(index);

    if (index > -1) {
      this.selectedTheras.splice(index, 1);
    } else {
      this.selectedTheras.push(selected);
    }


    list.value = this.selectedTheras;
    console.log(list);
    console.log(this.selectedTheras);
  }

}
