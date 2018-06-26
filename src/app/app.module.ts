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
/*material*/
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
  MatTableModule,
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
import 'hammerjs';
// import { JasperoAlertsModule } from '@jaspero/ng2-alerts';
import { MatIconRegistry } from '@angular/material/icon';
/*components*/
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';




/*services*/
import { DbService } from './services/db.service';
import { ShareDataService } from './services/share-data.service';
import { AuthService } from './services/auth.service';
import { GuardGuard } from './services/guard.guard';
// import { MessageService } from './services/message.service';
import { ReturnMessageService } from './services/return-message.service';





import {  NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BeforeLoginComponent } from './before-login/before-login.component';
import { ContactComponent } from './contact/contact.component';

import { NewTherapistComponent } from './new-therapist/new-therapist.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { NewTreatmentProgressComponent } from './new-treatment-progress/new-treatment-progress.component';
import { NewTreatmentInfoComponent } from './new-treatment-info/new-treatment-info.component';
import { FreeTimeComponent } from './free-time/free-time.component';
import { DifficultComponent } from './difficult/difficult.component';
import { ShowDifficultiesComponent } from './show-difficulties/show-difficulties.component';
import { TherapistCardComponent } from './therapist-card/therapist-card.component';

import { ShowTreatmentByTherapistComponent } from './show-treatment-by-therapist/show-treatment-by-therapist.component';
import { MethodsForTherapistComponent } from './methods-for-therapist/methods-for-therapist.component';
import { TherapistProfileComponent } from './therapist-profile/therapist-profile.component';
import { UpdateTherapistComponent } from './update-therapist/update-therapist.component';
import { TempComponent } from './temp/temp.component';
import { AddPatientsFromExelComponent } from './add-patients-from-exel/add-patients-from-exel.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AddTherapistFromExelComponent } from './add-therapist-from-exel/add-therapist-from-exel.component';
import { TherapistListComponent } from './therapist-list/therapist-list.component';
import { TimeTableToShowComponent } from './time-table-to-show/time-table-to-show.component';
import { LoginComponent } from './login/login.component';
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
    ShowTreatmentByTherapistComponent,
    MethodsForTherapistComponent,
    TherapistProfileComponent,
    UpdateTherapistComponent,
    TempComponent,
    AddPatientsFromExelComponent,
    ScheduleComponent,
    AddTherapistFromExelComponent,
    TherapistListComponent,
    TimeTableToShowComponent,
    LoginComponent
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
   JsonpModule, GrowlModule
  ],
  providers: [MatDialog,
  MessageService,
    DbService,
    ShareDataService,
    GuardGuard,
    AuthService,
    MessageService,
    ReturnMessageService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
