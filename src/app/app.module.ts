import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule  } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { routing } from './app.routing';


import {MessageService} from 'primeng/components/common/messageservice';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {KeyFilterModule} from 'primeng/keyfilter';
import {AccordionModule} from 'primeng/accordion';
import { FieldsetModule } from 'primeng/fieldset';
import {InputMaskModule} from 'primeng/inputmask';
import { HttpModule, JsonpModule } from '@angular/http'; /* */
import {TreeTableModule} from 'primeng/treetable';
import {TreeNode} from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import {GrowlModule} from 'primeng/growl';
import { TreeModule } from 'primeng/tree';

/*material*/
import {MatTreeModule} from '@angular/material/tree';
import {
  MatSelectModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSliderModule,
  MatCheckboxModule,
  MatInputModule,
  MatSlideToggleModule,
  MatStepperModule,
  MatListModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatGridListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatTabsModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatNativeDateModule,
  MatDialog
} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import 'hammerjs';
// import { JasperoAlertsModule } from '@jaspero/ng2-alerts';
import { MatIconRegistry } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
/*components*/
import { AppComponent } from './app.component';
import { MenuComponent } from './parts/menu/menu.component';
import { SignupComponent } from './parts/signup/signup.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { BeforeLoginComponent } from './pages/before-login/before-login.component';
import { ContactComponent } from './pages/contact/contact.component';

import { NewTherapistComponent } from './therapist/new-therapist/new-therapist.component';
import { NewPatientComponent } from './patient/new-patient/new-patient.component';
import { NewTreatmentProgressComponent } from './treatment/new-treatment-progress/new-treatment-progress.component';
import { NewTreatmentInfoComponent } from './treatment/new-treatment-info/new-treatment-info.component';
import { FreeTimeComponent } from './parts/free-time/free-time.component';
import { DifficultComponent } from './mipuy/difficult/difficult.component';
import { ShowDifficultiesComponent } from './mipuy/show-difficulties/show-difficulties.component';
import { TherapistCardComponent } from './therapist/therapist-card/therapist-card.component';

import { MethodsForTherapistComponent } from './therapist/methods-for-therapist/methods-for-therapist.component';
import { TherapistProfileComponent } from './therapist/therapist-profile/therapist-profile.component';
import { UpdateTherapistComponent } from './therapist/update-therapist/update-therapist.component';
import { TempComponent } from './parts/temp/temp.component';
import { AddPatientsFromExelComponent } from './patient/add-patients-from-exel/add-patients-from-exel.component';
import { ScheduleComponent } from './parts/schedule/schedule.component';
import { AddTherapistFromExelComponent } from './therapist/add-therapist-from-exel/add-therapist-from-exel.component';
import { TherapistListComponent } from './therapist/therapist-list/therapist-list.component';
import { TimeTableToShowComponent } from './parts/time-table-to-show/time-table-to-show.component';
import { LoginComponent } from './pages/login/login.component';
import { NewMipuyComponent } from './mipuy/new-mipuy/new-mipuy.component';
import { DifficutForMipuyComponent } from './mipuy/difficut-for-mipuy/difficut-for-mipuy.component';
import { PatientCardComponent } from './patient/patient-card/patient-card.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientProfileComponent } from './patient/patient-profile/patient-profile.component';
import { UpdatePatientComponent } from './patient/update-patient/update-patient.component';
import { MipuyForPatientComponent } from './patient/mipuy-for-patient/mipuy-for-patient.component';
import { ChipsInteractionComponent } from './parts/chips-interaction/chips-interaction.component';
import { AddDiffiFromExelComponent } from './mipuy/add-diffi-from-exel/add-diffi-from-exel.component';
import { DiffiAndMethodsComponent } from './mipuy/diffi-and-methods/diffi-and-methods.component';
import { ShowMipuyComponent } from './mipuy/show-mipuy/show-mipuy.component';
import { ShowTreatmentInfoComponent } from './treatment/show-treatment-info/show-treatment-info.component';
import { ShowTreatmentForPatientComponent } from './patient/show-treatment-for-patient/show-treatment-for-patient.component';
import { ShowTreatmentForTherapistComponent } from './therapist/show-treatment-for-therapist/show-treatment-for-therapist.component';




/*services*/
import { DbService } from './services/db.service';
import { ShareDataService } from './services/share-data.service';
import { AuthService } from './services/auth.service';
import { NodeService } from './services/node.service';
import { GuardGuard } from './services/guard.guard';
// import { MessageService } from './services/message.service';
import { ReturnMessageService } from './services/return-message.service';





import {  NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NewPlanForPatientComponent } from './patient/new-plan-for-patient/new-plan-for-patient.component';
/*
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';*/

const firebase = {
    apiKey: 'AIzaSyC39tgVZlnrGvyirclUb92ZiyCNOqcGubA',
    authDomain: 'kadima1-fa119.firebaseapp.com',
    databaseURL: 'https://kadima1-fa119.firebaseio.com',
    projectId: 'kadima1-fa119',
    storageBucket: 'kadima1-fa119.appspot.com',
    messagingSenderId: '890519841483'
  };


@NgModule({
  declarations: [
   // XlsxFileUploadComponent,
    AppComponent,
    SignupComponent,
    HomePageComponent,
    AboutComponent,
    MenuComponent,
    BeforeLoginComponent,
    ContactComponent,
    NewTherapistComponent,
    NewPatientComponent,
    NewTreatmentProgressComponent,
    NewTreatmentInfoComponent,
    FreeTimeComponent,
    DifficultComponent,
    ShowDifficultiesComponent,
    TherapistCardComponent,
    MethodsForTherapistComponent,
    TherapistProfileComponent,
    UpdateTherapistComponent,
    TempComponent,
    AddPatientsFromExelComponent,
    ScheduleComponent,
    AddTherapistFromExelComponent,
    TherapistListComponent,
    TimeTableToShowComponent,
    LoginComponent,
    NewMipuyComponent,
    DifficutForMipuyComponent,
    PatientCardComponent,
    PatientListComponent,
    PatientProfileComponent,
    UpdatePatientComponent,
    MipuyForPatientComponent,
    ChipsInteractionComponent,
    AddDiffiFromExelComponent,
    DiffiAndMethodsComponent,
    ShowMipuyComponent,
    ShowTreatmentInfoComponent,
    ShowTreatmentForPatientComponent,
    ShowTreatmentForTherapistComponent,
    NewPlanForPatientComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSliderModule,
    MatInputModule,
    MatCheckboxModule,
    MatTreeModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatListModule,
    MatTableModule,
    MatAutocompleteModule,

    MatButtonToggleModule,
    MatChipsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatTabsModule,
    MatPaginatorModule,
    MatExpansionModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule.enablePersistence(),
    MDBBootstrapModule.forRoot(),
    // JasperoAlertsModule,
   AccordionModule,
  FieldsetModule,
  InputMaskModule,
  MessagesModule,
MessageModule,
KeyFilterModule,
TreeTableModule,
    FileUploadModule,
   HttpModule,
   JsonpModule, GrowlModule,
    TreeModule
  ],
  providers: [MatDialog,
  MessageService,
    DbService,
    ShareDataService,
    GuardGuard,
    AuthService,
    MessageService,
    NodeService,
    DatePipe,
    ReturnMessageService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
