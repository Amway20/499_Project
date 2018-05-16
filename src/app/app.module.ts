import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { SuiModule } from 'ng2-semantic-ui';
import { AngularFireModule} from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// services
import { FirebaseService } from './service/firebase-service.service';
import { LoginServiceService } from './service/login-service.service';
import { ExcelService } from './service/excel.service';

// components
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageSubjectComponent } from './manage-subject/manage-subject.component';
import { ManageSurveyComponent } from './manage-survey/manage-survey.component';
import { ReportsComponent } from './reports/reports.component';
import { ManageUserHeaderComponent } from './manage-user-header/manage-user-header.component';
import { ManageGraduatesComponent } from './manage-graduates/manage-graduates.component';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { ManageAdminComponent } from './manage-admin/manage-admin.component';
import { AddAdminComponent } from './manage-admin/add-admin/add-admin.component';
import { UpdateAdminComponent } from './manage-admin/update-admin/update-admin.component';
import { AddCompanyComponent } from './manage-company/add-company/add-company.component';
import { UpdateCompanyComponent } from './manage-company/update-company/update-company.component';
import { AddGradComponent } from './manage-graduates/add-grad/add-grad.component';
import { UpdateGradComponent } from './manage-graduates/update-grad/update-grad.component';
import { AddSubjectComponent } from './manage-subject/add-subject/add-subject.component';
import { UpdateSubjectComponent } from './manage-subject/update-subject/update-subject.component';
import { ManageSurveyBarComponent } from './manage-survey-bar/manage-survey-bar.component';
import { AddSurveyComponent } from './manage-survey/add-survey/add-survey.component';
import { DoSurveyComponent } from './do-survey/do-survey.component';
import { ReportBarComponent } from './report-bar/report-bar.component';
import { DoSurveyHeaderComponent } from './do-survey-header/do-survey-header.component';
import { AddDoSurveyComponent } from './do-survey/add-do-survey/add-do-survey.component';
import { WorkReportComponent } from './reports/work-report/work-report.component';
import { SubjectReportComponent } from './reports/subject-report/subject-report.component';
import { EditSurveyComponent } from './manage-survey/edit-survey/edit-survey.component';
import { CheckStudentComponent } from './manage-survey/check-student/check-student.component';
import { CompanyReportComponent } from './reports/company-report/company-report.component';

// Material
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

//primeng
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
import {ChartModule} from 'primeng/chart';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderBarComponent,
    DashboardComponent,
    ManageUserComponent,
    ManageSubjectComponent,
    ManageSurveyComponent,
    ReportsComponent,
    ManageUserHeaderComponent,
    ManageGraduatesComponent,
    ManageCompanyComponent,
    ManageAdminComponent,
    AddAdminComponent,
    UpdateAdminComponent,
    AddCompanyComponent,
    UpdateCompanyComponent,
    AddGradComponent,
    UpdateGradComponent,
    AddSubjectComponent,
    UpdateSubjectComponent,
    ManageSurveyBarComponent,
    AddSurveyComponent,
    DoSurveyComponent,
    ReportBarComponent,
    DoSurveyHeaderComponent,
    AddDoSurveyComponent,
    WorkReportComponent,
    SubjectReportComponent,
    EditSurveyComponent,
    CheckStudentComponent,
    CompanyReportComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    BrowserAnimationsModule,
    AccordionModule,
    BrowserModule,
    ChartModule,
    MatTabsModule
  ],
  providers: [FirebaseService, LoginServiceService, ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
