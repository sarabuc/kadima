import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireFunctionsModule } from 'angularfire2/functions';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule  } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { CheckboxModule } from 'primeng/checkbox';
import { TagInputModule } from 'ngx-chips';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table'; 
import { DialogModule } from 'primeng/dialog';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import {BlockUIModule} from 'primeng/blockui';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { ChartModule } from 'primeng/chart';
import {InplaceModule} from 'primeng/inplace';
import {ListboxModule} from 'primeng/listbox';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {MessageService} from 'primeng/components/common/messageservice';
import {MessagesModule} from 'primeng/messages';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {MessageModule} from 'primeng/message';
import {KeyFilterModule} from 'primeng/keyfilter';
import {AccordionModule} from 'primeng/accordion';
import { FieldsetModule } from 'primeng/fieldset';
import {InputMaskModule} from 'primeng/inputmask';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { HttpModule, JsonpModule } from '@angular/http'; /* */
import {TreeTableModule} from 'primeng/treetable';
import {TreeNode} from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import {GrowlModule} from 'primeng/growl';
import { TreeModule } from 'primeng/tree';
import { ButtonModule } from 'primeng/button';
import {InputSwitchModule} from 'primeng/inputswitch';
import { polyfill as keyboardEventKeyPolyfill } from 'keyboardevent-key-polyfill';
import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';
// import {MailModule} from '../app/mail/mail.module';
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
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

import { NewTherapistComponent } from './therapist/new-therapist/new-therapist.component';
import { NewPatientComponent } from './patient/new-patient/new-patient.component';
import { NewTreatmentInfoComponent } from './treatment/new-treatment-info/new-treatment-info.component';
import { FreeTimeComponent } from './parts/free-time/free-time.component';
import { DifficultComponent } from './mipuy/difficult/difficult.component';
import { ShowDifficultiesComponent } from './mipuy/show-difficulties/show-difficulties.component';
import { TherapistCardComponent } from './therapist/therapist-card/therapist-card.component';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { TherapistProfileComponent } from './therapist/therapist-profile/therapist-profile.component';
import { UpdateTherapistComponent } from './therapist/update-therapist/update-therapist.component';
import { TempComponent } from './parts/temp/temp.component';
import { AddPatientsFromExelComponent } from './patient/add-patients-from-exel/add-patients-from-exel.component';
import { TherapistListComponent } from './therapist/therapist-list/therapist-list.component';
import { TimeTableToShowComponent } from './parts/time-table-to-show/time-table-to-show.component';
import { LoginComponent } from './pages/login/login.component';
import { NewMipuyComponent } from './mipuy/new-mipuy/new-mipuy.component';
import { PatientCardComponent } from './patient/patient-card/patient-card.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientProfileComponent } from './patient/patient-profile/patient-profile.component';
import { UpdatePatientComponent } from './patient/update-patient/update-patient.component';
import { MipuyForPatientComponent } from './patient/mipuy-for-patient/mipuy-for-patient.component';
import { AddDiffiFromExelComponent } from './mipuy/add-diffi-from-exel/add-diffi-from-exel.component';
import { DiffiAndMethodsComponent } from './mipuy/diffi-and-methods/diffi-and-methods.component';
import { ShowMipuyComponent } from './mipuy/show-mipuy/show-mipuy.component';
import { ShowTreatmentInfoComponent } from './treatment/show-treatment-info/show-treatment-info.component';
import { ShowTreatmentForPatientComponent } from './patient/show-treatment-for-patient/show-treatment-for-patient.component';
import { ShowTreatmentForTherapistComponent } from './therapist/show-treatment-for-therapist/show-treatment-for-therapist.component';
// import { SampleModule } from 'angular-pdf-generator';
import { ExportAsModule } from 'ngx-export-as';
import {PickListModule} from 'primeng/picklist';




/*services*/
import { DbService } from './services/db.service';
import { ShareDataService } from './services/share-data.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';


import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service

import {  NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NewPlanForPatientComponent } from './patient/new-plan-for-patient/new-plan-for-patient.component';
// import { UpdatePlanForPatientComponent } from './patient/update-plan-for-patient/update-plan-for-patient.component';
import { ShowMethodsComponent } from './mipuy/show-methods/show-methods.component';
import { NewMipuyFromExelComponent } from './mipuy/new-mipuy-from-exel/new-mipuy-from-exel.component';
import { CreateMassageForUserComponent } from './pages/create-massage-for-user/create-massage-for-user.component';
import { GraedsForPatientComponent } from './patient/graeds-for-patient/graeds-for-patient.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingComponent } from './pages/setting/setting.component';
import { NewGradesComponent } from './pages/new-grades/new-grades.component';
import { NewGroupComponent } from './teams/new-group/new-group.component';
import { TeamsComponent } from './teams/teams/teams.component';
import { ProgressManageComponent } from './pages/progress-manage/progress-manage.component';
import { NewGroupTreatmentComponent } from './treatment/new-group-treatment/new-group-treatment.component';
import { MailBoxComponent } from './mail/mail-box/mail-box.component';
import { ReportByClassComponent } from './reports/report-by-class/report-by-class.component';
import { ReportByAreaComponent } from './reports/report-by-area/report-by-area.component';
import { ReportByTherapistComponent } from './reports/report-by-therapist/report-by-therapist.component';


const firebase = {
    apiKey: 'AIzaSyC39tgVZlnrGvyirclUb92ZiyCNOqcGubA',
    authDomain: 'kadima1-fa119.firebaseapp.com',
    databaseURL: 'https://kadima1-fa119.firebaseio.com',
    projectId: 'kadima1-fa119',
    storageBucket: 'kadima1-fa119.appspot.com',
    messagingSenderId: '890519841483'
  };

keyboardEventKeyPolyfill();

@NgModule({
  declarations: [
   // XlsxFileUploadComponent,
    AppComponent,
    HomePageComponent,
    AboutComponent,
    ContactComponent,
    NewTherapistComponent,
    NewPatientComponent,
    NewTreatmentInfoComponent,
    FreeTimeComponent,
    DifficultComponent,
    ShowDifficultiesComponent,
    TherapistCardComponent,
    TherapistProfileComponent,
    UpdateTherapistComponent,
    TempComponent,
    AddPatientsFromExelComponent,
    TherapistListComponent,
    TimeTableToShowComponent,
    LoginComponent,
    NewMipuyComponent,
    PatientCardComponent,
    PatientListComponent,
    PatientProfileComponent,
    UpdatePatientComponent,
    MipuyForPatientComponent,
    AddDiffiFromExelComponent,
    DiffiAndMethodsComponent,
    ShowMipuyComponent,
    ShowTreatmentInfoComponent,
    ShowTreatmentForPatientComponent,
    ShowTreatmentForTherapistComponent,
    NewPlanForPatientComponent,
    ShowMethodsComponent,
    NewMipuyFromExelComponent,
    CreateMassageForUserComponent,
    GraedsForPatientComponent,
    ReportsComponent,
    SettingComponent,
    NewGradesComponent,
    NewGroupComponent,
    TeamsComponent,
    ProgressManageComponent,
    NewGroupTreatmentComponent,
    MailBoxComponent,
    ReportByClassComponent,
    ReportByAreaComponent,
    ReportByTherapistComponent,
  ],
  imports: [
    ChartModule,
    PickListModule,

    ExportAsModule,
    // SampleModule,
   // MailModule,
    HttpClientModule,
    SelectButtonModule,
    DropdownModule,
    InputTextareaModule,
    SliderModule,
    RatingModule,
     DialogModule,
    TableModule,
    TagInputModule,
 CalendarModule,
    ToggleButtonModule,
   InplaceModule,
   OverlayPanelModule,
    CheckboxModule,
    ListboxModule,
    AngularFireAuthModule,
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
    ButtonModule,
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
    AngularFireFunctionsModule,
    AngularFirestoreModule.enablePersistence(),
    MDBBootstrapModule.forRoot(),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circleSwish,
      backdropBackgroundColour: 'rgba(0,0,0,0.75)',
      backdropBorderRadius: '4px',
      primaryColour: 'yellow',
      secondaryColour: 'purple',
      tertiaryColour: '#ffffff',
      fullScreenBackdrop: true
    }),
 DataViewModule,
    PanelModule,
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
    TreeModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    FileUploadModule,
    TriStateCheckboxModule,
    InputSwitchModule,
    BlockUIModule
  ],
  providers: [MatDialog,
  MessageService,
    DbService,
    ShareDataService,
    AuthGuard,
    AuthService,
    MessageService,
    DatePipe],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
