import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageSubjectComponent } from './manage-subject/manage-subject.component';
import { ManageSurveyComponent } from './manage-survey/manage-survey.component';
import { ReportsComponent } from './reports/reports.component';
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
import { AddSurveyComponent } from './manage-survey/add-survey/add-survey.component';
import { EditSurveyComponent } from './manage-survey/edit-survey/edit-survey.component';
import { CheckStudentComponent } from './manage-survey/check-student/check-student.component';
import { DoSurveyComponent } from './do-survey/do-survey.component';
import { AddDoSurveyComponent } from './do-survey/add-do-survey/add-do-survey.component';
import { WorkReportComponent } from './reports/work-report/work-report.component';
import { SubjectReportComponent } from './reports/subject-report/subject-report.component';
import { CompanyReportComponent } from './reports/company-report/company-report.component';
import { AppComponent} from './app.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent } ,
  { path: 'admin-login', component: AdminLoginComponent } ,
  { path: 'manage-user', component: ManageUserComponent } ,
  { path: 'manage-subject', component: ManageSubjectComponent } ,
  { path: 'manage-survey', component: ManageSurveyComponent } ,
  { path: 'reports', component: ReportsComponent } ,
  { path: 'manage-graduates', component: ManageGraduatesComponent } ,
  { path: 'manage-company', component: ManageCompanyComponent } ,
  { path: 'manage-admin', component: ManageAdminComponent } ,
  { path: 'add-admin', component: AddAdminComponent } ,
  { path: 'add-grad', component: AddGradComponent } ,
  { path: 'add-company', component: AddCompanyComponent } ,
  { path: 'add-subject', component: AddSubjectComponent } ,
  { path: 'add-survey', component: AddSurveyComponent } ,
  { path: 'edit-survey', component: EditSurveyComponent } ,
  { path: 'check-student', component: CheckStudentComponent } ,
  { path: 'do-survey', component: DoSurveyComponent } ,
  { path: 'add-do-survey', component: AddDoSurveyComponent } ,
  { path: 'work-report', component: WorkReportComponent } ,
  { path: 'subject-report', component: SubjectReportComponent } ,
  { path: 'company-report', component: CompanyReportComponent } ,
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
