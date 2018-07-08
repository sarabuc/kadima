import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
// components
import { PatientCardComponent } from './patient-card/patient-card.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { NewMipuyComponent } from './new-mipuy/new-mipuy.component';
import { BeforeLoginComponent } from './before-login/before-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { NewTherapistComponent } from './new-therapist/new-therapist.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { NewTreatmentProgressComponent } from './new-treatment-progress/new-treatment-progress.component';
import { NewTreatmentInfoComponent } from './new-treatment-info/new-treatment-info.component';
import { ContactComponent } from './contact/contact.component';
import { ShowDifficultiesComponent } from './show-difficulties/show-difficulties.component';
import { UpdateTherapistComponent } from './update-therapist/update-therapist.component';
import { TherapistCardComponent } from './therapist-card/therapist-card.component';
import { TempComponent } from './temp/temp.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AddPatientsFromExelComponent } from './add-patients-from-exel/add-patients-from-exel.component';
import { AddTherapistFromExelComponent } from './add-therapist-from-exel/add-therapist-from-exel.component';
import { TherapistListComponent } from './therapist-list/therapist-list.component';
import { LoginComponent } from './login/login.component';
import { AddDiffiFromExelComponent } from './add-diffi-from-exel/add-diffi-from-exel.component';
import { DiffiAndMethodsComponent } from './diffi-and-methods/diffi-and-methods.component';
const appRoutes: Routes = [

 // { path: 'b', component: BeforeLoginComponent},
  { path: '', component: HomePageComponent },

  { path: 'about', component: AboutComponent },
  { path: 'Tcard/:id', component: TherapistCardComponent },
  { path: 'Tcards', component: TherapistListComponent },
  { path: 'Pcard/:id', component: PatientCardComponent },
  { path: 'Pcards', component: PatientListComponent },
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
  { path: 'Treatment-planning', component: TempComponent }, 
  {path: 'diffiAndMethods', component:DiffiAndMethodsComponent }
];



export const appRoutingProviders: any[] = [];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
