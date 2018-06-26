import { Component, OnInit, Input } from '@angular/core';
import { Therapist } from '../services/db.service';

@Component({
  selector: 'app-therapist-profile',
  templateUrl: './therapist-profile.component.html',
  styleUrls: ['./therapist-profile.component.scss']
})
export class TherapistProfileComponent implements OnInit {

  @Input() thera: Therapist;

  constructor() { }

  ngOnInit() {
    
  }

}
