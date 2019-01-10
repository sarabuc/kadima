import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
/*components*/
import { NewPlanForPatientComponent } from './patient/new-plan-for-patient/new-plan-for-patient.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { NewMipuyFromExelComponent } from './mipuy/new-mipuy-from-exel/new-mipuy-from-exel.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MailBoxComponent } from './mail/mail-box/mail-box.component';
import { NewTherapistComponent } from './therapist/new-therapist/new-therapist.component';
import { NewPatientComponent } from './patient/new-patient/new-patient.component';
import { NewTreatmentInfoComponent } from './treatment/new-treatment-info/new-treatment-info.component';
import { ProgressManageComponent } from './pages/progress-manage/progress-manage.component'
import { TherapistCardComponent } from './therapist/therapist-card/therapist-card.component';
import { TeamsComponent } from './teams/teams/teams.component';
import { TempComponent } from './parts/temp/temp.component';
import { AddPatientsFromExelComponent } from './patient/add-patients-from-exel/add-patients-from-exel.component';
import { TherapistListComponent } from './therapist/therapist-list/therapist-list.component';
import { LoginComponent } from './pages/login/login.component';
import { NewMipuyComponent } from './mipuy/new-mipuy/new-mipuy.component';
import { PatientCardComponent } from './patient/patient-card/patient-card.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { AddDiffiFromExelComponent } from './mipuy/add-diffi-from-exel/add-diffi-from-exel.component';
import { DiffiAndMethodsComponent } from './mipuy/diffi-and-methods/diffi-and-methods.component';
import { RegisterComponent } from './pages/login/register/register.component';
import { NewGradesComponent } from './pages/new-grades/new-grades.component';
import { NewGroupComponent } from './teams/new-group/new-group.component';
import { NewGroupTreatmentComponent } from './treatment/new-group-treatment/new-group-treatment.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportByAreaComponent } from './reports/report-by-area/report-by-area.component';
import { ReportByClassComponent } from './reports/report-by-class/report-by-class.component';
import { ReportByTherapistComponent } from './reports/report-by-therapist/report-by-therapist.component';
import { SettingComponent } from './pages/setting/setting.component';
const appRoutes: Routes = [
  { path: '', redirectTo: /*'home'*/'login', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
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
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'newMipuy', component: NewMipuyComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'newGrades', component: NewGradesComponent },
  { path: 'progress/:id', component: ProgressManageComponent },
  { path: 'patList/:status', component: PatientListComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'bookeeping', component: TempComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'Treatment-planning/:status', component: PatientListComponent },
  { path: 'plan/:id', component: NewPlanForPatientComponent },
  { path: 'updatePlan/:id', component: NewPlanForPatientComponent },
  { path: 'diffiAndMethods', component: DiffiAndMethodsComponent },
  { path: 'addTestGrades', component: NewGradesComponent },
  { path: 'newGroupTreat', component: NewGroupTreatmentComponent },
  { path: 'newGroupTreat/:id', component: NewGroupTreatmentComponent },
  { path: 'reportByArea', component: ReportByAreaComponent },
  { path: 'reportByClass', component: ReportByClassComponent },
  { path: 'reportByTherapist', component: ReportByTherapistComponent },
  { path: 'reportByPatient', component: TempComponent },
  { path: 'mails', component: MailBoxComponent },

  { path: 'newGroup', component: NewGroupComponent },
  { path: 'mipuy-exel', component: NewMipuyFromExelComponent },
  { path: 'teams', component: TeamsComponent },
  { path: '**', redirectTo: 'login' }
];



export const appRoutingProviders: any[] = [];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
