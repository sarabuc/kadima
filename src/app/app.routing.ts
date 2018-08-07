import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { GuardGuard } from './services/guard.guard';
/*components*/
import { NewPlanForPatientComponent } from './patient/new-plan-for-patient/new-plan-for-patient.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';

import { ContactComponent } from './pages/contact/contact.component';

import { NewTherapistComponent } from './therapist/new-therapist/new-therapist.component';
import { NewPatientComponent } from './patient/new-patient/new-patient.component';
import { NewTreatmentProgressComponent } from './treatment/new-treatment-progress/new-treatment-progress.component';
import { NewTreatmentInfoComponent } from './treatment/new-treatment-info/new-treatment-info.component';

import { DifficultComponent } from './mipuy/difficult/difficult.component';

import { TherapistCardComponent } from './therapist/therapist-card/therapist-card.component';

import { TempComponent } from './parts/temp/temp.component';
import { AddPatientsFromExelComponent } from './patient/add-patients-from-exel/add-patients-from-exel.component';
import { TherapistListComponent } from './therapist/therapist-list/therapist-list.component';
import { TimeTableToShowComponent } from './parts/time-table-to-show/time-table-to-show.component';
import { LoginComponent } from './pages/login/login.component';
import { NewMipuyComponent } from './mipuy/new-mipuy/new-mipuy.component';
import { DifficutForMipuyComponent } from './mipuy/difficut-for-mipuy/difficut-for-mipuy.component';
import { PatientCardComponent } from './patient/patient-card/patient-card.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { AddDiffiFromExelComponent } from './mipuy/add-diffi-from-exel/add-diffi-from-exel.component';
import { DiffiAndMethodsComponent } from './mipuy/diffi-and-methods/diffi-and-methods.component';



const appRoutes: Routes = [

  { path: '', component: HomePageComponent, canActivate: [GuardGuard] },

  { path: 'about', component: AboutComponent },
  { path: 'Tcard/:id', component: TherapistCardComponent },
  { path: 'Tcards', component: TherapistListComponent },
  { path: 'Pcard/:id', component: PatientCardComponent },
  { path: 'Pcards/:status', component: PatientListComponent },
  { path: 'newTreatmentInfo', component: NewTreatmentInfoComponent },
  { path: 'addPatient', component: NewPatientComponent },
  { path: 'addTherapist', component: NewTherapistComponent },
  { path: 'temp', component: TempComponent },
  { path: 'addDiffiFromExel', component: AddDiffiFromExelComponent },
  { path: 'addPPatientsFromExel', component: AddPatientsFromExelComponent },
  { path: 'addTherapistFromExel', component: AddPatientsFromExelComponent },
 { path: 'login', component: LoginComponent},
 { path: 'newMipuy', component: NewMipuyComponent },
  { path: 'Report', component: TempComponent },
  { path: 'check-progress', component: TempComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'Treatment-planning/:status', component: PatientListComponent },
  { path: 'plan/:id', component: NewPlanForPatientComponent },
  {path: 'diffiAndMethods', component: DiffiAndMethodsComponent }
];



export const appRoutingProviders: any[] = [];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
