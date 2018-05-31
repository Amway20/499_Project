webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_admin_login_admin_login_component__ = __webpack_require__("../../../../../src/app/login/admin-login/admin-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manage_user_manage_user_component__ = __webpack_require__("../../../../../src/app/manage-user/manage-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manage_subject_manage_subject_component__ = __webpack_require__("../../../../../src/app/manage-subject/manage-subject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manage_survey_manage_survey_component__ = __webpack_require__("../../../../../src/app/manage-survey/manage-survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reports_reports_component__ = __webpack_require__("../../../../../src/app/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__manage_graduates_manage_graduates_component__ = __webpack_require__("../../../../../src/app/manage-graduates/manage-graduates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__manage_company_manage_company_component__ = __webpack_require__("../../../../../src/app/manage-company/manage-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__manage_admin_manage_admin_component__ = __webpack_require__("../../../../../src/app/manage-admin/manage-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__manage_admin_add_admin_add_admin_component__ = __webpack_require__("../../../../../src/app/manage-admin/add-admin/add-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__manage_company_add_company_add_company_component__ = __webpack_require__("../../../../../src/app/manage-company/add-company/add-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__manage_graduates_add_grad_add_grad_component__ = __webpack_require__("../../../../../src/app/manage-graduates/add-grad/add-grad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__manage_subject_add_subject_add_subject_component__ = __webpack_require__("../../../../../src/app/manage-subject/add-subject/add-subject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__manage_survey_add_survey_add_survey_component__ = __webpack_require__("../../../../../src/app/manage-survey/add-survey/add-survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__manage_survey_edit_survey_edit_survey_component__ = __webpack_require__("../../../../../src/app/manage-survey/edit-survey/edit-survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__manage_survey_check_student_check_student_component__ = __webpack_require__("../../../../../src/app/manage-survey/check-student/check-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__do_survey_do_survey_component__ = __webpack_require__("../../../../../src/app/do-survey/do-survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__do_survey_add_do_survey_add_do_survey_component__ = __webpack_require__("../../../../../src/app/do-survey/add-do-survey/add-do-survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__reports_work_report_work_report_component__ = __webpack_require__("../../../../../src/app/reports/work-report/work-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__reports_subject_report_subject_report_component__ = __webpack_require__("../../../../../src/app/reports/subject-report/subject-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__reports_company_report_company_report_component__ = __webpack_require__("../../../../../src/app/reports/company-report/company-report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var routes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'admin-login', component: __WEBPACK_IMPORTED_MODULE_4__login_admin_login_admin_login_component__["a" /* AdminLoginComponent */] },
    { path: 'manage-user', component: __WEBPACK_IMPORTED_MODULE_5__manage_user_manage_user_component__["a" /* ManageUserComponent */] },
    { path: 'manage-subject', component: __WEBPACK_IMPORTED_MODULE_6__manage_subject_manage_subject_component__["a" /* ManageSubjectComponent */] },
    { path: 'manage-survey', component: __WEBPACK_IMPORTED_MODULE_7__manage_survey_manage_survey_component__["a" /* ManageSurveyComponent */] },
    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_8__reports_reports_component__["a" /* ReportsComponent */] },
    { path: 'manage-graduates', component: __WEBPACK_IMPORTED_MODULE_9__manage_graduates_manage_graduates_component__["a" /* ManageGraduatesComponent */] },
    { path: 'manage-company', component: __WEBPACK_IMPORTED_MODULE_10__manage_company_manage_company_component__["a" /* ManageCompanyComponent */] },
    { path: 'manage-admin', component: __WEBPACK_IMPORTED_MODULE_11__manage_admin_manage_admin_component__["a" /* ManageAdminComponent */] },
    { path: 'add-admin', component: __WEBPACK_IMPORTED_MODULE_12__manage_admin_add_admin_add_admin_component__["a" /* AddAdminComponent */] },
    { path: 'add-grad', component: __WEBPACK_IMPORTED_MODULE_14__manage_graduates_add_grad_add_grad_component__["a" /* AddGradComponent */] },
    { path: 'add-company', component: __WEBPACK_IMPORTED_MODULE_13__manage_company_add_company_add_company_component__["a" /* AddCompanyComponent */] },
    { path: 'add-subject', component: __WEBPACK_IMPORTED_MODULE_15__manage_subject_add_subject_add_subject_component__["a" /* AddSubjectComponent */] },
    { path: 'add-survey', component: __WEBPACK_IMPORTED_MODULE_16__manage_survey_add_survey_add_survey_component__["a" /* AddSurveyComponent */] },
    { path: 'edit-survey', component: __WEBPACK_IMPORTED_MODULE_17__manage_survey_edit_survey_edit_survey_component__["a" /* EditSurveyComponent */] },
    { path: 'check-student', component: __WEBPACK_IMPORTED_MODULE_18__manage_survey_check_student_check_student_component__["a" /* CheckStudentComponent */] },
    { path: 'do-survey', component: __WEBPACK_IMPORTED_MODULE_19__do_survey_do_survey_component__["a" /* DoSurveyComponent */] },
    { path: 'add-do-survey', component: __WEBPACK_IMPORTED_MODULE_20__do_survey_add_do_survey_add_do_survey_component__["a" /* AddDoSurveyComponent */] },
    { path: 'work-report', component: __WEBPACK_IMPORTED_MODULE_21__reports_work_report_work_report_component__["a" /* WorkReportComponent */] },
    { path: 'subject-report', component: __WEBPACK_IMPORTED_MODULE_22__reports_subject_report_subject_report_component__["a" /* SubjectReportComponent */] },
    { path: 'company-report', component: __WEBPACK_IMPORTED_MODULE_23__reports_company_report_company_report_component__["a" /* CompanyReportComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".out-container {\r\n  padding: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ภาษาไทย';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_bar_header_bar_component__ = __webpack_require__("../../../../../src/app/header-bar/header-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_semantic_ui__ = __webpack_require__("../../../../ng2-semantic-ui/dist/public.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_firebase_config__ = __webpack_require__("../../../../../src/environments/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_login_service_service__ = __webpack_require__("../../../../../src/app/service/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_excel_service__ = __webpack_require__("../../../../../src/app/service/excel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__manage_user_manage_user_component__ = __webpack_require__("../../../../../src/app/manage-user/manage-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__manage_subject_manage_subject_component__ = __webpack_require__("../../../../../src/app/manage-subject/manage-subject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__manage_survey_manage_survey_component__ = __webpack_require__("../../../../../src/app/manage-survey/manage-survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__reports_reports_component__ = __webpack_require__("../../../../../src/app/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__manage_user_header_manage_user_header_component__ = __webpack_require__("../../../../../src/app/manage-user-header/manage-user-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__manage_graduates_manage_graduates_component__ = __webpack_require__("../../../../../src/app/manage-graduates/manage-graduates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__manage_company_manage_company_component__ = __webpack_require__("../../../../../src/app/manage-company/manage-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__manage_admin_manage_admin_component__ = __webpack_require__("../../../../../src/app/manage-admin/manage-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__manage_admin_add_admin_add_admin_component__ = __webpack_require__("../../../../../src/app/manage-admin/add-admin/add-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__manage_admin_update_admin_update_admin_component__ = __webpack_require__("../../../../../src/app/manage-admin/update-admin/update-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__manage_company_add_company_add_company_component__ = __webpack_require__("../../../../../src/app/manage-company/add-company/add-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__manage_company_update_company_update_company_component__ = __webpack_require__("../../../../../src/app/manage-company/update-company/update-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__manage_graduates_add_grad_add_grad_component__ = __webpack_require__("../../../../../src/app/manage-graduates/add-grad/add-grad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__manage_graduates_update_grad_update_grad_component__ = __webpack_require__("../../../../../src/app/manage-graduates/update-grad/update-grad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__manage_subject_add_subject_add_subject_component__ = __webpack_require__("../../../../../src/app/manage-subject/add-subject/add-subject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__manage_subject_update_subject_update_subject_component__ = __webpack_require__("../../../../../src/app/manage-subject/update-subject/update-subject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__manage_survey_bar_manage_survey_bar_component__ = __webpack_require__("../../../../../src/app/manage-survey-bar/manage-survey-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__manage_survey_add_survey_add_survey_component__ = __webpack_require__("../../../../../src/app/manage-survey/add-survey/add-survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__do_survey_do_survey_component__ = __webpack_require__("../../../../../src/app/do-survey/do-survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__report_bar_report_bar_component__ = __webpack_require__("../../../../../src/app/report-bar/report-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__do_survey_header_do_survey_header_component__ = __webpack_require__("../../../../../src/app/do-survey-header/do-survey-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__do_survey_add_do_survey_add_do_survey_component__ = __webpack_require__("../../../../../src/app/do-survey/add-do-survey/add-do-survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__reports_work_report_work_report_component__ = __webpack_require__("../../../../../src/app/reports/work-report/work-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__reports_subject_report_subject_report_component__ = __webpack_require__("../../../../../src/app/reports/subject-report/subject-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__manage_survey_edit_survey_edit_survey_component__ = __webpack_require__("../../../../../src/app/manage-survey/edit-survey/edit-survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__manage_survey_check_student_check_student_component__ = __webpack_require__("../../../../../src/app/manage-survey/check-student/check-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__reports_company_report_company_report_component__ = __webpack_require__("../../../../../src/app/reports/company-report/company-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_primeng_accordion__ = __webpack_require__("../../../../primeng/accordion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_primeng_accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_47_primeng_accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_primeng_chart__ = __webpack_require__("../../../../primeng/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_primeng_chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_48_primeng_chart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__login_admin_login_admin_login_component__ = __webpack_require__("../../../../../src/app/login/admin-login/admin-login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// services



// components



























// Material





//primeng
 //accordion and accordion tab


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_bar_header_bar_component__["a" /* HeaderBarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__manage_user_manage_user_component__["a" /* ManageUserComponent */],
                __WEBPACK_IMPORTED_MODULE_16__manage_subject_manage_subject_component__["a" /* ManageSubjectComponent */],
                __WEBPACK_IMPORTED_MODULE_17__manage_survey_manage_survey_component__["a" /* ManageSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_18__reports_reports_component__["a" /* ReportsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__manage_user_header_manage_user_header_component__["a" /* ManageUserHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_20__manage_graduates_manage_graduates_component__["a" /* ManageGraduatesComponent */],
                __WEBPACK_IMPORTED_MODULE_21__manage_company_manage_company_component__["a" /* ManageCompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_22__manage_admin_manage_admin_component__["a" /* ManageAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_23__manage_admin_add_admin_add_admin_component__["a" /* AddAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_24__manage_admin_update_admin_update_admin_component__["a" /* UpdateAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_25__manage_company_add_company_add_company_component__["a" /* AddCompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_26__manage_company_update_company_update_company_component__["a" /* UpdateCompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_27__manage_graduates_add_grad_add_grad_component__["a" /* AddGradComponent */],
                __WEBPACK_IMPORTED_MODULE_28__manage_graduates_update_grad_update_grad_component__["a" /* UpdateGradComponent */],
                __WEBPACK_IMPORTED_MODULE_29__manage_subject_add_subject_add_subject_component__["a" /* AddSubjectComponent */],
                __WEBPACK_IMPORTED_MODULE_30__manage_subject_update_subject_update_subject_component__["a" /* UpdateSubjectComponent */],
                __WEBPACK_IMPORTED_MODULE_31__manage_survey_bar_manage_survey_bar_component__["a" /* ManageSurveyBarComponent */],
                __WEBPACK_IMPORTED_MODULE_32__manage_survey_add_survey_add_survey_component__["a" /* AddSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_33__do_survey_do_survey_component__["a" /* DoSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_34__report_bar_report_bar_component__["a" /* ReportBarComponent */],
                __WEBPACK_IMPORTED_MODULE_35__do_survey_header_do_survey_header_component__["a" /* DoSurveyHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_36__do_survey_add_do_survey_add_do_survey_component__["a" /* AddDoSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_37__reports_work_report_work_report_component__["a" /* WorkReportComponent */],
                __WEBPACK_IMPORTED_MODULE_38__reports_subject_report_subject_report_component__["a" /* SubjectReportComponent */],
                __WEBPACK_IMPORTED_MODULE_39__manage_survey_edit_survey_edit_survey_component__["a" /* EditSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_40__manage_survey_check_student_check_student_component__["a" /* CheckStudentComponent */],
                __WEBPACK_IMPORTED_MODULE_41__reports_company_report_company_report_component__["a" /* CompanyReportComponent */],
                __WEBPACK_IMPORTED_MODULE_49__login_admin_login_admin_login_component__["a" /* AdminLoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_semantic_ui__["a" /* SuiModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__environments_firebase_config__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_42__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_43__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_44__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_45__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_47_primeng_accordion__["AccordionModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_48_primeng_chart__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_46__angular_material_tabs__["a" /* MatTabsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__service_firebase_service_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_13__service_login_service_service__["a" /* LoginServiceService */], __WEBPACK_IMPORTED_MODULE_14__service_excel_service__["a" /* ExcelService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar></app-header-bar>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/do-survey-header/do-survey-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/do-survey-header/do-survey-header.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  do-survey-header works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/do-survey-header/do-survey-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoSurveyHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DoSurveyHeaderComponent = /** @class */ (function () {
    function DoSurveyHeaderComponent() {
    }
    DoSurveyHeaderComponent.prototype.ngOnInit = function () {
    };
    DoSurveyHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-do-survey-header',
            template: __webpack_require__("../../../../../src/app/do-survey-header/do-survey-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/do-survey-header/do-survey-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DoSurveyHeaderComponent);
    return DoSurveyHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/do-survey/add-do-survey/add-do-survey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-bar {\r\n    background-color: #66CDAA; \r\n}\r\n\r\n.container{\r\n    margin-top: 20px;\r\n    margin-left: 100px;\r\n    margin-left: 100px;\r\n}\r\n\r\n.manage-body{\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/do-survey/add-do-survey/add-do-survey.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- header -->\n<div>\n  <br>\n  <br>\n  <h1 class=\"ui horizontal divider header\">\n    <i class=\"file alternate outline icon\"></i>\n    Survey Management\n  </h1>\n  <h5 class=\"ui center aligned header\">\n    Computer Science Department, CMU\n  </h5>\n  <br>\n</div>\n\n<div class=\"header-bar\">\n  <div class=\"ui secondary pointing menu\">\n    <a class=\"item\">\n      <h3>Survey Management</h3>\n    </a>\n    <div class=\"right menu\">\n      <a class=\"item\">\n        <b>{{targetID}}</b>\n      </a>\n      <a class=\"item\" (click)=\"logout()\">\n        <b>ออกจากระบบ</b>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!-- body -->\n<div class=\"container\">\n  <div class=\"ui segment\">\n    <div class=\"ui basic buttons\">\n      <div class=\"ui button\" (click)=\"back()\">\n        <i class=\"angle left icon\"></i>ย้อนกลับ\n      </div>\n    </div>\n    <br>\n    <br>\n    <div *ngFor=\"let dataSurvey of surveyList | async\">\n      <div *ngIf=\"(dataSurvey.key == survey_key)\">\n        <h2 class=\"ui left header\">{{dataSurvey.survey_name}}</h2>\n        <b>คำอธิบาย:</b>&nbsp;&nbsp;{{dataSurvey.description}}\n        <div class=\"ui clearing divider\"></div>\n        <div *ngFor=\"let dataQuestion of questions; let i = index;\">\n          <!-- <div *ngIf=\"(dataQuestion.survey_id == survey_key)\"> -->\n          <b>{{dataQuestion.question}}</b>\n          <br *ngIf=\"dataQuestion.question_type != '8'\">\n          <br *ngIf=\"dataQuestion.question_type != '8'\">\n          <!-- text box -->\n          <div *ngIf=\"(dataQuestion.question_type == 1)\">\n            <div *ngIf=\"(dataQuestion.key == 1 || dataQuestion.key == 2 || dataQuestion.key == 22 || dataQuestion.key == 23)\" class=\"ui fluid icon disabled input\">\n              <input type=\"text\" [(ngModel)]=\"allAnswer[i]['answer']\">\n            </div>\n            <div *ngIf=\"(dataQuestion.key != 1 && dataQuestion.key != 2 && dataQuestion.key != 22 && dataQuestion.key != 23)\" class=\"ui fluid icon input\">\n              <input type=\"text\" [(ngModel)]=\"allAnswer[i]['answer']\">\n            </div>\n          </div>\n          <!-- textarea -->\n          <div *ngIf=\"(dataQuestion.question_type == 2)\" class=\"form-group\">\n            <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" [(ngModel)]=\"allAnswer[i]['answer']\"></textarea>\n          </div>\n          <!-- check box -->\n          <div *ngIf=\"(dataQuestion.question_type == 3)\">\n            <div *ngFor=\"let dataChoice of choiceList | async ; let j = index\">\n              <div *ngIf=\"(dataQuestion.key == dataChoice.question_id)\">\n                <section class=\"example-section\">\n                  <mat-checkbox class=\"example-margin\" [value]=\"dataChoice.choice\" [(ngModel)]=\"checkbox[j]\" (change)=\"saveCheckbox(dataChoice.choice,i,j)\">{{dataChoice.choice}}</mat-checkbox>\n                </section>\n              </div>\n            </div>\n          </div>\n          <!-- drop down -->\n          <div *ngIf=\"(dataQuestion.question_type == 4)\">\n            <select class=\"ui selection dropdown\" (click)=\"listChoices(i)\" [(ngModel)]=\"allAnswer[i]['answer']\">\n              <option class=\"default text\">{{allAnswer[i]['answer']}}</option>\n              <option *ngFor=\"let dataChoice of choices\" [ngValue]=\"dataChoice.choice\">{{dataChoice.choice}}</option>\n            </select>\n          </div>\n          <!-- radio -->\n          <div *ngIf=\"(dataQuestion.question_type == 5)\">\n            <div *ngFor=\"let dataChoice of choiceList | async\">\n              <div *ngIf=\"(dataQuestion.key == dataChoice.question_id)\">\n                <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"radioTemp[i]\">\n                  <mat-radio-button class=\"example-radio-button\" [value]=\"dataChoice.choice\" (click)=\"radioCheckValue(dataChoice.choice,i)\">\n                    {{dataChoice.choice}}\n                  </mat-radio-button>\n                </mat-radio-group>\n              </div>\n            </div>\n            <div *ngIf=\"(otherAnswer[i])\" class=\"ui icon input\">\n              <input type=\"text\" [(ngModel)]=\"allAnswer[i]['answer']\">\n            </div>\n          </div>\n          <!-- Rating -->\n          <div *ngIf=\"(dataQuestion.question_type == 6)\">\n            <mat-radio-group class=\"example-radio-group inline\" [(ngModel)]=\"allAnswer[i]['answer']\">\n              <mat-radio-button class=\"example-radio-button\" [value]=\"5\">\n                มากที่สุด&nbsp;&nbsp;&nbsp;&nbsp;\n              </mat-radio-button>\n              <mat-radio-button class=\"example-radio-button\" [value]=\"4\">\n                มาก&nbsp;&nbsp;&nbsp;&nbsp;\n              </mat-radio-button>\n              <mat-radio-button class=\"example-radio-button\" [value]=\"3\">\n                ปานกลาง&nbsp;&nbsp;&nbsp;&nbsp;\n              </mat-radio-button>\n              <mat-radio-button class=\"example-radio-button\" [value]=\"2\">\n                น้อย&nbsp;&nbsp;&nbsp;&nbsp;\n              </mat-radio-button>\n              <mat-radio-button class=\"example-radio-button\" [value]=\"1\">\n                น้อยที่สุด&nbsp;&nbsp;&nbsp;&nbsp;\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n          <!-- Subject Major-->\n          <div *ngIf=\"(dataQuestion.question_type == 7)\">\n            <div class=\"inline fields\">\n              <div class=\"field\">\n                <select class=\"ui selection dropdown\" [(ngModel)]=\"selectedSubject[dataQuestion.key]\" (ngModelChange)=\"onChange($event,dataQuestion.key)\">\n                  <!-- <option class=\"default text\">{{subjectAnswer['']}}</option> -->\n                  <option *ngFor=\"let data of subjectMajor\" [ngValue]=\"data.key\">{{data.subject_name}}</option>\n                </select>\n              </div>\n              <div class=\"field\">\n                <a class=\"item\" data-toggle=\"modal\" data-target=\"#addMajorSubject\">\n                  <i class=\"add circle icon\"></i>เพิ่มกระบวนวิชาอื่นๆ\n                </a>\n              </div>\n            </div>\n            <br>\n            <b>เหตุผล</b>\n            <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" [(ngModel)]=\"allAnswer[i]['answer']\"></textarea>\n          </div>\n          <!-- Subject Other-->\n          <div *ngIf=\"(dataQuestion.question_type == 8)\">\n            <div class=\"inline fields\">\n              <div class=\"field\">\n                <select class=\"ui selection dropdown\" [(ngModel)]=\"selectedSubject[dataQuestion.key]\" (ngModelChange)=\"onChange($event,dataQuestion.key)\">\n                  <option class=\"default text\">{{allAnswer[i]['answer']}}</option>\n                  <option *ngFor=\"let data of subjectOther\" [ngValue]=\"data.key\">{{data.subject_name}}</option>\n                </select>\n              </div>\n              <div class=\"field\">\n                <a class=\"item\" data-toggle=\"modal\" data-target=\"#addOtherSubject\">\n                  <i class=\"add circle icon\"></i>เพิ่มกระบวนวิชาอื่นๆ\n                </a>\n              </div>\n            </div>\n            <br>\n            <b>เหตุผล</b>\n            <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" [(ngModel)]=\"allAnswer[i]['answer']\"></textarea>\n          </div>\n          <br>\n          <br>\n        </div>\n        <button class=\"ui button\" (click)=\"savedata()\">ส่งคำตอบ</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- add major subject -->\n<div class=\"modal fade\" id=\"addMajorSubject\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">เพิ่มกระบวนวิชาเอก</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form class=\"ui form\">\n        <div class=\"modal-body\">\n          <div class=\"field\">\n            <input type=\"text\" placeholder=\"รหัสวิชา\" [(ngModel)]=\"subjectId\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"field\">\n            <input type=\"text\" placeholder=\"ชื่อวิชา\" [(ngModel)]=\"subjectName\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveMajorSubject()\" data-dismiss=\"modal\">บันทึก</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- add other subject -->\n<div class=\"modal fade\" id=\"addOtherSubject\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">เพิ่มกระบวนวิชาพื้นฐานสังคมฯ-มนุษย์ฯ</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form class=\"ui form\">\n        <div class=\"modal-body\">\n          <div class=\"field\">\n            <input type=\"text\" placeholder=\"รหัสวิชา\" [(ngModel)]=\"subjectId\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"field\">\n            <input type=\"text\" placeholder=\"ชื่อวิชา\" [(ngModel)]=\"subjectName\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveOtherSubject()\" data-dismiss=\"modal\">บันทึก</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/do-survey/add-do-survey/add-do-survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDoSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AddDoSurveyComponent = /** @class */ (function () {
    function AddDoSurveyComponent(router, firebaseService, db) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.db = db;
        this.answerTemp = [];
        this.doSurveyTemp = [];
        this.companyCount = 1;
        this.otherAnswer = [];
        this.radioTemp = [];
        this.questions = [];
        this.answers = [];
        this.checkbox = [];
        this.choices = [];
        this.subjectTemp = [];
        this.allAnswer = [];
        this.date = __WEBPACK_IMPORTED_MODULE_4_moment__(Date.now()).format('L');
        // subject
        this.selectedSubject = [];
        this.subjectAnswer = [];
        this.subjectMajor = [];
        this.subjectOther = [];
    }
    AddDoSurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.targetID = localStorage.getItem("key");
        this.survey_key = localStorage.getItem("survey_key");
        this.surveyList = this.firebaseService.getList('/survey');
        this.questionList = this.firebaseService.getList('/question');
        this.choiceList = this.firebaseService.getList('/choice');
        this.answerList = this.firebaseService.getList('/answer');
        this.doSurveyList = this.firebaseService.getList('/do_survey');
        this.subjectList = this.firebaseService.getList('/subject');
        this.companyList = this.firebaseService.getList('/company');
        this.studentList = this.firebaseService.getList('/student');
        this.question_id = 1;
        // question
        var index = 0;
        this.questionList.subscribe(function (data) {
            data.forEach(function (tmp) {
                if (tmp.survey_id == _this.survey_key) {
                    _this.questions.push(tmp);
                    index = index + 1;
                    var data_1 = {
                        question_id: tmp.key,
                        answer: ''
                    };
                    _this.allAnswer.push(data_1);
                }
            });
            console.log(_this.questions);
        });
        // answer
        this.answerList.subscribe(function (data) {
            data.forEach(function (tmp) {
                _this.answerTemp.push(tmp);
            });
            _this.answerCount = _this.answerTemp.length;
        });
        // student
        this.studentList.subscribe(function (data) {
            if (_this.survey_key == 1 || _this.survey_key == 2) {
                data.forEach(function (tmp) {
                    if (tmp.key == _this.targetID) {
                        _this.allAnswer[0]['answer'] = tmp.student_firstname + ' ' + tmp.student_lastname;
                        _this.allAnswer[1]['answer'] = tmp.key;
                    }
                });
            }
        });
        // do_survey
        this.doSurveyList.subscribe(function (data) {
            data.forEach(function (tmp) {
                _this.doSurveyTemp.push(tmp);
            });
        });
        // subject
        this.subjectList.subscribe(function (data) {
            data.forEach(function (tmp) {
                _this.subjectTemp.push(tmp);
                if (tmp.subject_type == 'กระบวนวิชาเอก') {
                    _this.subjectMajor.push(tmp);
                }
                else {
                    _this.subjectOther.push(tmp);
                }
            });
        });
        // company
        this.companyList.subscribe(function (data) {
            data.forEach(function (tmp) {
                _this.companyCount = _this.companyCount + 1;
            });
            console.log("companyCount==" + _this.companyCount);
        });
    };
    AddDoSurveyComponent.prototype.back = function () {
        localStorage.removeItem("survey_key");
        this.router.navigate(['/do-survey']);
    };
    AddDoSurveyComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    AddDoSurveyComponent.prototype.savedata = function () {
        var _this = this;
        console.log(this.answers);
        console.log(this.allAnswer);
        if (this.answerTemp.length == 0) {
            this.answer_id = 1;
        }
        else {
            this.answer_id = this.answerTemp.length + 1;
        }
        if (this.doSurveyTemp.length == 0) {
            this.do_survey_id = 1;
        }
        else {
            this.do_survey_id = this.doSurveyTemp.length + 1;
        }
        console.log("answer_id=" + this.answer_id);
        console.log("do_survey_id=" + this.do_survey_id);
        console.log("survey_id=" + this.survey_key);
        console.log("target_id" + this.targetID);
        console.log("date=" + this.date);
        console.log(this.questions);
        // save answer
        var i = 0;
        this.allAnswer.forEach(function (tmp) {
            // console.log(tmp);
            if (tmp['question_id'] == 10 || tmp['question_id'] == 11 || tmp['question_id'] == 12 || tmp['question_id'] == 13 || tmp['question_id'] == 14) {
                var index = _this.subjectAnswer.findIndex(function (item) { return item['question_id'] == tmp['question_id']; });
                var answer = {
                    key: _this.answer_id,
                    question_id: tmp['question_id'],
                    do_survey_id: _this.do_survey_id,
                    answer: _this.subjectAnswer[index]['subject_id'] + tmp['answer']
                };
                console.log(answer);
                _this.firebaseService.addData(answer, '/answer');
            }
            else {
                var answer = {
                    key: _this.answer_id,
                    question_id: tmp['question_id'],
                    do_survey_id: _this.do_survey_id,
                    answer: tmp['answer']
                };
                console.log(answer);
                _this.firebaseService.addData(answer, '/answer');
            }
            if (tmp['question_id'] == 30) {
                var company = {
                    key: _this.companyCount,
                    company_name: tmp['answer']
                };
                _this.firebaseService.addData(company, '/company');
                _this.targetID = _this.companyCount;
            }
            _this.answer_id = _this.answer_id + 1;
        });
        // save do survey
        var do_survey = {
            key: this.do_survey_id,
            survey_id: this.survey_key,
            target_id: this.targetID,
            status: "yes",
            date: this.date
        };
        console.log(do_survey);
        this.firebaseService.addData(do_survey, '/do_survey');
        // reset value
        this.companyCount = 1;
        this.back();
    };
    AddDoSurveyComponent.prototype.saveCheckbox = function (value, i, j) {
        console.log("i==" + i);
        console.log("j==" + j);
        console.log(value);
        console.log(this.checkbox[j]);
        if (this.checkbox[j] == true) {
            if (this.allAnswer[i]['answer'] == '') {
                this.allAnswer[i] = value;
            }
            else {
                var tmp = this.allAnswer[i]['answer'];
                console.log(tmp);
                this.allAnswer[i]['answer'] = tmp + ',' + value;
            }
        }
        else {
            var c = this.allAnswer.filter(function (item) { return item == value; });
            console.log(c);
        }
        console.log(this.allAnswer);
    };
    AddDoSurveyComponent.prototype.listChoices = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(i);
                        console.log(this.questions[i].key);
                        return [4 /*yield*/, this.setEmpty()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.choiceList.subscribe(function (data) {
                                data.forEach(function (tmp) {
                                    if (tmp.question_id == _this.questions[i].key) {
                                        _this.choices.push(tmp);
                                    }
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, console.log(this.choices)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddDoSurveyComponent.prototype.setEmpty = function () {
        this.choices = [];
        console.log("finish");
    };
    AddDoSurveyComponent.prototype.onChange = function (newValue, question_key) {
        if (this.subjectAnswer.find(function (item) { return item['question_id'] == question_key; })) {
            var index = this.subjectAnswer.findIndex(function (item) { return item['question_id'] == question_key; });
            this.subjectAnswer[index]['subject_id'] = this.selectedSubject[question_key];
            console.log("hehe" + this.subjectAnswer[index]['subject_id']);
        }
        else {
            var data = {
                question_id: question_key,
                subject_id: this.selectedSubject[question_key]
            };
            this.subjectAnswer.push(data);
            console.log(this.subjectAnswer);
        }
    };
    AddDoSurveyComponent.prototype.saveMajorSubject = function () {
        console.log(this.subjectId);
        console.log(this.subjectName);
        console.log(this.subjectType);
        var data = {
            key: this.subjectId,
            subject_name: this.subjectName,
            subject_type: 'กระบวนวิชาเอก'
        };
        this.subjectMajor = [];
        this.subjectId = '';
        this.subjectName = '';
        this.firebaseService.addData(data, '/subject');
    };
    AddDoSurveyComponent.prototype.saveOtherSubject = function () {
        console.log(this.subjectId);
        console.log(this.subjectName);
        console.log(this.subjectType);
        var data = {
            key: this.subjectId,
            subject_name: this.subjectName,
            subject_type: 'กระบวนวิชาพื้นฐานสังคมฯ-มนุษย์ฯ'
        };
        this.subjectId = '';
        this.subjectName = '';
        this.subjectOther = [];
        this.firebaseService.addData(data, '/subject');
    };
    AddDoSurveyComponent.prototype.radioCheckValue = function (newValue, i) {
        console.log(newValue);
        console.log(i);
        if (newValue == 'อื่นๆ โปรดระบุ' || newValue == 'อื่นๆ') {
            this.otherAnswer[i] = true;
            this.allAnswer[i]['answer'] = '';
        }
        else {
            this.otherAnswer[i] = false;
            this.allAnswer[i]['answer'] = newValue;
        }
        console.log(this.allAnswer[i]['answer']);
    };
    AddDoSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-do-survey',
            template: __webpack_require__("../../../../../src/app/do-survey/add-do-survey/add-do-survey.component.html"),
            styles: [__webpack_require__("../../../../../src/app/do-survey/add-do-survey/add-do-survey.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AddDoSurveyComponent);
    return AddDoSurveyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/do-survey/do-survey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-bar {\r\n    background-color: #66CDAA; \r\n}\r\n\r\n.container{\r\n    margin-top: 20px;\r\n    margin-left: 100px;\r\n    margin-left: 100px;\r\n}\r\n\r\n.manage-body{\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/do-survey/do-survey.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- header -->\n<div>\n  <br>\n  <br>\n  <h1 class=\"ui horizontal divider header\">\n    <i class=\"file alternate outline icon\"></i>\n    Survey Management\n  </h1>\n  <h5 class=\"ui center aligned header\">\n    Computer Science Department, CMU\n  </h5>\n  <br>\n</div>\n\n<div class=\"header-bar\">\n  <div class=\"ui secondary pointing menu\">\n    <a class=\"item\">\n      <h3>Survey Management</h3>\n    </a>\n    <div class=\"right menu\">\n      <a class=\"item\">\n        <b>{{studentID}}</b>\n      </a>\n      <a class=\"item\" (click)=\"logout()\">\n        <b>ออกจากระบบ</b>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!-- body -->\n<div class=\"container\">\n  <div class=\"ui segment\">\n    <h2 class=\"ui floated header\">เลือกแบบสอบถาม</h2>\n    <div class=\"ui clearing divider\"></div>\n    <br>\n    <div class=\"ui relaxed divided list\" *ngFor=\"let data of allSurvey\">\n      \n      <div class=\"item\">\n        <i class=\"large caret right icon\"></i>\n        <div class=\"content\">\n          <a class=\"header\" (click)=\"goToAddDoSurvey(data)\" *ngIf=\"data.status != 'yes'\">\n            <font color=\"#66CDAA\">{{data.survey_name}}</font>\n          </a>\n          <label class=\"header\" *ngIf=\"data.status == 'yes'\">\n            <font color=\"#66CDAA\">{{data.survey_name}}</font>\n            <font color=\"#FF0033\" *ngIf=\"data.status == 'yes'\">(ท่านกรอกแบบสอบถามนี้แล้ว)</font>\n          </label>\n          <div class=\"description\">{{data.description}}</div>\n          <div class=\"ui clearing divider\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/do-survey/do-survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DoSurveyComponent = /** @class */ (function () {
    function DoSurveyComponent(router, firebaseService, db) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.db = db;
        this.surveyTemp = [];
        this.doSurveyTemp = [];
        this.allSurvey = [];
    }
    DoSurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentID = localStorage.getItem("key");
        this.surveyTarget = localStorage.getItem("target");
        this.surveyList = this.firebaseService.getList('/survey');
        this.doSurveyList = this.firebaseService.getList('/do_survey');
        this.doSurveyList.subscribe(function (data) {
            data.forEach(function (tmp) {
                if (tmp.target_id == _this.studentID) {
                    _this.doSurveyTemp.push(tmp);
                }
            });
            console.log(_this.doSurveyTemp);
        });
        this.surveyList.subscribe(function (data) {
            data.forEach(function (tmp) {
                if (tmp.target == _this.surveyTarget) {
                    _this.surveyTemp.push(tmp);
                }
            });
            console.log(_this.surveyTemp);
            _this.surveyTemp.forEach(function (tmp) {
                var index = _this.doSurveyTemp.findIndex(function (item) { return item.survey_id == tmp.key; });
                if (index == -1) {
                    var data_1 = {
                        key: tmp.key,
                        survey_name: tmp.survey_name,
                        description: tmp.description,
                        status: 'no'
                    };
                    _this.allSurvey.push(data_1);
                }
                else {
                    var data_2 = {
                        key: tmp.key,
                        survey_name: tmp.survey_name,
                        description: tmp.description,
                        status: 'yes'
                    };
                    _this.allSurvey.push(data_2);
                }
            });
            console.log(_this.allSurvey);
        });
    };
    DoSurveyComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    DoSurveyComponent.prototype.goToAddDoSurvey = function (data) {
        localStorage.setItem('survey_key', data.key);
        console.log(data.survey_name);
        this.router.navigate(['/add-do-survey']);
    };
    DoSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-do-survey',
            template: __webpack_require__("../../../../../src/app/do-survey/do-survey.component.html"),
            styles: [__webpack_require__("../../../../../src/app/do-survey/do-survey.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], DoSurveyComponent);
    return DoSurveyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-bar/header-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    padding: 16px;\r\n}\r\n\r\n.header-bar {\r\n    background-color:  #66CDAA;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-bar/header-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h2>{{title}}</h2> -->\r\n<div>\r\n    <br><br>\r\n    <h1 class=\"ui horizontal divider header\">\r\n        <i class=\"file alternate outline icon\"></i>\r\n        Survey Management\r\n    </h1>\r\n    <h5 class=\"ui center aligned header\">\r\n      Computer Science Department, CMU\r\n    </h5>\r\n    <br>\r\n</div>\r\n\r\n<div class=\"header-bar\">\r\n  <div class=\"ui secondary pointing menu\">\r\n    <a class=\"item\" >\r\n      <h3>Survey Management</h3>\r\n    </a>\r\n    <a class=\"item\" [routerLink]=\"'/manage-graduates'\" routerLinkActive=\"active\">\r\n      จัดการผู้ใช้\r\n    </a>\r\n    <a class=\"item\" [routerLink]=\"'/manage-subject'\" routerLinkActive=\"active\">\r\n      จัดการกระบวนวิชา\r\n    </a>\r\n    <a class=\"item\" [routerLink]=\"'/manage-survey'\" routerLinkActive=\"active\">\r\n      จัดการแบบสอบถาม\r\n    </a>\r\n    <a class=\"item\" [routerLink]=\"'/reports'\" routerLinkActive=\"active\">\r\n      จัดการรายงาน\r\n    </a>\r\n    <div class=\"right menu\">\r\n      <a class=\"ui item\" [routerLink]=\"'/login'\">\r\n        ออกจากระบบ\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"ui segment\">\r\n    <p></p>\r\n  </div> -->\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/header-bar/header-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderBarComponent = /** @class */ (function () {
    function HeaderBarComponent() {
        this.title = "Survey Management";
    }
    HeaderBarComponent.prototype.ngOnInit = function () {
    };
    HeaderBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header-bar',
            template: __webpack_require__("../../../../../src/app/header-bar/header-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-bar/header-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderBarComponent);
    return HeaderBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/admin-login/admin-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-weight: 300;\r\n  }\r\n  body {\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    color: white;\r\n    font-weight: 300;\r\n  }\r\n  body ::-webkit-input-placeholder {\r\n    /* WebKit browsers */\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    color: white;\r\n    font-weight: 300;\r\n  }\r\n  body :-moz-placeholder {\r\n    /* Mozilla Firefox 4 to 18 */\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    color: white;\r\n    opacity: 1;\r\n    font-weight: 300;\r\n  }\r\n  body ::-moz-placeholder {\r\n    /* Mozilla Firefox 19+ */\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    color: white;\r\n    opacity: 1;\r\n    font-weight: 300;\r\n  }\r\n  body :-ms-input-placeholder {\r\n    /* Internet Explorer 10+ */\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    color: white;\r\n    font-weight: 300;\r\n  }\r\n  .wrapper {\r\n    background: #50a3a2;\r\n    background: -webkit-gradient(linear, left top, right bottom, from(#50a3a2), to(#53e3a6));\r\n    background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 400px;\r\n    margin-top: -200px;\r\n    overflow: hidden;\r\n  }\r\n  .wrapper.form-success .container h1 {\r\n    -webkit-transform: translateY(85px);\r\n            transform: translateY(85px);\r\n  }\r\n  .container {\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n    padding: 80px 0;\r\n    height: 400px;\r\n    text-align: center;\r\n  }\r\n  .container h1 {\r\n    font-size: 40px;\r\n    color: white;\r\n    -webkit-transition-duration: 1s;\r\n            transition-duration: 1s;\r\n    -webkit-transition-timing-function: ease-in-put;\r\n            transition-timing-function: ease-in-put;\r\n    font-weight: 200;\r\n  }\r\n  form {\r\n    padding: 20px 0;\r\n    position: relative;\r\n    z-index: 2;\r\n  }\r\n  form input {\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            \r\n    outline: 0;\r\n    border: 1px solid rgba(255, 255, 255, 0.4);\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n    width: 250px;\r\n    border-radius: 3px;\r\n    padding: 10px 15px;\r\n    margin: 0 auto 10px auto;\r\n    display: block;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    color: white;\r\n    -webkit-transition-duration: 0.25s;\r\n            transition-duration: 0.25s;\r\n    font-weight: 300;\r\n  }\r\n  form input:hover {\r\n    background-color: rgba(255, 255, 255, 0.4);\r\n  }\r\n  form input:focus {\r\n    background-color: white;\r\n    width: 300px;\r\n    color: #53e3a6;\r\n  }\r\n  form button {\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n  \r\n    outline: 0;\r\n    background-color: white;\r\n    border: 0;\r\n    padding: 10px 15px;\r\n    color: #53e3a6;\r\n    border-radius: 3px;\r\n    width: 250px;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    -webkit-transition-duration: 0.25s;\r\n            transition-duration: 0.25s;\r\n  }\r\n  form button:hover {\r\n    background-color: #f5f7f9;\r\n  }\r\n  .bg-bubbles {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n  }\r\n  .bg-bubbles li {\r\n    position: absolute;\r\n    list-style: none;\r\n    display: block;\r\n    width: 40px;\r\n    height: 40px;\r\n    background-color: rgba(255, 255, 255, 0.15);\r\n    bottom: -160px;\r\n    -webkit-animation: square 25s infinite;\r\n    animation: square 25s infinite;\r\n    -webkit-transition-timing-function: linear;\r\n    transition-timing-function: linear;\r\n  }\r\n  .bg-bubbles li:nth-child(1) {\r\n    left: 10%;\r\n  }\r\n  .bg-bubbles li:nth-child(2) {\r\n    left: 20%;\r\n    width: 80px;\r\n    height: 80px;\r\n    -webkit-animation-delay: 2s;\r\n            animation-delay: 2s;\r\n    -webkit-animation-duration: 17s;\r\n            animation-duration: 17s;\r\n  }\r\n  .bg-bubbles li:nth-child(3) {\r\n    left: 25%;\r\n    -webkit-animation-delay: 4s;\r\n            animation-delay: 4s;\r\n  }\r\n  .bg-bubbles li:nth-child(4) {\r\n    left: 40%;\r\n    width: 60px;\r\n    height: 60px;\r\n    -webkit-animation-duration: 22s;\r\n            animation-duration: 22s;\r\n    background-color: rgba(255, 255, 255, 0.25);\r\n  }\r\n  .bg-bubbles li:nth-child(5) {\r\n    left: 70%;\r\n  }\r\n  .bg-bubbles li:nth-child(6) {\r\n    left: 80%;\r\n    width: 120px;\r\n    height: 120px;\r\n    -webkit-animation-delay: 3s;\r\n            animation-delay: 3s;\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n  }\r\n  .bg-bubbles li:nth-child(7) {\r\n    left: 32%;\r\n    width: 160px;\r\n    height: 160px;\r\n    -webkit-animation-delay: 7s;\r\n            animation-delay: 7s;\r\n  }\r\n  .bg-bubbles li:nth-child(8) {\r\n    left: 55%;\r\n    width: 20px;\r\n    height: 20px;\r\n    -webkit-animation-delay: 15s;\r\n            animation-delay: 15s;\r\n    -webkit-animation-duration: 40s;\r\n            animation-duration: 40s;\r\n  }\r\n  .bg-bubbles li:nth-child(9) {\r\n    left: 25%;\r\n    width: 10px;\r\n    height: 10px;\r\n    -webkit-animation-delay: 2s;\r\n            animation-delay: 2s;\r\n    -webkit-animation-duration: 40s;\r\n            animation-duration: 40s;\r\n    background-color: rgba(255, 255, 255, 0.3);\r\n  }\r\n  .bg-bubbles li:nth-child(10) {\r\n    left: 90%;\r\n    width: 160px;\r\n    height: 160px;\r\n    -webkit-animation-delay: 11s;\r\n            animation-delay: 11s;\r\n  }\r\n  @-webkit-keyframes square {\r\n    0% {\r\n      -webkit-transform: translateY(0);\r\n              transform: translateY(0);\r\n    }\r\n    100% {\r\n      -webkit-transform: translateY(-700px) rotate(600deg);\r\n              transform: translateY(-700px) rotate(600deg);\r\n    }\r\n  }\r\n  @keyframes square {\r\n    0% {\r\n      -webkit-transform: translateY(0);\r\n              transform: translateY(0);\r\n    }\r\n    100% {\r\n      -webkit-transform: translateY(-700px) rotate(600deg);\r\n              transform: translateY(-700px) rotate(600deg);\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/admin-login/admin-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\t<div class=\"container\">\n\t\t<h1>Welcome</h1>\n\t\t\n\t\t<form class=\"form\" (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n\t\t\t<input type=\"text\" name=\"username\"  placeholder=\"Username/Student ID\" [(ngModel)]=\"username\">\n\t\t\t<input type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\">\n\t\t\t<button type=\"submit\">เข้าสู่ระบบ</button>\n\t\t</form>\n\t</div>\n\t\n\t<ul class=\"bg-bubbles\">\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t</ul>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/login/admin-login/admin-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent() {
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
    };
    AdminLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-login',
            template: __webpack_require__("../../../../../src/app/login/admin-login/admin-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/admin-login/admin-login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: 300;\r\n}\r\nbody {\r\n  font-family: 'Source Sans Pro', sans-serif;\r\n  color: white;\r\n  font-weight: 300;\r\n}\r\nbody ::-webkit-input-placeholder {\r\n  /* WebKit browsers */\r\n  font-family: 'Source Sans Pro', sans-serif;\r\n  color: white;\r\n  font-weight: 300;\r\n}\r\nbody :-moz-placeholder {\r\n  /* Mozilla Firefox 4 to 18 */\r\n  font-family: 'Source Sans Pro', sans-serif;\r\n  color: white;\r\n  opacity: 1;\r\n  font-weight: 300;\r\n}\r\nbody ::-moz-placeholder {\r\n  /* Mozilla Firefox 19+ */\r\n  font-family: 'Source Sans Pro', sans-serif;\r\n  color: white;\r\n  opacity: 1;\r\n  font-weight: 300;\r\n}\r\nbody :-ms-input-placeholder {\r\n  /* Internet Explorer 10+ */\r\n  font-family: 'Source Sans Pro', sans-serif;\r\n  color: white;\r\n  font-weight: 300;\r\n}\r\n.wrapper {\r\n  background: #50a3a2;\r\n  background: -webkit-gradient(linear, left top, right bottom, from(#50a3a2), to(#53e3a6));\r\n  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 400px;\r\n  margin-top: -200px;\r\n  overflow: hidden;\r\n}\r\n.wrapper.form-success .container h1 {\r\n  -webkit-transform: translateY(85px);\r\n          transform: translateY(85px);\r\n}\r\n.container {\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n  padding: 50px 0;\r\n  height: 400px;\r\n  text-align: center;\r\n}\r\n.container h1 {\r\n  font-size: 40px;\r\n  color: white;\r\n  -webkit-transition-duration: 1s;\r\n          transition-duration: 1s;\r\n  -webkit-transition-timing-function: ease-in-put;\r\n          transition-timing-function: ease-in-put;\r\n  font-weight: 200;\r\n}\r\nform {\r\n  padding: 20px 0;\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\nform input {\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          \r\n  outline: 0;\r\n  border: 1px solid rgba(255, 255, 255, 0.4);\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n  width: 250px;\r\n  border-radius: 3px;\r\n  padding: 10px 15px;\r\n  margin: 0 auto 10px auto;\r\n  display: block;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  color: white;\r\n  -webkit-transition-duration: 0.25s;\r\n          transition-duration: 0.25s;\r\n  font-weight: 300;\r\n}\r\nform input:hover {\r\n  background-color: rgba(255, 255, 255, 0.4);\r\n}\r\nform input:focus {\r\n  background-color: white;\r\n  width: 300px;\r\n  color: #53e3a6;\r\n}\r\nform button {\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n\r\n  outline: 0;\r\n  background-color: white;\r\n  border: 0;\r\n  padding: 10px 15px;\r\n  color: #53e3a6;\r\n  border-radius: 3px;\r\n  width: 250px;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n  -webkit-transition-duration: 0.25s;\r\n          transition-duration: 0.25s;\r\n}\r\nform button:hover {\r\n  background-color: #f5f7f9;\r\n}\r\n.bg-bubbles {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n}\r\n.bg-bubbles li {\r\n  position: absolute;\r\n  list-style: none;\r\n  display: block;\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: rgba(255, 255, 255, 0.15);\r\n  bottom: -160px;\r\n  -webkit-animation: square 25s infinite;\r\n  animation: square 25s infinite;\r\n  -webkit-transition-timing-function: linear;\r\n  transition-timing-function: linear;\r\n}\r\n.bg-bubbles li:nth-child(1) {\r\n  left: 10%;\r\n}\r\n.bg-bubbles li:nth-child(2) {\r\n  left: 20%;\r\n  width: 80px;\r\n  height: 80px;\r\n  -webkit-animation-delay: 2s;\r\n          animation-delay: 2s;\r\n  -webkit-animation-duration: 17s;\r\n          animation-duration: 17s;\r\n}\r\n.bg-bubbles li:nth-child(3) {\r\n  left: 25%;\r\n  -webkit-animation-delay: 4s;\r\n          animation-delay: 4s;\r\n}\r\n.bg-bubbles li:nth-child(4) {\r\n  left: 40%;\r\n  width: 60px;\r\n  height: 60px;\r\n  -webkit-animation-duration: 22s;\r\n          animation-duration: 22s;\r\n  background-color: rgba(255, 255, 255, 0.25);\r\n}\r\n.bg-bubbles li:nth-child(5) {\r\n  left: 70%;\r\n}\r\n.bg-bubbles li:nth-child(6) {\r\n  left: 80%;\r\n  width: 120px;\r\n  height: 120px;\r\n  -webkit-animation-delay: 3s;\r\n          animation-delay: 3s;\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n.bg-bubbles li:nth-child(7) {\r\n  left: 32%;\r\n  width: 160px;\r\n  height: 160px;\r\n  -webkit-animation-delay: 7s;\r\n          animation-delay: 7s;\r\n}\r\n.bg-bubbles li:nth-child(8) {\r\n  left: 55%;\r\n  width: 20px;\r\n  height: 20px;\r\n  -webkit-animation-delay: 15s;\r\n          animation-delay: 15s;\r\n  -webkit-animation-duration: 40s;\r\n          animation-duration: 40s;\r\n}\r\n.bg-bubbles li:nth-child(9) {\r\n  left: 25%;\r\n  width: 10px;\r\n  height: 10px;\r\n  -webkit-animation-delay: 2s;\r\n          animation-delay: 2s;\r\n  -webkit-animation-duration: 40s;\r\n          animation-duration: 40s;\r\n  background-color: rgba(255, 255, 255, 0.3);\r\n}\r\n.bg-bubbles li:nth-child(10) {\r\n  left: 90%;\r\n  width: 160px;\r\n  height: 160px;\r\n  -webkit-animation-delay: 11s;\r\n          animation-delay: 11s;\r\n}\r\n@-webkit-keyframes square {\r\n  0% {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n  }\r\n  100% {\r\n    -webkit-transform: translateY(-700px) rotate(600deg);\r\n            transform: translateY(-700px) rotate(600deg);\r\n  }\r\n}\r\n@keyframes square {\r\n  0% {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n  }\r\n  100% {\r\n    -webkit-transform: translateY(-700px) rotate(600deg);\r\n            transform: translateY(-700px) rotate(600deg);\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\t<div class=\"container\">\n\t\t<h1>Welcome</h1>\n\t\t<form class=\"form\" #loginForm=\"ngForm\">\n\t\t\t<br>\n\t\t\t<div class=\"ui two column middle aligned very relaxed stackable grid\">\n\t\t\t\t<div class=\"column Mymargin1\">\n\t\t\t\t\t<div class=\"field\">\n\t\t\t\t\t\t<h3>กรุณากรอกรหัสนักศึกษา</h3>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<input type=\"text\" name=\"username\" placeholder=\"Student ID\" [(ngModel)]=\"studentId\">\n\t\t\t\t\t\t<section class=\"example-section\">\n\t\t\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"status\" [ngModelOptions]=\"{standalone: true}\">เข้าสู่ระบบในฐานะผู้ประกอบการ</mat-checkbox>\n\t\t\t\t\t\t</section>\n\t\t\t\t\t\t<button type=\"button\" (click)=\"userLogin()\">เข้าสู่ระบบ</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"column Mymargin1\">\n\t\t\t\t\t<div class=\"field\">\n\t\t\t\t\t\t<input type=\"text\" name=\"username\" placeholder=\"Username\" [(ngModel)]=\"username\">\n\t\t\t\t\t\t<input type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\">\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<button type=\"button\" (click)=\"adminLogin()\">เข้าสู่ระบบ</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"ui vertical divider\">\n\t\t\t\tOr\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\n\t<ul class=\"bg-bubbles\">\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t</ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_login_service_service__ = __webpack_require__("../../../../../src/app/service/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginService, firebaseService, db) {
        this.router = router;
        this.loginService = loginService;
        this.firebaseService = firebaseService;
        this.db = db;
        this.title = 'เข้าสู่ระบบ';
        this.staffPath = "/staff";
        this.studentPath = "/student";
        this.staffArray = [];
        this.studentArray = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.staffList = this.firebaseService.getList('/staff');
        this.studentList = this.firebaseService.getList('/student');
    };
    LoginComponent.prototype.userLogin = function () {
        var _this = this;
        console.log(this.status);
        if (this.status == undefined && this.studentId == undefined) {
            alert("กรุณากรอกรหัสนักศึกษา หรือเลือกเข้าระบบในฐานะผู้ประกอบการ");
        }
        else if ((this.status == undefined && this.studentId == undefined) || (this.status == undefined && this.studentId == '')) {
            alert("กรุณากรอกรหัสนักศึกษา");
        }
        else if (this.status == true) {
            localStorage.setItem('target', 'ผู้ประกอบการ');
            this.goToDoSurvey();
        }
        else if (this.status == undefined && this.studentId != undefined) {
            this.studentList.subscribe(function (data) {
                data.forEach(function (tmp) {
                    _this.studentArray.push(tmp);
                    // console.log(this.studentArray);
                });
                for (var i = 0; i < _this.studentArray.length; i++) {
                    if (_this.studentArray[i].key == _this.studentId) {
                        console.log("yeah!!!");
                        localStorage.setItem('key', _this.studentArray[i].key);
                        localStorage.setItem('target', 'บัณฑิต');
                        _this.loginStatus = 1;
                        _this.goToDoSurvey();
                    }
                }
                if (_this.loginStatus != 1) {
                    alert("รหัสนักศึกษาไม่ถูกต้อง");
                    _this.studentId = '';
                    _this.loginStatus = '';
                }
            });
        }
    };
    LoginComponent.prototype.adminLogin = function () {
        var _this = this;
        if (this.username == undefined && this.password == undefined) {
            alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
        }
        else if (this.username == undefined || this.password == undefined || this.username == '' || this.password == '') {
            alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
        }
        else if (this.username == '' && this.password == '') {
            alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
        }
        else {
            this.staffList.subscribe(function (data) {
                data.forEach(function (tmp) {
                    _this.staffArray.push(tmp);
                    // console.log(this.array);
                });
                for (var i = 0; i < _this.staffArray.length; i++) {
                    if (_this.staffArray[i].key == _this.username && _this.staffArray[i].staff_password == _this.password) {
                        console.log("yeah!!!");
                        _this.loginStatus = 1;
                        _this.goToDashboard();
                    }
                }
                if (_this.loginStatus != 1) {
                    alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
                    _this.username = '';
                    _this.password = '';
                    _this.loginStatus = '';
                }
                // console.log(this.staffArray[0].staff_username);
            });
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.status == undefined && this.username == undefined && this.password == undefined) {
            alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน หรือเลือกเข้าระบบในฐานะผู้ประกอบการ");
        }
        else if (this.status == undefined && this.username == undefined) {
            alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน หรือเลือกเข้าระบบในฐานะผู้ประกอบการ");
        }
        console.log("status====" + this.status);
        console.log("studentId====" + this.studentId);
        console.log("username====" + this.username);
        console.log("password====" + this.password);
        this.staffList = this.loginService.getList(this.staffPath);
        this.studentList = this.loginService.getList(this.studentPath);
        if (this.status == true) {
            localStorage.setItem('target', 'ผู้ประกอบการ');
            this.goToDoSurvey();
        }
        else if (this.status != true && this.username != undefined && this.password != undefined) {
            this.staffList.subscribe(function (data) {
                data.forEach(function (tmp) {
                    _this.staffArray.push(tmp);
                    // console.log(this.array);
                });
                for (var i = 0; i < _this.staffArray.length; i++) {
                    if (_this.staffArray[i].key == _this.username && _this.staffArray[i].staff_password == _this.password) {
                        console.log("yeah!!!");
                        _this.goToDashboard();
                    }
                }
                // console.log(this.staffArray[0].staff_username);
            });
        }
        else if (this.status != true && this.studentId != undefined) {
            this.studentList.subscribe(function (data) {
                data.forEach(function (tmp) {
                    _this.studentArray.push(tmp);
                    // console.log(this.studentArray);
                });
                for (var i = 0; i < _this.studentArray.length; i++) {
                    if (_this.studentArray[i].key == _this.studentId) {
                        console.log("yeah!!!");
                        localStorage.setItem('key', _this.studentArray[i].key);
                        localStorage.setItem('target', 'บัณฑิต');
                        _this.goToDoSurvey();
                    }
                }
            });
        }
        else {
            alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
            this.username = '';
            this.password = '';
        }
        // console.log(this.studentArray[0].student_id);
    };
    LoginComponent.prototype.goToDashboard = function () {
        this.router.navigate(['/manage-graduates']);
    };
    LoginComponent.prototype.goToDoSurvey = function () {
        this.router.navigate(['/do-survey']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__service_login_service_service__["a" /* LoginServiceService */], __WEBPACK_IMPORTED_MODULE_4__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-admin/add-admin/add-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-admin/add-admin/add-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar></app-header-bar>\r\n<div class=\"ui grid\">\r\n  <div class=\"four wide column\">\r\n    <app-manage-user-header></app-manage-user-header>\r\n  </div>\r\n  <div class=\"twelve wide column\">\r\n    <div class=\"twelve wide stretched column\">\r\n      <div class=\"ui segment\">\r\n        <h1>เพิ่มผู้ดูแลระบบ</h1>\r\n        <form (ngSubmit)=\"addAdmin()\" class=\"ui form\">\r\n          <h4 for=\"staff_username\">ชื่อผู้ใช้</h4>\r\n          <div class=\"ui fluid icon input\">\r\n            <input type=\"text\" name=\"staff_username\" [(ngModel)]=\"staff_username\">\r\n          </div>\r\n          <h4 for=\"staff_password\">รหัสผ่าน</h4>\r\n          <div class=\"ui fluid icon input\">\r\n            <input type=\"text\" name=\"staff_password\" [(ngModel)]=\"staff_password\">\r\n          </div>\r\n          <h4 for=\"staff_firstname\">ชื่อ</h4>\r\n          <div class=\"ui fluid icon input\">\r\n            <input type=\"text\" name=\"staff_firstname\" [(ngModel)]=\"staff_firstname\">\r\n          </div>\r\n          <h4 for=\"staff_lastname\">นามสกุล</h4>\r\n          <div class=\"ui fluid icon input\">\r\n            <input type=\"text\" name=\"staff_lastname\" [(ngModel)]=\"staff_lastname\">\r\n          </div>\r\n          <br>\r\n          <button type=\"submit\" class=\"ui green button\">เพิ่ม</button>\r\n          <button type=\"button\" class=\"ui red button\" [routerLink]=\"'/manage-admin'\">ยกเลิก</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/manage-admin/add-admin/add-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var AddAdminComponent = /** @class */ (function () {
    function AddAdminComponent(db, router, firebaseService, route) {
        var _this = this;
        this.db = db;
        this.router = router;
        this.firebaseService = firebaseService;
        this.route = route;
        this.basePath = "/staff";
        this.staff_username = '';
        this.staff_password = '';
        this.staff_firstname = '';
        this.staff_lastname = '';
        this.goToManageAdmin = function () {
            _this.router.navigate(['/manage-admin']);
        };
    }
    AddAdminComponent.prototype.ngOnInit = function () { };
    // async addAdmin(data: NgForm) {
    //   // console.log(data.value);
    //   await this.firebaseService.addData(data.value, this.basePath);
    //   await this.goToManageAdmin();
    // }
    AddAdminComponent.prototype.addAdmin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = {
                            key: this.staff_username,
                            staff_password: this.staff_password,
                            staff_firstname: this.staff_firstname,
                            staff_lastname: this.staff_lastname
                        };
                        return [4 /*yield*/, this.firebaseService.addData(data, this.basePath)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.goToManageAdmin()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-admin',
            template: __webpack_require__("../../../../../src/app/manage-admin/add-admin/add-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-admin/add-admin/add-admin.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], AddAdminComponent);
    return AddAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-admin/manage-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-admin/manage-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar></app-header-bar>\r\n<div class=\"ui grid\">\r\n  <div class=\"four wide column\">\r\n    <app-manage-user-header></app-manage-user-header>\r\n  </div>\r\n  <div class=\"twelve wide column\">\r\n    <div class=\"twelve wide stretched column\">\r\n      <div class=\"ui segment\">\r\n        <table class=\"ui fixed single line celled table\">\r\n          <thead>\r\n            <tr>\r\n              <th>ชื่อผู้ใช้</th>\r\n              <th>รหัสผ่าน</th>\r\n              <th>ชื่อ</th>\r\n              <th>นามสกุล</th>\r\n              <th>ตัวเลือก</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let data of list | async\">\r\n              <!-- <td>{{data.key}}</td> -->\r\n              <td>{{data.key}}</td>\r\n              <td>{{data.staff_password}}</td>\r\n              <td>{{data.staff_firstname}}</td>\r\n              <td>{{data.staff_lastname}}</td>\r\n              <td>\r\n                <button type=\"button\" (click)=\"setData(data)\" data-toggle=\"modal\" data-target=\"#editDataModal\">แก้ไข</button>/\r\n                <button type=\"button\" (click)=\"setDelAdmin(data)\" data-toggle=\"modal\" data-target=\"#deleteStaff\">ลบ</button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <button class=\"positive ui button\" [routerLink]=\"'/add-admin'\">เพิ่ม</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- edit -->\r\n<div class=\"modal fade\" id=\"editDataModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">แก้ไขข้อมูลผู้ดูแลระบบ</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form (ngSubmit)=\"setData(setForm)\" #setForm=\"ngForm\" class=\"ui form\">\r\n          <div class=\"field\">\r\n            <label for=\"name\">ชื่อผู้ใช้</label>\r\n            <input type=\"text\" name=\"staff_username\" ngModel [(ngModel)]=\"s_username\">\r\n          </div>\r\n          <div class=\"field\">\r\n            <label for=\"name\">รหัสผ่าน</label>\r\n            <input type=\"text\" name=\"staff_password\" ngModel [(ngModel)]=\"s_password\">\r\n          </div>\r\n          <div class=\"field\">\r\n            <label for=\"name\">ชื่อ</label>\r\n            <input type=\"text\" name=\"staff_firstname\" ngModel [(ngModel)]=\"s_firstname\">\r\n          </div>\r\n          <div class=\"field\">\r\n            <label for=\"name\">นามสกุล</label>\r\n            <input type=\"text\" name=\"staff_lastname\" ngModel [(ngModel)]=\"s_lastname\">\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"editData(s_username,s_password,s_firstname,s_lastname)\" data-dismiss=\"modal\">บันทึก</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- delete -->\r\n<div class=\"modal fade\" id=\"deleteStaff\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\" id=\"exampleModalLabel\">ลบผู้ดูแลระบบ</h3>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <b>ต้องการลบ&nbsp;:&nbsp;</b>{{s_username}}&nbsp;?\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"delStaff()\">ลบ</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/manage-admin/manage-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ManageAdminComponent = /** @class */ (function () {
    function ManageAdminComponent(router, firebaseService, db, route) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.db = db;
        this.route = route;
        this.basePath = "/staff";
    }
    ManageAdminComponent.prototype.ngOnInit = function () {
        this.list = this.firebaseService.getList(this.basePath);
        // console.log("lookkkkkk"+this.list);
        // this.allKey = this.firebaseService.getKey(this.basePath);
    };
    ManageAdminComponent.prototype.setDelAdmin = function (data) {
        this.s_username = data.key;
        this.s_password = data.staff_password;
        this.s_firstname = data.staff_firstname;
        this.s_lastname = data.staff_lastname;
    };
    ManageAdminComponent.prototype.delStaff = function () {
        var data = {
            key: this.s_username,
            staff_password: this.s_password,
            staff_firstname: this.s_firstname,
            staff_lastname: this.s_lastname
        };
        this.firebaseService.delData(data, this.basePath);
    };
    ManageAdminComponent.prototype.setData = function (data) {
        this.dataList = data;
        // console.log(this.dataList);
        this.s_username = data.key;
        this.s_password = data.staff_password;
        this.s_firstname = data.staff_firstname;
        this.s_lastname = data.staff_lastname;
        // console.log("id====="+this.s_id);
    };
    ManageAdminComponent.prototype.editData = function (s_username, s_password, s_firstname, s_lastname) {
        // console.log("id======="+student_id)]
        var dataObj = {
            key: s_username,
            staff_password: s_password,
            staff_firstname: s_firstname,
            staff_lastname: s_lastname
        };
        // console.log(dataObj);
        this.firebaseService.editData(this.dataList.key, dataObj, this.basePath);
    };
    ManageAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage-admin',
            template: __webpack_require__("../../../../../src/app/manage-admin/manage-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-admin/manage-admin.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], ManageAdminComponent);
    return ManageAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-admin/update-admin/update-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-admin/update-admin/update-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar></app-header-bar>\n<div class=\"ui grid\">\n  <div class=\"four wide column\">\n    <app-manage-user-header></app-manage-user-header>\n  </div>\n  <div class=\"twelve wide column\">\n    <div class=\"twelve wide stretched column\">\n      <div class=\"ui segment\">\n        <h1>แก้ไขผู้ดูแลระบบ</h1>\n        <form ng #addAdminForm=\"ngForm\">\n          <label for=\"staff_username\">ชื่อผู้ใช้</label>\n            <input type=\"text\" name=\"staff_username\" [(ngModel)]=\"data.staff_username\"> <br>\n          <label for=\"staff_password\">รหัสผ่าน</label>\n            <input type=\"text\" name=\"staff_password\" [(ngModel)]=\"data.staff_password\"> <br>\n          <label for=\"staff_firstname\">ชื่อ</label>\n            <input type=\"text\" name=\"staff_firstname\" [(ngModel)]=\"data.staff_firstname\"> <br>\n          <label for=\"staff_lastname\">นามสกุล</label>\n            <input type=\"text\" name=\"staff_lastname\" [(ngModel)]=\"data.staff_lastname\"> <br>\n          <button type=\"submit\">เพิ่ม</button>\n          <button type=\"button\" [routerLink]=\"'/manage-admin'\">ยกเลิก</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/manage-admin/update-admin/update-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateAdminComponent = /** @class */ (function () {
    function UpdateAdminComponent(route, firebaseService, db) {
        var _this = this;
        this.route = route;
        this.firebaseService = firebaseService;
        this.db = db;
        this.basePath = "/staff/";
        this.data = {};
        this.params$ = this.route.snapshot.params["id"];
        this.db.object(this.basePath + this.params$).valueChanges().subscribe(function (data) {
            _this.data = data;
            // console.log(data);
        });
    }
    UpdateAdminComponent.prototype.ngOnInit = function () {
        //   this.route.params.subscribe(params => {
        //     this.params$ = params['id']; 
        //  });  
        //this.params$ =  this.route.snapshot.paramMap.get('id');
        // this.list = this.firebaseService.getList(this.basePath);
    };
    UpdateAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update-admin',
            template: __webpack_require__("../../../../../src/app/manage-admin/update-admin/update-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-admin/update-admin/update-admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UpdateAdminComponent);
    return UpdateAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-company/add-company/add-company.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-company/add-company/add-company.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar></app-header-bar>\n<div class=\"ui grid\">\n  <div class=\"four wide column\">\n    <app-manage-user-header></app-manage-user-header>\n  </div>\n  <div class=\"twelve wide column\">\n    <div class=\"twelve wide stretched column\">\n      <div class=\"ui segment\">\n        <h1>เพิ่มข้อมูลผู้ประกอบการ</h1>\n        <form (ngSubmit)=\"addCompany()\">\n          <h4 for=\"company_id\">รหัสผู้ประกอบการ</h4>\n          <div class=\"ui large label\">รหัสผู้ประกอบการ: {{companyCount}}</div>\n          <h4 for=\"company_name\">ชื่อสถานประกอบการ</h4>\n          <div class=\"ui fluid icon input\">\n            <input type=\"text\" name=\"company_name\" [(ngModel)]=\"company_name\">\n          </div>\n          <h4 for=\"company_address\">ที่อยู่</h4>\n          <div class=\"ui fluid icon input\">\n            <input type=\"text\" name=\"company_address\" [(ngModel)]=\"company_address\">\n          </div>\n          <h4 for=\"tel\">เบอร์โทรศัพท์</h4>\n          <div class=\"ui fluid icon input\">\n            <input type=\"text\" name=\"tel\" [(ngModel)]=\"tel\">\n          </div>\n          <br>\n          <button type=\"submit\" class=\"ui green button\">เพิ่ม</button>\n          <button type=\"button\" class=\"ui red button\" [routerLink]=\"'/manage-company'\">ยกเลิก</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/manage-company/add-company/add-company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AddCompanyComponent = /** @class */ (function () {
    function AddCompanyComponent(db, router, firebaseService, route) {
        var _this = this;
        this.db = db;
        this.router = router;
        this.firebaseService = firebaseService;
        this.route = route;
        this.basePath = "/company";
        this.company_id = '';
        this.company_name = '';
        this.company_address = '';
        this.tel = '';
        this.goToManageCompany = function () {
            _this.router.navigate(['/manage-company']);
        };
    }
    AddCompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyList = this.firebaseService.getList('/company');
        this.companyList.subscribe(function (data) {
            _this.companyCount = 1;
            data.forEach(function (element) {
                _this.companyCount = _this.companyCount + 1;
            });
        });
    };
    AddCompanyComponent.prototype.addCompany = function () {
        // console.log(data.value);
        var data = {
            key: this.companyCount,
            company_name: this.company_name,
            company_address: this.company_address,
            tel: this.tel
        };
        this.firebaseService.addData(data, this.basePath);
        this.goToManageCompany();
    };
    AddCompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-company',
            template: __webpack_require__("../../../../../src/app/manage-company/add-company/add-company.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-company/add-company/add-company.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], AddCompanyComponent);
    return AddCompanyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-company/manage-company.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-company/manage-company.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar></app-header-bar>\n<div class=\"ui grid\">\n  <div class=\"four wide column\">\n    <app-manage-user-header></app-manage-user-header>\n  </div>\n  <div class=\"twelve wide column\">\n    <div class=\"twelve wide stretched column\">\n      <div class=\"ui segment\">\n        <div class=\"ui search\">\n          <div class=\"ui icon input\">\n            <input class=\"prompt\" type=\"text\" [(ngModel)]=\"searchData\" placeholder=\"ค้นหาผู้ประกอบการ...\" (keyup.enter)=\"search()\">\n          </div>\n          <button class=\"circular primary basic ui icon button\" (click)=\"search()\">\n            <i class=\"search icon\"></i>\n            ค้นหา\n          </button>\n          <button class=\"circular grey basic ui icon button\" (click)=\"searchAll()\">\n            ดูทั้งหมด\n          </button>\n        </div>\n        <table class=\"ui fixed single line celled table\">\n          <thead>\n            <tr>\n              <th>รหัสผู้ประกอบการ</th>\n              <th>ชื่อสถานประกอบการ</th>\n              <th>ที่อยู่</th>\n              <th>เบอร์โทรศัพท์</th>\n              <th>ตัวเลือก</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of companyTemp\">\n              <!-- <td>{{data.key}}</td> -->\n              <td>{{data.key}}</td>\n              <td>{{data.company_name}}</td>\n              <td>{{data.company_address}}</td>\n              <td>{{data.tel}}</td>\n              <td>\n                <button type=\"button\" (click)=\"setData(data)\" data-toggle=\"modal\" data-target=\"#editDataModal\">แก้ไข</button>/\n                <button type=\"button\" (click)=\"setDelCompany(data)\" data-toggle=\"modal\" data-target=\"#deleteCompany\">ลบ</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <button class=\"positive ui button\" [routerLink]=\"'/add-company'\">เพิ่ม</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- edit -->\n<div class=\"modal fade\" id=\"editDataModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">แก้ไขข้อมูลผู้ประกอบการ</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form (ngSubmit)=\"setData(setForm)\" #setForm=\"ngForm\" class=\"ui form\">\n          <div class=\"field\">\n            <div class=\"ui large label\">รหัสผู้ประกอบการ: {{c_id}}</div>\n          </div>\n          <div class=\"field\">\n            <label for=\"name\">ชื่อสถานประกอบการ</label>\n            <input type=\"text\" name=\"company_name\" [(ngModel)]=\"c_name\">\n          </div>\n          <div class=\"field\">\n            <label for=\"name\">ที่อยู่</label>\n            <input type=\"text\" name=\"company_address\" [(ngModel)]=\"c_address\">\n          </div>\n          <div class=\"field\">\n            <label for=\"name\">เบอร์โทรศัพท์</label>\n            <input type=\"text\" name=\"tel\" [(ngModel)]=\"c_tel\">\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"editData()\" data-dismiss=\"modal\">บันทึก</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- delete -->\n<div class=\"modal fade\" id=\"deleteCompany\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h3 class=\"modal-title\" id=\"exampleModalLabel\">ลบผู้ประกอบการ</h3>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <b>ต้องการลบ&nbsp;:&nbsp;</b>{{c_name}}&nbsp;?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"delCompany()\">ลบ</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/manage-company/manage-company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageCompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ManageCompanyComponent = /** @class */ (function () {
    function ManageCompanyComponent(router, firebaseService, db, route) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.db = db;
        this.route = route;
        this.basePath = "/company";
        this.searchTemp = [];
        this.companyTemp = [];
    }
    ManageCompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyList = this.firebaseService.getList('/company');
        this.companyList.subscribe(function (data) {
            data.forEach(function (element) {
                _this.companyTemp.push(element);
                _this.searchTemp.push(element);
            });
        });
    };
    ManageCompanyComponent.prototype.setDelCompany = function (data) {
        this.c_id = data.key;
        this.c_name = data.company_name;
        this.c_address = data.c_address;
        this.c_tel = data.tel;
    };
    ManageCompanyComponent.prototype.delCompany = function () {
        var data = {
            key: this.c_id,
            company_name: this.c_name,
            company_address: this.c_address,
            tel: this.c_tel
        };
        this.firebaseService.delData(data, '/company');
        this.companyTemp = [];
    };
    ManageCompanyComponent.prototype.setData = function (data) {
        if (data.company_address == undefined) {
            this.c_id = data.key;
            this.c_name = data.company_name;
            this.c_address = '';
            this.c_tel = data.tel;
        }
        else if (data.tel == undefined) {
            this.c_id = data.key;
            this.c_name = data.company_name;
            this.c_address = data.company_address;
            this.c_tel = '';
        }
        else if (data.company_address == undefined && data.tel == undefined) {
            this.c_id = data.key;
            this.c_name = data.company_name;
            this.c_address = '';
            this.c_tel = '';
        }
        else {
            this.c_id = data.key;
            this.c_name = data.company_name;
            this.c_address = data.company_address;
            this.c_tel = data.tel;
        }
    };
    ManageCompanyComponent.prototype.editData = function () {
        console.log(this.c_id);
        var data = {
            key: this.c_id,
            company_name: this.c_name,
            company_address: this.c_address,
            tel: this.c_tel
        };
        // console.log(dataObj);
        this.firebaseService.editData(this.c_id, data, this.basePath);
        this.companyTemp = [];
    };
    ManageCompanyComponent.prototype.search = function () {
        var _this = this;
        console.log(this.searchData);
        console.log(this.searchData.length);
        this.companyTemp = [];
        this.companyList.subscribe(function (data) {
            data.forEach(function (tmp) {
                var keySearch = tmp.company_name;
                if (keySearch.substring(0, _this.searchData.length) == _this.searchData) {
                    _this.companyTemp.push(tmp);
                }
            });
        });
    };
    ManageCompanyComponent.prototype.searchAll = function () {
        var _this = this;
        this.companyTemp = [];
        this.companyList.subscribe(function (data) {
            data.forEach(function (tmp) {
                _this.companyTemp.push(tmp);
            });
        });
    };
    ManageCompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage-company',
            template: __webpack_require__("../../../../../src/app/manage-company/manage-company.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-company/manage-company.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], ManageCompanyComponent);
    return ManageCompanyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-company/update-company/update-company.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-company/update-company/update-company.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  update-company works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/manage-company/update-company/update-company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateCompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpdateCompanyComponent = /** @class */ (function () {
    function UpdateCompanyComponent() {
    }
    UpdateCompanyComponent.prototype.ngOnInit = function () {
    };
    UpdateCompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update-company',
            template: __webpack_require__("../../../../../src/app/manage-company/update-company/update-company.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-company/update-company/update-company.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdateCompanyComponent);
    return UpdateCompanyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-graduates/add-grad/add-grad.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-graduates/add-grad/add-grad.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar></app-header-bar>\n<div class=\"ui grid\">\n  <div class=\"four wide column\">\n    <app-manage-user-header></app-manage-user-header>\n  </div>\n  <div class=\"twelve wide column\">\n    <div class=\"twelve wide stretched column\">\n      <div class=\"ui segment\">\n        <h1>เพิ่มข้อมูลบัณฑิต</h1>\n        <br>\n        <b>เพิ่มข้อมูลจากไฟล์EXCEL</b>\n        <br>\n        <br>\n        <input type=\"file\" style=\"display: inline-block;\" (change)=\"incomingfile($event)\" placeholder=\"Upload file\" accept=\".xlsx\">\n        <button type=\"button\" class=\"ui positive basic button\" (click)=\"Upload()\" data-toggle=\"modal\" data-target=\"#showDataModal\">Upload</button>\n        <div class=\"ui horizontal divider\">\n          Or\n        </div>\n        <form (ngSubmit)=\"addGrad()\" class=\"ui form\">\n          <h4 for=\"student_id\">รหัสนักศึกษา: </h4>\n          <div class=\"ui fluid icon input\">\n            <input type=\"text\" name=\"student_id\" [(ngModel)]=\"student_id\">\n          </div>\n          <h4 for=\"student_firstname\">ชื่อ: </h4>\n          <div class=\"ui fluid icon input\">\n            <input type=\"text\" name=\"student_firstname\" [(ngModel)]=\"student_firstname\">\n          </div>\n          <h4 for=\"student_lastname\">นามสกุล: </h4>\n          <div class=\"ui fluid icon input\">\n            <input type=\"text\" name=\"student_lastname\" [(ngModel)]=\"student_lastname\">\n          </div>\n          <br>\n          <button type=\"submit\" class=\"ui green button\">เพิ่ม</button>\n          <button type=\"button\" class=\"ui red button\" [routerLink]=\"'/manage-graduates'\">ยกเลิก</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- show upload data -->\n<div class=\"modal fade\" id=\"showDataModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">เพิ่มข้อมูลบัณฑิต</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <table class=\"ui fixed single line celled table\">\n          <thead>\n            <tr>\n              <th>รหัสนักศึกษา</th>\n              <th>ชื่อ</th>\n              <th>นามสกุล</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of studentData\">\n              <td>{{data.student_id}}</td>\n              <td>{{data.student_firstname}}</td>\n              <td>{{data.student_lastname}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"clearData()\" data-dismiss=\"modal\">ยกเลิก</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addDataExcel()\" data-dismiss=\"modal\">เพิ่ม</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/manage-graduates/add-grad/add-grad.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGradComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_xlsx__ = __webpack_require__("../../../../ts-xlsx/lib/main.browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ts_xlsx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var AddGradComponent = /** @class */ (function () {
    function AddGradComponent(db, router, firebaseService, route) {
        var _this = this;
        this.db = db;
        this.router = router;
        this.firebaseService = firebaseService;
        this.route = route;
        this.basePath = "/student";
        this.student_id = '';
        this.student_firstname = '';
        this.student_lastname = '';
        this.studentData = [];
        this.goToManageGraduates = function () {
            _this.router.navigate(['/manage-graduates']);
        };
    }
    AddGradComponent.prototype.ngOnInit = function () {
    };
    AddGradComponent.prototype.incomingfile = function (event) {
        this.file = event.target.files[0];
    };
    AddGradComponent.prototype.Upload = function () {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            _this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(_this.arrayBuffer);
            var arr = new Array();
            alert(data.length);
            for (var i = 0; i != data.length; ++i)
                arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = __WEBPACK_IMPORTED_MODULE_4_ts_xlsx__["read"](bstr, { type: "binary" });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            // console.log(XLSX.utils.sheet_to_json(worksheet));
            __WEBPACK_IMPORTED_MODULE_4_ts_xlsx__["utils"].sheet_to_json(worksheet).forEach(function (tmp) {
                _this.studentData.push(tmp);
            });
        };
        fileReader.readAsArrayBuffer(this.file);
        console.log(this.studentData);
    };
    AddGradComponent.prototype.addGrad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = {
                            key: this.student_id,
                            student_firstname: this.student_firstname,
                            student_lastname: this.student_lastname
                        };
                        return [4 /*yield*/, this.firebaseService.addData(data, this.basePath)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.goToManageGraduates()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddGradComponent.prototype.addDataExcel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.studentData.forEach(function (tmp) {
                            var data = {
                                key: tmp.student_id,
                                student_firstname: tmp.student_firstname,
                                student_lastname: tmp.student_lastname
                            };
                            _this.firebaseService.addData(data, _this.basePath);
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.goToManageGraduates()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddGradComponent.prototype.clearData = function () {
        this.studentData = [];
    };
    AddGradComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-grad',
            template: __webpack_require__("../../../../../src/app/manage-graduates/add-grad/add-grad.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-graduates/add-grad/add-grad.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], AddGradComponent);
    return AddGradComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-graduates/manage-graduates.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-graduates/manage-graduates.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar></app-header-bar>\n<div class=\"ui grid\">\n  <div class=\"four wide column\">\n    <app-manage-user-header></app-manage-user-header>\n  </div>\n  <div class=\"twelve wide column\">\n    <div class=\"twelve wide stretched column\">\n      <div class=\"ui segment\">\n        <div class=\"ui search\">\n          <div class=\"ui icon input\">\n            <input class=\"prompt\" type=\"text\" [(ngModel)]=\"searchData\" placeholder=\"ค้นหาบัณฑิต...\" (keyup.enter)=\"search()\">\n          </div>\n          <button class=\"circular primary basic ui icon button\" (click)=\"search()\">\n            <i class=\"search icon\"></i>\n            ค้นหา\n          </button>\n          <button class=\"circular grey basic ui icon button\" (click)=\"searchAll()\">\n            ดูทั้งหมด\n          </button>\n        </div>\n        <table class=\"ui fixed single line celled table\">\n          <thead>\n            <tr>\n              <th>รหัสนักศึกษา</th>\n              <th>ชื่อ</th>\n              <th>นามสกุล</th>\n              <th>ตัวเลือก</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of studentTemp\">\n              <!-- <td>{{data.key}}</td> -->\n              <td>{{data.key}}</td>\n              <td>{{data.student_firstname}}</td>\n              <td>{{data.student_lastname}}</td>\n              <!-- <td><button type=\"button\" [routerLink]=\"['/edit-admin', data.key]\">แก้ไข</button>/<button type=\"button\" (click)=\"delGrad(data)\">ลบ</button></td> -->\n              <!-- <button type=\"button\" (click)=\"setData(data)\" class=\"ui green button\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">แก้ไข</button> -->\n              <td>\n                <button type=\"button\" (click)=\"setData(data)\" data-toggle=\"modal\" data-target=\"#editDataModal\">แก้ไข</button>/\n                <button type=\"button\" (click)=\"setDelStudent(data)\" data-toggle=\"modal\" data-target=\"#deleteStudent\">ลบ</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <button class=\"positive ui button\" [routerLink]=\"'/add-grad'\">เพิ่ม</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"editDataModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">แก้ไขข้อมูลบัณฑิต : {{s_id}}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form (ngSubmit)=\"setData(setForm)\" #setForm=\"ngForm\" class=\"ui form\">\n          <div class=\"field\">\n            <!-- <h2>รหัสนักศึกษา: {{s_id}}</h2> -->\n            <div class=\"ui large label\">รหัสนักศึกษา: {{s_id}}</div>\n            <!-- <label for=\"name\">รหัสนักศึกษา</label>\n            <input type=\"text\" name=\"student_id\" ngModel [(ngModel)]=\"s_id\"> -->\n          </div>\n          <div class=\"field\">\n            <label for=\"name\">ชื่อ</label>\n            <input type=\"text\" name=\"student_firstname\" ngModel [(ngModel)]=\"s_firstname\">\n          </div>\n          <div class=\"field\">\n            <label for=\"name\">นามสกุล</label>\n            <input type=\"text\" name=\"student_lastname\" ngModel [(ngModel)]=\"s_lastname\">\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"editData(s_id,s_password,s_firstname,s_lastname)\" data-dismiss=\"modal\">บันทึก</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- delete -->\n<div class=\"modal fade\" id=\"deleteStudent\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h3 class=\"modal-title\" id=\"exampleModalLabel\">ลบบัณฑิต</h3>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <b>ต้องการลบ&nbsp;:&nbsp;</b>({{s_id}})&nbsp;&nbsp;{{s_firstname}}&nbsp;&nbsp;{{s_lastname}}&nbsp;?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"deleteData()\">ลบ</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/manage-graduates/manage-graduates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageGraduatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ManageGraduatesComponent = /** @class */ (function () {
    function ManageGraduatesComponent(router, firebaseService, db, route) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.db = db;
        this.route = route;
        this.searchTemp = [];
        this.studentTemp = [];
    }
    ManageGraduatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentList = this.firebaseService.getList('/student');
        this.studentList.subscribe(function (data) {
            _this.studentTemp = [];
            data.forEach(function (element) {
                _this.studentTemp.push(element);
                _this.searchTemp.push(element);
            });
        });
    };
    ManageGraduatesComponent.prototype.deleteData = function () {
        var data = {
            key: this.s_id,
            student_firstname: this.s_firstname,
            student_lastname: this.s_lastname
        };
        this.firebaseService.delData(data, '/student');
        this.studentTemp = [];
    };
    ManageGraduatesComponent.prototype.setDelStudent = function (data) {
        this.s_id = data.key;
        this.s_firstname = data.student_firstname;
        this.s_lastname = data.student_lastname;
    };
    ManageGraduatesComponent.prototype.setData = function (data) {
        // console.log(this.dataList);
        this.s_id = data.key;
        this.s_firstname = data.student_firstname;
        this.s_lastname = data.student_lastname;
        // console.log("id====="+this.s_id);
    };
    ManageGraduatesComponent.prototype.editData = function (s_id, s_password, s_firstname, s_lastname) {
        // console.log("id======="+student_id)]
        var dataObj = {
            key: s_id,
            student_firstname: s_firstname,
            student_lastname: s_lastname
        };
        // console.log(dataObj);
        this.firebaseService.editData(s_id, dataObj, '/student');
        this.studentTemp = [];
    };
    ManageGraduatesComponent.prototype.search = function () {
        var _this = this;
        console.log(this.searchData);
        console.log(this.searchData.length);
        this.studentTemp = [];
        this.studentList.subscribe(function (data) {
            data.forEach(function (tmp) {
                var keySearch = tmp.key;
                if (keySearch.substring(0, _this.searchData.length) == _this.searchData) {
                    _this.studentTemp.push(tmp);
                }
            });
        });
        // }
    };
    ManageGraduatesComponent.prototype.searchAll = function () {
        var _this = this;
        this.studentTemp = [];
        this.studentList.subscribe(function (data) {
            data.forEach(function (tmp) {
                _this.studentTemp.push(tmp);
            });
        });
    };
    ManageGraduatesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage-graduates',
            template: __webpack_require__("../../../../../src/app/manage-graduates/manage-graduates.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-graduates/manage-graduates.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], ManageGraduatesComponent);
    return ManageGraduatesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-graduates/update-grad/update-grad.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-graduates/update-grad/update-grad.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  update-grad works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/manage-graduates/update-grad/update-grad.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateGradComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpdateGradComponent = /** @class */ (function () {
    function UpdateGradComponent() {
    }
    UpdateGradComponent.prototype.ngOnInit = function () {
    };
    UpdateGradComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update-grad',
            template: __webpack_require__("../../../../../src/app/manage-graduates/update-grad/update-grad.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-graduates/update-grad/update-grad.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdateGradComponent);
    return UpdateGradComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-subject/add-subject/add-subject.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-subject/add-subject/add-subject.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar></app-header-bar>\n<div class=\"ui grid\">\n  <div class=\"four wide column\">\n    <app-manage-user-header></app-manage-user-header>\n  </div>\n  <div class=\"twelve wide column\">\n    <div class=\"twelve wide stretched column\">\n      <div class=\"ui segment\">\n        <h1>เพิ่มกระบวนวิชา</h1>\n        <form (ngSubmit)=\"addSubject(addSubjectForm)\" #addSubjectForm=\"ngForm\">\n          <label for=\"subject_id\">รหัสวิชา</label>\n            <input type=\"text\" name=\"subject_id\" ngModel> <br>\n          <label for=\"subject_name\">ชื่อวิชา</label>\n            <input type=\"text\" name=\"subject_name\" ngModel> <br>\n          <button type=\"submit\">เพิ่ม</button>\n          <button type=\"button\" [routerLink]=\"'/manage-subject'\">ยกเลิก</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/manage-subject/add-subject/add-subject.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSubjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var AddSubjectComponent = /** @class */ (function () {
    function AddSubjectComponent(db, router, firebaseService, route) {
        var _this = this;
        this.db = db;
        this.router = router;
        this.firebaseService = firebaseService;
        this.route = route;
        this.basePath = "/subject";
        this.goToManageAdmin = function () {
            _this.router.navigate(['/manage-subject']);
        };
    }
    AddSubjectComponent.prototype.ngOnInit = function () {
    };
    AddSubjectComponent.prototype.addSubject = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // console.log(data.value);
                    return [4 /*yield*/, this.firebaseService.addData(data.value, this.basePath)];
                    case 1:
                        // console.log(data.value);
                        _a.sent();
                        return [4 /*yield*/, this.goToManageAdmin()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddSubjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-subject',
            template: __webpack_require__("../../../../../src/app/manage-subject/add-subject/add-subject.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-subject/add-subject/add-subject.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], AddSubjectComponent);
    return AddSubjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-subject/manage-subject.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".manage-container {\r\n  padding: 20px;\r\n}\r\n\r\n.container{\r\n  margin-left: 100px;\r\n  margin-right: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-subject/manage-subject.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar></app-header-bar>\n<div class=\"manage-container container\">\n  <div class=\"ui segment\">\n    <table class=\"ui fixed single line celled table\">\n      <thead>\n        <tr>\n          <th>รหัสวิชา</th>\n          <th>ชื่อวิชา</th>\n          <th>ประเภทวิชา</th>\n          <th>ตัวเลือก</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let data of list | async\">\n          <!-- <td>{{data.key}}</td> -->\n          <td>{{data.key}}</td>\n          <td>{{data.subject_name}}</td>\n          <td>{{data.subject_type}}</td>\n          <td>\n            <button type=\"button\" (click)=\"setData(data)\" data-toggle=\"modal\" data-target=\"#editDataModal\">แก้ไข</button>/\n            <button type=\"button\" (click)=\"setDelSubject(data)\" data-toggle=\"modal\" data-target=\"#deleteSubject\">ลบ</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <button class=\"positive ui button\" data-toggle=\"modal\" data-target=\"#addDataModal\">เพิ่ม</button>\n  </div>\n</div>\n\n<!-- Add Subject -->\n<div class=\"modal fade\" id=\"addDataModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">เพิ่มกระบวนวิชา</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form #addSubjectForm=\"ngForm\" class=\"ui form\">\n          <div class=\"field\">\n            <label for=\"subject_id\">รหัสวิชา</label>\n            <input type=\"text\" name=\"subject_id\" [(ngModel)]=\"add_subject_id\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"field\">\n            <label for=\"subject_name\">ชื่อวิชา</label>\n            <input type=\"text\" name=\"subject_name\" [(ngModel)]=\"add_subject_name\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"field\">\n            <label for=\"subject_type\">ประเภทวิชา</label>\n            <select class=\"ui selection dropdown\" [(ngModel)]=\"add_subject_type\" [ngModelOptions]=\"{standalone: true}\">\n              <option value=\"กระบวนวิชาเอก\">กระบวนวิชาเอก</option>\n              <option value=\"กระบวนวิชาพื้นฐานสังคมฯ-มนุษย์ฯ\">กระบวนวิชาพื้นฐานสังคมฯ-มนุษย์ฯ</option>\n            </select>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"clearData(addSubjectForm)\" data-dismiss=\"modal\">ยกเลิก</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addData(addSubjectForm)\" data-dismiss=\"modal\">บันทึก</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Edit Subject -->\n<div class=\"modal fade\" id=\"editDataModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">แก้ไขข้อมูลกระบวนวิชา</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form (ngSubmit)=\"setData(addSubjectForm)\" #addSubjectForm=\"ngForm\" class=\"ui form\">\n          <div class=\"field\">\n            <!-- <label for=\"name\">รหัสวิชา</label> -->\n            <h2>รหัสวิชา: {{s_id}}</h2>\n            <!-- <inputl type=\"text\" name=\"subject_id\" ngModel [(ngModel)]=\"s_id\"> -->\n          </div>\n          <div class=\"field\">\n            <label for=\"name\">ชื่อวิชา</label>\n            <input type=\"text\" name=\"subject_name\" ngModel [(ngModel)]=\"s_name\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"field\">\n              <label for=\"subject_type\">ประเภทวิชา</label>\n            <select class=\"ui selection dropdown\" [(ngModel)]=\"s_type\" [ngModelOptions]=\"{standalone: true}\">\n              <option value=\"กระบวนวิชาเอก\">กระบวนวิชาเอก</option>\n              <option value=\"กระบวนวิชาพื้นฐานสังคมฯ-มนุษย์ฯ\">กระบวนวิชาพื้นฐานสังคมฯ-มนุษย์ฯ</option>\n            </select>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"editData()\" data-dismiss=\"modal\">บันทึก</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- delete -->\n<div class=\"modal fade\" id=\"deleteSubject\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h3 class=\"modal-title\" id=\"exampleModalLabel\">ลบกระบวนวิชา</h3>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <b>ต้องการลบ&nbsp;:&nbsp;</b>{{s_id}}&nbsp;&nbsp;{{s_name}}&nbsp;?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"delSubject()\">ลบ</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/manage-subject/manage-subject.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageSubjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ManageSubjectComponent = /** @class */ (function () {
    function ManageSubjectComponent(router, firebaseService, db) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.db = db;
        this.basePath = "/subject";
    }
    ManageSubjectComponent.prototype.ngOnInit = function () {
        this.list = this.firebaseService.getList(this.basePath);
        // console.log(this.list);
        // this.allKey = this.firebaseService.getKey(this.basePath);
    };
    ManageSubjectComponent.prototype.addData = function () {
        console.log(this.add_subject_type);
        var data = {
            key: this.add_subject_id,
            subject_name: this.add_subject_name,
            subject_type: this.add_subject_type
        };
        this.firebaseService.addData(data, this.basePath);
        this.add_subject_id = '';
        this.add_subject_name = '';
        this.add_subject_type = '';
    };
    ManageSubjectComponent.prototype.setDelSubject = function (data) {
        this.s_id = data.key;
        this.s_name = data.subject_name;
        this.s_type = data.subject_type;
    };
    ManageSubjectComponent.prototype.delSubject = function () {
        var data = {
            key: this.s_id,
            subject_name: this.s_name,
            subject_type: this.s_type
        };
        this.firebaseService.delData(data, this.basePath);
    };
    ManageSubjectComponent.prototype.setData = function (data) {
        this.dataList = data;
        // console.log(this.dataList);
        this.s_id = data.key;
        this.s_name = data.subject_name;
        this.s_type = data.subject_type;
    };
    ManageSubjectComponent.prototype.editData = function () {
        // console.log("id======="+student_id)]
        var dataObj = {
            key: this.s_id,
            subject_name: this.s_name,
            subject_type: this.s_type
        };
        // console.log(dataObj);
        this.firebaseService.editData(this.dataList.key, dataObj, this.basePath);
    };
    ManageSubjectComponent.prototype.clearData = function (data) {
        if (data.value != null) {
            this.clearData1 = null;
            this.clearData2 = null;
        }
    };
    ManageSubjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage-subject',
            template: __webpack_require__("../../../../../src/app/manage-subject/manage-subject.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-subject/manage-subject.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ManageSubjectComponent);
    return ManageSubjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-subject/update-subject/update-subject.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-subject/update-subject/update-subject.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  update-subject works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/manage-subject/update-subject/update-subject.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateSubjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpdateSubjectComponent = /** @class */ (function () {
    function UpdateSubjectComponent() {
    }
    UpdateSubjectComponent.prototype.ngOnInit = function () {
    };
    UpdateSubjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update-subject',
            template: __webpack_require__("../../../../../src/app/manage-subject/update-subject/update-subject.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-subject/update-subject/update-subject.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdateSubjectComponent);
    return UpdateSubjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-survey-bar/manage-survey-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-survey-bar/manage-survey-bar.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/manage-survey-bar/manage-survey-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageSurveyBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageSurveyBarComponent = /** @class */ (function () {
    function ManageSurveyBarComponent() {
    }
    ManageSurveyBarComponent.prototype.ngOnInit = function () {
    };
    ManageSurveyBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage-survey-bar',
            template: __webpack_require__("../../../../../src/app/manage-survey-bar/manage-survey-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-survey-bar/manage-survey-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManageSurveyBarComponent);
    return ManageSurveyBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-survey/add-survey/add-survey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    margin-top: 20px;\r\n    margin-left: 100px;\r\n    margin-left: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-survey/add-survey/add-survey.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar></app-header-bar>\n<div class=\"container\">\n  <div class=\"ui segment\">\n    <div class=\"ui massive fluid transparent input\">\n      <input type=\"text\" placeholder=\"ชื่อแบบสอบถาม\" [(ngModel)]=\"surveyName\">\n    </div>\n    <div class=\"ui fitted divider\"></div>\n    <br>\n    <div class=\"ui small fluid transparent input\">\n      <input type=\"text\" placeholder=\"คำอธิบายแบบสอบถาม\" [(ngModel)]=\"description\">\n    </div>\n    <div class=\"ui fitted divider\"></div>\n    <br>\n    <div class=\"ui form\">\n      <div class=\"inline fields\">\n        <label>แบบสอบถามนี้สำหรับ:&nbsp;&nbsp; </label>\n        <div class=\"field\">\n          <div class=\"ui radio checkbox\">\n            <input type=\"radio\" name=\"target\" checked=\"checked\" value=\"บัณฑิต\" [(ngModel)]=\"target\">\n            <label>บัณฑิต</label>\n          </div>\n        </div>\n        <div class=\"field\">\n          <div class=\"ui radio checkbox\">\n            <input type=\"radio\" name=\"target\" value=\"ผู้ประกอบการ\" [(ngModel)]=\"target\">\n            <label>ผู้ประกอบการ</label>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"ui teal segment\">\n      <div *ngFor=\"let dataQuestion of questionList | async\">\n        <div *ngIf=\"(dataQuestion.survey_id == surveyCount)\">\n          <br>\n          <b *ngIf=\"dataQuestion.question_type != 9\">คำถาม&nbsp;&nbsp; : &nbsp;&nbsp;{{dataQuestion.question}}</b>\n          <b *ngIf=\"dataQuestion.question_type == 9\">คำอธิบาย&nbsp;&nbsp; : &nbsp;&nbsp;{{dataQuestion.question}}</b>\n          <div *ngFor=\"let dataChoice of choiceList | async\">\n            <div *ngIf=\"dataChoice.question_id == dataQuestion.key\">\n              {{dataChoice.choice}}\n            </div>\n          </div>\n          <div class=\"ui small basic icon buttons float-right\">\n            <button class=\"ui button\" (click)=\"setEditData(dataQuestion)\" data-toggle=\"modal\" data-target=\"#editQuestion\">\n              <i class=\"edit outline icon\"></i>\n            </button>\n            <button class=\"ui button\" (click)=\"setDelQuestion(dataQuestion)\" data-toggle=\"modal\" data-target=\"#deleteQuestion\">\n              <i class=\"trash alternate outline icon\"></i>\n            </button>\n          </div>\n          <br>\n          <br>\n          <div class=\"ui fitted divider\"></div>\n        </div>\n      </div>\n      <button class=\"ui basic button\" type=\"button\" data-toggle=\"modal\" data-target=\"#addQuestion\" (click)=\"setData(i)\">\n        <i class=\"plus icon\"></i>เพิ่มคำถาม\n      </button>\n      <br>\n    </div>\n    <br>\n    <button class=\"ui teal basic button\" type=\"button\" (click)=\"saveform()\">\n      <i class=\"save icon\"></i>บันทึก\n    </button>\n    <button class=\"ui secondary basic button\" data-toggle=\"modal\" data-target=\"#back\">ยกเลิก</button>\n  </div>\n</div>\n\n<!-- add -->\n<div class=\"modal fade\" id=\"addQuestion\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">เพิ่มคำถาม/เพิ่มคำอธิบาย</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form [formGroup]=\"choicesForm\" class=\"ui form\">\n        <div class=\"modal-body\">\n          <div class=\"field\">\n            <input type=\"text\" placeholder=\"คำถาม/คำอธิบาย\" formControlName=\"question\" [(ngModel)]=\"questionData\">\n          </div>\n          <div class=\"field\">\n            <label>เลือกประเภทคำตอบ</label>\n            <br>\n            <select class=\"ui selection dropdown\" formControlName=\"questionType\" [(ngModel)]=\"selectedValue\" (ngModelChange)=\"onChange($event)\">\n              <option *ngFor=\"let data of questionTypeList | async\" [ngValue]=\"data.key\">{{data.question_type_name}}</option>\n            </select>\n          </div>\n          <!-- choice type -->\n          <!-- text box -->\n          <div *ngIf=\"selectedTextbox\" class=\"ui disabled input\">\n            <input type=\"text\" placeholder=\"ข้อความคำตอบสั้นๆ\">\n          </div>\n          <!-- textarea -->\n          <div *ngIf=\"selectedTextarea\" class=\"ui fluid disabled input\">\n            <input type=\"text\" placeholder=\"ข้อความคำตอบแบบยาว\">\n          </div>\n          <!-- rating -->\n          <div *ngIf=\"selectedRating\" class=\"inline fields\">\n            <div class=\"field\">\n              <div class=\"ui disabled radio checkbox\">\n                <input type=\"radio\" name=\"rating\" disabled=\"disabled\">\n                <label>มากที่สุด</label>\n              </div>\n            </div>\n            <div class=\"field\">\n              <div class=\"ui disabled radio checkbox\">\n                <input type=\"radio\" name=\"rating\" disabled=\"disabled\">\n                <label>มาก</label>\n              </div>\n            </div>\n            <div class=\"field\">\n              <div class=\"ui disabled radio checkbox\">\n                <input type=\"radio\" name=\"rating\" disabled=\"disabled\">\n                <label>ปานกลาง</label>\n              </div>\n            </div>\n            <div class=\"field\">\n              <div class=\"ui disabled radio checkbox\">\n                <input type=\"radio\" name=\"rating\" disabled=\"disabled\">\n                <label>น้อย</label>\n              </div>\n            </div>\n            <div class=\"field\">\n              <div class=\"ui disabled radio checkbox\">\n                <input type=\"radio\" name=\"rating\" disabled=\"disabled\">\n                <label>น้อยที่สุด</label>\n              </div>\n            </div>\n          </div>\n          <!-- check box , drop down, radio -->\n          <div *ngIf=\"selectedOther\">\n            <div formArrayName=\"choices\" *ngFor=\"let c of choices.controls; let j = index;\">\n              <div [formGroupName]=\"j\">\n                <div class=\"field\">\n                  <div class=\"ui input\">\n                    <input type=\"text\" placeholder=\"กรอกตัวเลือก\" formControlName=\"choice\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <a class=\"item\" (click)=\"addChoice()\">\n              <i class=\"add circle icon\"></i>เพิ่มคำตอบ\n            </a>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"clearData(choicesForm.value)\" data-dismiss=\"modal\">ยกเลิก</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveData(choicesForm.value)\" data-dismiss=\"modal\">บันทึก</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- edit -->\n<div class=\"modal fade\" id=\"editQuestion\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">แก้ไขคำถาม/แก้ไขตัวเลือก</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"clearData()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form class=\"ui form\">\n        <div class=\"modal-body\">\n          <div class=\"field\">\n            <input type=\"text\" placeholder=\"คำถาม\" [(ngModel)]=\"editQuestion\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"field\">\n            <label>เลือกประเภทคำตอบ</label>\n            <br>\n            <select class=\"ui selection dropdown\" [(ngModel)]=\"selectedValue\" (ngModelChange)=\"onChange($event)\" [ngModelOptions]=\"{standalone: true}\">\n              <option *ngFor=\"let data of questionTypeList | async\" [ngValue]=\"data.key\">{{data.question_type_name}}</option>\n            </select>\n          </div>\n          <!-- choice type -->\n          <!-- text box -->\n          <div *ngIf=\"selectedTextbox\" class=\"ui disabled input\">\n            <input type=\"text\" placeholder=\"ข้อความคำตอบสั้นๆ\">\n          </div>\n          <!-- textarea -->\n          <div *ngIf=\"selectedTextarea\" class=\"ui fluid disabled input\">\n            <input type=\"text\" placeholder=\"ข้อความคำตอบแบบยาว\">\n          </div>\n          <!-- rating -->\n          <div *ngIf=\"selectedRating\" class=\"inline fields\">\n            <div class=\"field\">\n              <div class=\"ui disable checkbox\">\n                <input type=\"checkbox\" name=\"rating\" checked=\"checked\">\n                <label>มากที่สุด</label>\n              </div>\n            </div>\n            <div class=\"field\">\n              <div class=\"ui disable checkbox\">\n                <input type=\"checkbox\" name=\"rating\" checked=\"checked\">\n                <label>มาก</label>\n              </div>\n            </div>\n            <div class=\"field\">\n              <div class=\"ui disable checkbox\">\n                <input type=\"checkbox\" name=\"rating\" checked=\"checked\">\n                <label>ปานกลาง</label>\n              </div>\n            </div>\n            <div class=\"field\">\n              <div class=\"ui disable checkbox\">\n                <input type=\"checkbox\" name=\"rating\" checked=\"checked\">\n                <label>น้อย</label>\n              </div>\n            </div>\n            <div class=\"field\">\n              <div class=\"ui disable checkbox\">\n                <input type=\"checkbox\" name=\"rating\" checked=\"checked\">\n                <label>น้อยที่สุด</label>\n              </div>\n            </div>\n          </div>\n          <!-- check box , drop down, radio -->\n          <div *ngIf=\"selectedOther\">\n            <div *ngFor=\"let c of editChoice; let i = index;\">\n              <div>\n                <div class=\"field\">\n                  <div class=\"ui input\">\n                    <input type=\"text\" placeholder=\"กรอกตัวเลือก\" [(ngModel)]=\"editChoice[i].choice\" [ngModelOptions]=\"{standalone: true}\">\n                    <a class=\"item\" (click)=\"delEditChoice(i)\">\n                      <i class=\"trash alternate outline large icon\"></i>\n                    </a>\n                  </div>\n\n                </div>\n              </div>\n              <!-- choice: {{ choicesForm.controls.choices.controls[j].controls.choice.value }} -->\n            </div>\n            <a class=\"item\" (click)=\"addEditChoice()\">\n              <i class=\"add circle icon\"></i>เพิ่มคำตอบ\n            </a>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"clearData()\" data-dismiss=\"modal\">ยกเลิก</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"editData()\" data-dismiss=\"modal\">บันทึก</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- delete -->\n<div class=\"modal fade\" id=\"deleteQuestion\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h3 class=\"modal-title\" id=\"exampleModalLabel\">ลบคำถาม</h3>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <b>ต้องการลบ&nbsp;:&nbsp;</b>{{q_name}}&nbsp;?\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"delData()\">ลบ</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- back -->\n<div class=\"modal fade\" id=\"back\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h3 class=\"modal-title\" id=\"exampleModalLabel\">กลับสู่หน้าจัดการแบบสอบถาม</h3>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <b>ต้องการกลับสู่หน้าจัดการแบบสอบถาม&nbsp;?</b>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"back()\">ตกลง</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/manage-survey/add-survey/add-survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddSurveyComponent = /** @class */ (function () {
    function AddSurveyComponent(db, router, firebaseService, formBuilder, ref) {
        this.db = db;
        this.router = router;
        this.firebaseService = firebaseService;
        this.formBuilder = formBuilder;
        this.ref = ref;
        this.last_update = __WEBPACK_IMPORTED_MODULE_5_moment__(Date.now()).format('l');
        this.questionTemp = [];
        this.questionType = [];
        this.surveyTemp = [];
        this.choiceTemp = [];
        this.keyTemp = [];
        this.questionKeyTemp = [];
        this.count = 0;
        this.surveyCount = 0;
        this.questionCount = 0;
        this.choiceCount = 0;
        // choice
        this.editChoice = [];
        this.deleteChoice = [];
        this.testtest = [];
        // for test new way
        this.myChoices = [];
        this.choice = [];
        this.selectedTextbox = false;
        this.selectedTextarea = false;
        this.selectedOther = false;
        this.selectedRating = false;
        this.questionTypeList = this.firebaseService.getList('/question_type');
        this.surveyList = this.firebaseService.getList('/survey');
        this.questionList = this.firebaseService.getList('/question');
        this.choiceList = this.firebaseService.getList('/choice');
    }
    AddSurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionNumber = 0;
        this.editChoice = [];
        this.choicesForm = this.formBuilder.group({
            question: '',
            questionType: '',
            choices: this.formBuilder.array([this.createChoice()])
        });
        // survey
        this.surveyList.subscribe(function (data) {
            data.forEach(function (tmp) {
                _this.surveyTemp.push(tmp);
                // console.log(tmp);
            });
            for (var i = 0; i <= _this.surveyTemp.length; i++) {
                _this.surveyCount = i + 1;
            }
            // console.log("surveycount===" + this.surveyCount);
        });
        // question
        this.questionList.subscribe(function (data) {
            data.forEach(function (tmp) {
                _this.questionTemp.push(tmp);
                _this.keyTemp.push(tmp.key);
                if (tmp.survey_id == _this.surveyCount) {
                    _this.questionKeyTemp.push(tmp);
                }
                // console.log(tmp.question);
            });
            console.log(_this.questionKeyTemp);
            // console.log("lenght==" + this.questionTemp.length);
            for (var i = 0; i <= _this.questionTemp.length; i++) {
                _this.questionCount = i + 1;
            }
            console.log("i==" + i);
            if (_this.questionTemp.length != 0) {
                _this.question_Key = parseInt(_this.keyTemp[_this.questionTemp.length - 1]) + 1;
            }
            else {
                _this.question_Key = 1;
            }
            console.log("question_Key==" + _this.question_Key);
            console.log("questionCount===" + _this.questionCount);
        });
        // choice
        this.choiceList.subscribe(function (data) {
            _this.choiceTemp = [];
            data.forEach(function (tmp) {
                _this.choiceTemp.push(tmp);
            });
            console.log(_this.choiceTemp);
        });
    };
    AddSurveyComponent.prototype.createChoice = function () {
        return this.formBuilder.group({
            choice: ''
        });
    };
    Object.defineProperty(AddSurveyComponent.prototype, "choices", {
        get: function () {
            return this.choicesForm.get('choices');
        },
        enumerable: true,
        configurable: true
    });
    ;
    AddSurveyComponent.prototype.addChoice = function () {
        this.choices.push(this.createChoice());
    };
    AddSurveyComponent.prototype.saveform = function () {
        // console.log(this.surveyName);
        // console.log(this.description);
        // console.log(this.target);
        // console.log(this.last_update);
        if (this.surveyName == undefined || this.description == undefined || this.target == undefined) {
            alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        }
        else {
            var survey = {
                key: this.surveyCount,
                survey_name: this.surveyName,
                description: this.description,
                target: this.target,
                last_update: this.last_update
            };
            this.firebaseService.addData(survey, '/survey');
            this.surveyName = '';
            this.description = '';
            this.target = '';
            this.surveyTemp = [];
            this.surveyCount = 0;
            this.goToManageSurvey();
        }
    };
    AddSurveyComponent.prototype.saveData = function (formValue) {
        var _this = this;
        console.log(formValue);
        console.log(formValue.question);
        console.log(formValue.choices);
        var question = {
            key: this.question_Key,
            survey_id: this.surveyCount,
            number: this.questionNumber,
            question: formValue.question,
            question_type: this.selectedValue
        };
        this.firebaseService.addData(question, '/question');
        var i = 1;
        var j = 0;
        formValue.choices.forEach(function (tmp) {
            console.log(tmp.choice);
            console.log("i=" + i);
            if (tmp.choice != '') {
                var choice = {
                    key: i.toString() + _this.question_Key,
                    choice_id: i,
                    question_id: _this.question_Key,
                    choice: tmp.choice
                };
                _this.firebaseService.addData(choice, '/choice');
                i = i + 1;
                j = j + 1;
            }
        });
        this.questionCount = 0;
        this.questionData = '';
        this.selectedValue = '';
        this.questionTemp = [];
        this.keyTemp = [];
        this.choicesForm.reset();
        var control = this.choicesForm.controls['choices'];
        for (var c = j; c > 0; c--) {
            control.removeAt(c);
            console.log(c);
        }
    };
    AddSurveyComponent.prototype.onChange = function (newValue) {
        console.log(newValue);
        if (this.selectedValue == 1) {
            this.selectedTextbox = true;
            this.selectedTextarea = false;
            this.selectedOther = false;
            this.selectedRating = false;
        }
        else if (this.selectedValue == 2) {
            this.selectedTextbox = false;
            this.selectedTextarea = true;
            this.selectedOther = false;
            this.selectedRating = false;
        }
        else if (this.selectedValue == 6) {
            this.selectedTextbox = false;
            this.selectedTextarea = false;
            this.selectedOther = false;
            this.selectedRating = true;
        }
        else if (this.selectedValue == 7 || this.selectedValue == 8 || this.selectedValue == 9) {
            this.selectedTextbox = false;
            this.selectedTextarea = false;
            this.selectedOther = false;
            this.selectedRating = false;
        }
        else {
            this.selectedTextbox = false;
            this.selectedTextarea = false;
            this.selectedOther = true;
            this.selectedRating = false;
        }
    };
    AddSurveyComponent.prototype.setData = function () {
        this.questionNumber = this.questionNumber + 1;
    };
    AddSurveyComponent.prototype.setEditData = function (data) {
        console.log(data);
        console.log(this.choiceTemp);
        this.editKey = data.key;
        this.editQuestion = data.question;
        this.selectedValue = data.question_type;
        this.editsurveyId = data.survey_id;
        this.editNumber = data.number;
        this.editQuesiontId = data.key;
        for (var i = 0; i < this.choiceTemp.length; i++) {
            if (data.key == this.choiceTemp[i].question_id) {
                console.log("i=" + i);
                console.log(this.choiceTemp[i]);
                this.editChoiceId = parseInt(this.choiceTemp[i].choice_id);
                this.editQuesiontId = this.choiceTemp[i].question_id;
                var data_1 = {
                    key: this.choiceTemp[i].key,
                    choice_id: this.choiceTemp[i].choice_id,
                    question_id: this.choiceTemp[i].question_id,
                    choice: this.choiceTemp[i].choice
                };
                this.editChoice.push(data_1);
            }
        }
        console.log(this.editChoice);
        this.ref.detectChanges();
    };
    AddSurveyComponent.prototype.editData = function () {
        var _this = this;
        // console.log("i==");
        // this.testtest.push(this.editChoice);
        console.log("heeeeeeeeeeeeeeeeeee");
        console.log(this.choiceTemp);
        console.log(this.editKey);
        console.log(this.editChoice);
        var data = {
            key: this.editKey,
            survey_id: this.editsurveyId,
            number: this.editNumber,
            question: this.editQuestion,
            question_type: this.selectedValue
        };
        // console.log(dataObj);
        this.firebaseService.editData(this.editKey, data, '/question');
        var j = 0;
        this.editChoice.forEach(function (tmp) {
            console.log(tmp['choice']);
            var choice = {
                key: tmp['key'],
                choice_id: tmp['choice_id'],
                question_id: tmp['question_id'],
                choice: tmp['choice']
            };
            _this.firebaseService.editData(tmp['key'], choice, '/choice');
            j = j + 1;
        });
        console.log(this.deleteChoice.length);
        if (this.deleteChoice.length > 0) {
            var count = this.deleteChoice.length;
            console.log("count=" + count);
            for (var i = 0; i < count; i++) {
                console.log("eeee");
                console.log(this.deleteChoice[i]);
                this.firebaseService.delData(this.deleteChoice[i], '/choice');
            }
        }
        this.questionCount = 0;
        this.questionData = '';
        this.selectedValue = '';
        this.questionTemp = [];
        this.keyTemp = [];
        // this.choiceTemp = [];
        this.editChoice = [];
        this.deleteChoice = [];
    };
    AddSurveyComponent.prototype.addEditChoice = function () {
        console.log(this.editChoiceId);
        if (this.editChoiceId == undefined || this.editChoiceId == NaN) {
            this.editChoiceId = 1;
        }
        else {
            this.editChoiceId = this.editChoiceId + 1;
        }
        var data = {
            key: this.editChoiceId.toString() + this.editQuesiontId,
            choice_id: this.editChoiceId,
            question_id: this.editQuesiontId,
            choice: ''
        };
        this.editChoice.push(data);
        console.log(this.editChoice);
    };
    AddSurveyComponent.prototype.setDelQuestion = function (data) {
        this.q_id = data.key;
        this.s_id = data.survey_id;
        this.q_number = data.number;
        this.q_name = data.question;
        this.q_type = data.question_type;
    };
    AddSurveyComponent.prototype.delData = function () {
        for (var i = 0; i < this.choiceTemp.length; i++) {
            if (this.q_id == this.choiceTemp[i].question_id) {
                this.firebaseService.delData(this.choiceTemp[i], '/choice');
            }
        }
        var data = {
            key: this.q_id,
            survey_id: this.s_id,
            number: this.q_number,
            question: this.q_name,
            question_type: this.q_type
        };
        this.firebaseService.delData(data, '/question');
        this.questionCount = 0;
        this.questionTemp = [];
        this.keyTemp = [];
        this.choiceTemp = [];
        this.editChoice = [];
        console.log(this.choiceTemp);
    };
    AddSurveyComponent.prototype.delEditChoice = function (index) {
        console.log(this.editChoice);
        console.log(this.editChoice[index]['choice_id']);
        console.log(this.editChoice[index]['question_id']);
        var choiceKey = this.editChoice[index]['choice_id'].toString() + this.editChoice[index]['question_id'].toString();
        console.log(choiceKey);
        var choiceIndex = this.choiceTemp.findIndex(function (item) { return item['key'] == parseInt(choiceKey); });
        if (choiceIndex != -1) {
            console.log(this.choiceTemp[choiceIndex]);
            this.deleteChoice.push(this.choiceTemp[choiceIndex]);
        }
        // this.firebaseService.delData(this.choiceTemp[choiceIndex],'/choice');
        this.editChoice.splice(index, 1);
        // this.choiceTemp.splice(choiceIndex,1);
        // this.choiceTemp = [];
        console.log(this.editChoice);
        console.log(this.choiceTemp);
        console.log(this.deleteChoice);
    };
    AddSurveyComponent.prototype.clearData = function (formValue) {
        console.log(formValue);
        var j = 0;
        formValue.choices.forEach(function (tmp) {
            j = j + 1;
        });
        this.editChoice = [];
        this.editQuestion = '';
        this.selectedValue = '';
        this.deleteChoice = [];
        this.questionCount = this.questionCount - 1;
        this.questionData = '';
        this.choicesForm.reset();
        var control = this.choicesForm.controls['choices'];
        for (var c = j; c > 0; c--) {
            control.removeAt(c);
            console.log(c);
        }
    };
    AddSurveyComponent.prototype.goToManageSurvey = function () {
        this.router.navigate(['/manage-survey']);
    };
    AddSurveyComponent.prototype.back = function () {
        var _this = this;
        this.questionKeyTemp.forEach(function (tmp) {
            for (var j = 0; j < _this.choiceTemp.length; j++) {
                if (_this.choiceTemp[j].question_id == tmp.key) {
                    var choice = {
                        key: _this.choiceTemp[j].key
                    };
                    _this.firebaseService.delData(choice, '/choice');
                }
            }
            _this.firebaseService.delData(tmp, '/question');
        });
        this.goToManageSurvey();
    };
    AddSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-survey',
            template: __webpack_require__("../../../../../src/app/manage-survey/add-survey/add-survey.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-survey/add-survey/add-survey.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], AddSurveyComponent);
    return AddSurveyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-survey/check-student/check-student.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-survey/check-student/check-student.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  check-student works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/manage-survey/check-student/check-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckStudentComponent = /** @class */ (function () {
    function CheckStudentComponent() {
    }
    CheckStudentComponent.prototype.ngOnInit = function () {
    };
    CheckStudentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-check-student',
            template: __webpack_require__("../../../../../src/app/manage-survey/check-student/check-student.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-survey/check-student/check-student.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckStudentComponent);
    return CheckStudentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-survey/edit-survey/edit-survey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-survey/edit-survey/edit-survey.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar></app-header-bar>\n<div class=\"container\">\n  <div class=\"ui segment\">\n    <div class=\"ui massive fluid transparent input\">\n      <input type=\"text\" placeholder=\"ชื่อแบบสอบถาม\" [(ngModel)]=\"surveyName\">\n    </div>\n    <div class=\"ui fitted divider\"></div>\n    <br>\n    <div class=\"ui small fluid transparent input\">\n      <input type=\"text\" placeholder=\"คำอธิบายแบบสอบถาม\" [(ngModel)]=\"description\">\n    </div>\n    <div class=\"ui fitted divider\"></div>\n    <br>\n    <div class=\"ui form\">\n      <div class=\"inline fields\">\n        <label>แบบสอบถามนี้สำหรับ:&nbsp;&nbsp; </label>\n        <div class=\"field\">\n          <div class=\"ui radio checkbox\">\n            <input type=\"radio\" name=\"target\" checked=\"checked\" value=\"บัณฑิต\" [(ngModel)]=\"target\">\n            <label>บัณฑิต</label>\n          </div>\n        </div>\n        <div class=\"field\">\n          <div class=\"ui radio checkbox\">\n            <input type=\"radio\" name=\"target\" value=\"ผู้ประกอบการ\" [(ngModel)]=\"target\">\n            <label>ผู้ประกอบการ</label>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"ui teal segment\">\n      <div *ngFor=\"let dataQuestion of questionList | async\">\n        <div *ngIf=\"(dataQuestion.survey_id == survey_key)\">\n          <br>\n          <b *ngIf=\"dataQuestion.question_type != 9\">คำถาม&nbsp;&nbsp; : &nbsp;&nbsp;{{dataQuestion.question}}</b>\n          <b *ngIf=\"dataQuestion.question_type == 9\">คำอธิบาย&nbsp;&nbsp; : &nbsp;&nbsp;{{dataQuestion.question}}</b>\n          <div *ngFor=\"let dataChoice of choiceList | async\">\n            <div *ngIf=\"dataChoice.question_id == dataQuestion.key\">\n              {{dataChoice.choice}}\n            </div>\n          </div>\n          <div class=\"ui small basic icon buttons float-right\">\n            <button class=\"ui button\" (click)=\"setEditData(dataQuestion)\" data-toggle=\"modal\" data-target=\"#editQuestion\">\n              <i class=\"edit outline icon\"></i>\n            </button>\n            <button class=\"ui button\" (click)=\"setDelQuestion(dataQuestion)\" data-toggle=\"modal\" data-target=\"#deleteQuestion\">\n              <i class=\"trash alternate outline icon\"></i>\n            </button>\n          </div>\n          <br>\n          <br>\n          <div class=\"ui fitted divider\"></div>\n        </div>\n      </div>\n      <button class=\"ui basic button\" type=\"button\" data-toggle=\"modal\" data-target=\"#addQuestion\" (click)=\"setData()\">\n        <i class=\"plus icon\"></i>เพิ่มคำถาม\n      </button>\n      <br>\n    </div>\n    <br>\n    <button class=\"ui teal basic button\" type=\"button\" (click)=\"saveform()\">\n      <i class=\"save icon\"></i>บันทึก\n    </button>\n    <button class=\"ui secondary basic button\" data-toggle=\"modal\" data-target=\"#back\">ยกเลิก</button>\n  </div>\n</div>\n\n<!-- add -->\n<div class=\"modal fade\" id=\"addQuestion\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">เพิ่มคำถาม</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form class=\"ui form\">\n        <div class=\"modal-body\">\n          <div class=\"field\">\n            <input type=\"text\" placeholder=\"คำถาม/คำอธิบาย\" [(ngModel)]=\"questionData\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"field\">\n            <label>เลือกประเภทคำตอบ</label>\n            <br>\n            <select class=\"ui selection dropdown\" [(ngModel)]=\"selectedValue\" (ngModelChange)=\"onChange($event)\" [ngModelOptions]=\"{standalone: true}\">\n              <option *ngFor=\"let data of questionTypeList | async\" [ngValue]=\"data.key\">{{data.question_type_name}}</option>\n            </select>\n          </div>\n          <!-- choice type -->\n          <!-- text box -->\n          <div *ngIf=\"selectedTextbox\" class=\"ui disabled input\">\n            <input type=\"text\" placeholder=\"ข้อความคำตอบสั้นๆ\">\n          </div>\n          <!-- textarea -->\n          <div *ngIf=\"selectedTextarea\" class=\"ui fluid disabled input\">\n            <input type=\"text\" placeholder=\"ข้อความคำตอบแบบยาว\">\n          </div>\n          <!-- rating -->\n          <div *ngIf=\"selectedRating\" class=\"inline fields\">\n            <div class=\"field\">\n              <div class=\"ui disabled radio checkbox\">\n                <input type=\"radio\" name=\"rating\" disabled=\"disabled\">\n                <label>มากที่สุด</label>\n              </div>\n            </div>\n            <div class=\"field\">\n              <div class=\"ui disabled radio checkbox\">\n                <input type=\"radio\" name=\"rating\" disabled=\"disabled\">\n                <label>มาก</label>\n              </div>\n            </div>\n            <div class=\"field\">\n              <div class=\"ui disabled radio checkbox\">\n                <input type=\"radio\" name=\"rating\" disabled=\"disabled\">\n                <label>ปานกลาง</label>\n              </div>\n            </div>\n            <div class=\"field\">\n              <div class=\"ui disabled radio checkbox\">\n                <input type=\"radio\" name=\"rating\" disabled=\"disabled\">\n                <label>น้อย</label>\n              </div>\n            </div>\n            <div class=\"field\">\n              <div class=\"ui disabled radio checkbox\">\n                <input type=\"radio\" name=\"rating\" disabled=\"disabled\">\n                <label>น้อยที่สุด</label>\n              </div>\n            </div>\n          </div>\n          <!-- check box , drop down, radio -->\n          <div *ngIf=\"selectedOther\">\n            <div *ngFor=\"let c of addChoiceTemp; let j = index;\">\n              <div class=\"field\">\n                <div class=\"ui input\">\n                  <input type=\"text\" placeholder=\"กรอกตัวเลือก\" [(ngModel)]=\"addChoiceTemp[j].choice\" [ngModelOptions]=\"{standalone: true}\">\n                </div>\n              </div>\n            </div>\n            <a class=\"item\" (click)=\"addChoice()\">\n              <i class=\"add circle icon\"></i>เพิ่มคำตอบ\n            </a>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"clearData()\" data-dismiss=\"modal\">ยกเลิก</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveData()\" data-dismiss=\"modal\">บันทึก</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- edit -->\n<div class=\"modal fade\" id=\"editQuestion\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">แก้ไขคำถาม/แก้ไขตัวเลือก</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"clearData()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form class=\"ui form\">\n        <div class=\"modal-body\">\n          <div class=\"field\">\n            <input type=\"text\" placeholder=\"คำถาม\" [(ngModel)]=\"editQuestion\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"field\">\n            <label>เลือกประเภทคำตอบ</label>\n            <br>\n            <select class=\"ui selection dropdown\" [(ngModel)]=\"selectedValue\" (ngModelChange)=\"onChange($event)\" [ngModelOptions]=\"{standalone: true}\">\n              <option *ngFor=\"let data of questionTypeList | async\" [ngValue]=\"data.key\">{{data.question_type_name}}</option>\n            </select>\n          </div>\n          <!-- choice type -->\n          <!-- text box -->\n          <div *ngIf=\"selectedTextbox\" class=\"ui disabled input\">\n            <input type=\"text\" placeholder=\"ข้อความคำตอบสั้นๆ\">\n          </div>\n          <!-- textarea -->\n          <div *ngIf=\"selectedTextarea\" class=\"ui fluid disabled input\">\n            <input type=\"text\" placeholder=\"ข้อความคำตอบแบบยาว\">\n          </div>\n          <!-- rating -->\n          <div *ngIf=\"selectedRating\" class=\"inline fields\">\n            <div class=\"field\">\n              <div class=\"ui disable checkbox\">\n                <input type=\"checkbox\" name=\"rating\" checked=\"checked\">\n                <label>มากที่สุด</label>\n              </div>\n            </div>\n            <div class=\"field\">\n              <div class=\"ui disable checkbox\">\n                <input type=\"checkbox\" name=\"rating\" checked=\"checked\">\n                <label>มาก</label>\n              </div>\n            </div>\n            <div class=\"field\">\n              <div class=\"ui disable checkbox\">\n                <input type=\"checkbox\" name=\"rating\" checked=\"checked\">\n                <label>ปานกลาง</label>\n              </div>\n            </div>\n            <div class=\"field\">\n              <div class=\"ui disable checkbox\">\n                <input type=\"checkbox\" name=\"rating\" checked=\"checked\">\n                <label>น้อย</label>\n              </div>\n            </div>\n            <div class=\"field\">\n              <div class=\"ui disable checkbox\">\n                <input type=\"checkbox\" name=\"rating\" checked=\"checked\">\n                <label>น้อยที่สุด</label>\n              </div>\n            </div>\n          </div>\n          <!-- check box , drop down, radio -->\n          <div *ngIf=\"selectedOther\">\n            <div *ngFor=\"let c of editSelectedChoice; let i = index;\">\n              <div class=\"field\">\n                <div class=\"ui input\">\n                  <input type=\"text\" placeholder=\"กรอกตัวเลือก\" [(ngModel)]=\"editSelectedChoice[i].choice\" [ngModelOptions]=\"{standalone: true}\">\n                  <a class=\"item\" (click)=\"delEditChoice(i)\">\n                    <i class=\"trash alternate outline large icon\"></i>\n                  </a>\n                </div>\n\n              </div>\n\n            </div>\n            <a class=\"item\" (click)=\"addEditChoice()\">\n              <i class=\"add circle icon\"></i>เพิ่มคำตอบ\n            </a>\n          </div>\n\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"clearData()\" data-dismiss=\"modal\">ยกเลิก</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"editData()\" data-dismiss=\"modal\">บันทึก</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- delete -->\n<div class=\"modal fade\" id=\"deleteQuestion\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h3 class=\"modal-title\" id=\"exampleModalLabel\">ลบคำถาม</h3>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <b>ต้องการลบ&nbsp;:&nbsp;</b>{{q_name}}&nbsp;?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"delData()\">ลบ</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- back -->\n<div class=\"modal fade\" id=\"back\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n<div class=\"modal-dialog\" role=\"document\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h3 class=\"modal-title\" id=\"exampleModalLabel\">กลับสู่หน้าจัดการแบบสอบถาม</h3>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <b>ต้องการกลับสู่หน้าจัดการแบบสอบถาม&nbsp;?</b>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\n      <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"goToManageSurvey()\">ตกลง</button>\n    </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/manage-survey/edit-survey/edit-survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditSurveyComponent = /** @class */ (function () {
    function EditSurveyComponent(db, router, firebaseService, formBuilder, ref) {
        this.db = db;
        this.router = router;
        this.firebaseService = firebaseService;
        this.formBuilder = formBuilder;
        this.ref = ref;
        this.last_update = __WEBPACK_IMPORTED_MODULE_5_moment__(Date.now()).format('l');
        this.choiceTemp = [];
        this.myChoice = [];
        this.questionTemp = [];
        this.keyTemp = [];
        // count
        this.surveyCount = 0;
        this.questionCount = 0;
        this.choiceCount = 0;
        this.editChoice = [];
        this.addChoiceTemp = [];
        this.selectedTextbox = false;
        this.selectedTextarea = false;
        this.selectedOther = false;
        this.selectedRating = false;
        // choice
        this.editSelectedChoice = [];
        this.deleteSelectedChoice = [];
        this.testtest = [];
    }
    EditSurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.survey_key = localStorage.getItem("survey_key");
        this.surveyList = this.firebaseService.getList('/survey');
        this.questionList = this.firebaseService.getList('/question');
        this.choiceList = this.firebaseService.getList('/choice');
        this.questionTypeList = this.firebaseService.getList('/question_type');
        var choiceData = {
            choice: ''
        };
        this.addChoiceTemp.push(choiceData);
        this.surveyList.subscribe(function (survey) {
            survey.forEach(function (tmp) {
                if (tmp.key == _this.survey_key) {
                    _this.surveyName = tmp.survey_name;
                    _this.description = tmp.description;
                    _this.target = tmp.target;
                }
                _this.surveyCount = _this.surveyCount + 1;
            });
        });
        this.choiceList.subscribe(function (choice) {
            _this.choiceTemp = [];
            choice.forEach(function (tmp) {
                _this.choiceTemp.push(tmp);
            });
            _this.choiceCount = _this.choiceCount + 1;
        });
        this.questionList.subscribe(function (question) {
            question.forEach(function (tmp) {
                _this.questionTemp.push(tmp);
                _this.keyTemp.push(tmp.key);
                if (tmp.survey_id == _this.survey_key) {
                    console.log(tmp.question);
                    _this.choiceTemp.forEach(function (choice) {
                        if (choice.question_id == tmp.key) {
                            _this.myChoice.push(choice);
                        }
                    });
                    _this.questionCount = _this.questionCount + 1;
                }
                _this.questionNumber = _this.questionCount;
                if (_this.questionTemp.length != 0) {
                    _this.question_Key = parseInt(_this.keyTemp[_this.questionTemp.length - 1]) + 1;
                }
                else {
                    _this.question_Key = 1;
                }
            });
        });
        console.log(this.choiceTemp);
    };
    EditSurveyComponent.prototype.setData = function () {
        this.questionNumber = this.questionNumber + 1;
    };
    EditSurveyComponent.prototype.onChange = function (newValue) {
        console.log(newValue);
        if (this.selectedValue == 1) {
            this.selectedTextbox = true;
            this.selectedTextarea = false;
            this.selectedOther = false;
            this.selectedRating = false;
        }
        else if (this.selectedValue == 2) {
            this.selectedTextbox = false;
            this.selectedTextarea = true;
            this.selectedOther = false;
            this.selectedRating = false;
        }
        else if (this.selectedValue == 6) {
            this.selectedTextbox = false;
            this.selectedTextarea = false;
            this.selectedOther = false;
            this.selectedRating = true;
        }
        else if (this.selectedValue == 7 || this.selectedValue == 8 || this.selectedValue == 9) {
            this.selectedTextbox = false;
            this.selectedTextarea = false;
            this.selectedOther = false;
            this.selectedRating = false;
        }
        else {
            this.selectedTextbox = false;
            this.selectedTextarea = false;
            this.selectedOther = true;
            this.selectedRating = false;
        }
    };
    EditSurveyComponent.prototype.addChoice = function () {
        var data = {
            choice: ''
        };
        this.addChoiceTemp.push(data);
    };
    EditSurveyComponent.prototype.clearData = function () {
        this.addChoiceTemp = [];
        this.selectedValue = '';
        this.questionCount = this.questionCount - 1;
        this.editSelectedChoice = [];
        this.editSelcetedChoiceId = 0;
    };
    EditSurveyComponent.prototype.saveData = function () {
        var _this = this;
        console.log("key" + this.question_Key);
        console.log("survey_id" + this.surveyCount);
        console.log("number" + this.questionNumber);
        console.log("question" + this.questionData);
        console.log("question_type" + this.selectedValue);
        console.log(this.addChoiceTemp);
        var question = {
            key: this.question_Key,
            survey_id: this.surveyCount,
            number: this.questionNumber,
            question: this.questionData,
            question_type: this.selectedValue
        };
        this.firebaseService.addData(question, '/question');
        var i = 1;
        this.addChoiceTemp.forEach(function (tmp) {
            console.log(tmp['choice']);
            var choice = {
                key: i.toString() + _this.question_Key,
                choice_id: i,
                question_id: _this.question_Key,
                choice: tmp['choice']
            };
            _this.firebaseService.addData(choice, '/choice');
            i = i + 1;
        });
        this.questionCount = 0;
        this.questionData = '';
        this.selectedValue = '';
        this.questionTemp = [];
        this.keyTemp = [];
        this.addChoiceTemp = [{ choice: '' }];
        this.myChoice = [];
    };
    EditSurveyComponent.prototype.setDelQuestion = function (data) {
        this.q_id = data.key;
        this.s_id = data.survey_id;
        this.q_number = data.number;
        this.q_name = data.question;
        this.q_type = data.question_type;
    };
    EditSurveyComponent.prototype.delData = function () {
        for (var i = 0; i < this.choiceTemp.length; i++) {
            if (this.q_id == this.choiceTemp[i].question_id) {
                this.firebaseService.delData(this.choiceTemp[i], '/choice');
            }
        }
        var data = {
            key: this.q_id,
            survey_id: this.s_id,
            number: this.q_number,
            question: this.q_name,
            question_type: this.q_type
        };
        this.firebaseService.delData(data, '/question');
        this.questionCount = 0;
        this.questionTemp = [];
        this.keyTemp = [];
        this.choiceTemp = [];
        this.addChoiceTemp = [{ choice: '' }];
        this.questionData = '';
        this.selectedValue = '';
        this.questionCount = this.questionCount - 1;
    };
    EditSurveyComponent.prototype.setEditData = function (data) {
        console.log(data);
        console.log(this.choiceTemp);
        this.editKey = data.key;
        this.editQuestion = data.question;
        this.selectedValue = data.question_type;
        this.editsurveyId = data.survey_id;
        this.editNumber = data.number;
        this.editSelectedQuesiontId = data.key;
        for (var i = 0; i < this.choiceTemp.length; i++) {
            if (data.key == this.choiceTemp[i].question_id) {
                console.log("i=" + i);
                console.log(this.choiceTemp[i]);
                this.editSelcetedChoiceId = parseInt(this.choiceTemp[i].choice_id);
                this.editSelectedQuesiontId = this.choiceTemp[i].question_id;
                var data_1 = {
                    key: this.choiceTemp[i].key,
                    choice_id: this.choiceTemp[i].choice_id,
                    question_id: this.choiceTemp[i].question_id,
                    choice: this.choiceTemp[i].choice
                };
                this.editSelectedChoice.push(data_1);
            }
        }
        console.log(this.editSelectedChoice);
        if (this.selectedValue == 1) {
            this.selectedTextbox = true;
            this.selectedTextarea = false;
            this.selectedOther = false;
            this.selectedRating = false;
        }
        else if (this.selectedValue == 2) {
            this.selectedTextbox = false;
            this.selectedTextarea = true;
            this.selectedOther = false;
            this.selectedRating = false;
        }
        else if (this.selectedValue == 6) {
            this.selectedTextbox = false;
            this.selectedTextarea = false;
            this.selectedOther = false;
            this.selectedRating = true;
        }
        else if (this.selectedValue == 7) {
            this.selectedTextbox = false;
            this.selectedTextarea = false;
            this.selectedOther = false;
            this.selectedRating = false;
        }
        else {
            this.selectedTextbox = false;
            this.selectedTextarea = false;
            this.selectedOther = true;
            this.selectedRating = false;
        }
        this.ref.detectChanges();
    };
    EditSurveyComponent.prototype.addEditChoice = function () {
        console.log(this.editSelcetedChoiceId);
        if (this.editSelcetedChoiceId == NaN || this.editSelcetedChoiceId == undefined) {
            this.editSelcetedChoiceId = 1;
        }
        else {
            this.editSelcetedChoiceId = this.editSelcetedChoiceId + 1;
        }
        var data = {
            key: this.editSelcetedChoiceId.toString() + this.editSelectedQuesiontId,
            choice_id: this.editSelcetedChoiceId,
            question_id: this.editSelectedQuesiontId,
            choice: ''
        };
        this.editSelectedChoice.push(data);
        console.log(this.editSelectedChoice);
    };
    EditSurveyComponent.prototype.delEditChoice = function (index) {
        console.log(this.editSelectedChoice);
        console.log(this.editSelectedChoice[index]['choice_id']);
        console.log(this.editSelectedChoice[index]['question_id']);
        var choiceKey = this.editSelectedChoice[index]['choice_id'].toString() + this.editSelectedChoice[index]['question_id'].toString();
        console.log(choiceKey);
        var choiceIndex = this.choiceTemp.findIndex(function (item) { return item['key'] == parseInt(choiceKey); });
        if (choiceIndex != -1) {
            console.log(this.choiceTemp[choiceIndex]);
            this.deleteSelectedChoice.push(this.choiceTemp[choiceIndex]);
        }
        this.editSelectedChoice.splice(index, 1);
        console.log(this.editSelectedChoice);
        console.log(this.choiceTemp);
        console.log(this.deleteSelectedChoice);
    };
    EditSurveyComponent.prototype.editData = function () {
        var _this = this;
        console.log(this.choiceTemp.length);
        console.log(this.editKey);
        console.log(this.editSelectedChoice);
        var data = {
            key: this.editKey,
            survey_id: this.editsurveyId,
            number: this.editNumber,
            question: this.editQuestion,
            question_type: this.selectedValue
        };
        this.firebaseService.editData(this.editKey, data, '/question');
        var j = 0;
        this.editSelectedChoice.forEach(function (tmp) {
            console.log(tmp['choice']);
            var choice = {
                key: tmp['key'],
                choice_id: tmp['choice_id'],
                question_id: tmp['question_id'],
                choice: tmp['choice']
            };
            _this.firebaseService.editData(tmp['key'], choice, '/choice');
            j = j + 1;
        });
        if (this.deleteSelectedChoice.length > 0) {
            var count = this.deleteSelectedChoice.length;
            console.log("count=" + count);
            for (var i = 0; i < count; i++) {
                console.log("eeee");
                console.log(this.deleteSelectedChoice[i]);
                this.firebaseService.delData(this.deleteSelectedChoice[i], '/choice');
                this.choiceTemp = [];
            }
        }
        this.questionCount = 0;
        this.questionData = '';
        this.selectedValue = '';
        this.questionTemp = [];
        this.keyTemp = [];
        // this.choiceTemp = [];
        this.editSelectedChoice = [];
        this.deleteSelectedChoice = [];
        this.editSelcetedChoiceId = 0;
        console.log(this.editSelectedChoice);
    };
    EditSurveyComponent.prototype.saveform = function () {
        var survey = {
            key: this.survey_key,
            survey_name: this.surveyName,
            description: this.description,
            target: this.target,
            last_update: this.last_update
        };
        this.firebaseService.editData(this.survey_key, survey, '/survey');
        this.surveyName = '';
        this.description = '';
        this.target = '';
        this.surveyCount = 0;
        this.goToManageSurvey();
    };
    EditSurveyComponent.prototype.goToManageSurvey = function () {
        this.router.navigate(['/manage-survey']);
    };
    EditSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-survey',
            template: __webpack_require__("../../../../../src/app/manage-survey/edit-survey/edit-survey.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-survey/edit-survey/edit-survey.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], EditSurveyComponent);
    return EditSurveyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-survey/manage-survey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    margin-top: 20px;\r\n    margin-left: 100px;\r\n    margin-right: 100px;\r\n}\r\n\r\n.manage-body{\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-survey/manage-survey.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar></app-header-bar>\n<div class=\"container\">\n  <div class=\"ui segment\">\n    <div class=\"manage-body\">\n      <br>\n      <button class=\"positive ui button\" [routerLink]=\"'/add-survey'\">สร้างแบบสอบถาม</button>\n    </div>\n    <br>\n    <div class=\"ui grid manage-body\">\n      <div class=\"three column row\">\n        <div class=\"column\" *ngFor=\"let data of surveyList | async\">\n          <div class=\"ui segment\">\n            <h3>{{data.survey_name}}</h3>\n            <b>คำอธิบาย&nbsp;:&nbsp;</b>{{data.description}}\n            <br><br>\n            <div class=\"ui small basic icon buttons float-right\">\n              <button class=\"ui button\"><i class=\"edit outline icon\" (click)=\"gotoEditSurvey(data)\"></i></button>\n              <button class=\"ui button\" data-toggle=\"modal\" data-target=\"#deleteSurvey\" (click)=\"setData(data)\"><i class=\"trash alternate outline icon\"></i></button>\n              <button class=\"ui button\" data-toggle=\"modal\" data-target=\"#checkStudent\" *ngIf=\"data.target == 'บัณฑิต'\" (click)=\"setCheckStudentData(data)\"><i class=\"user outline icon\"></i></button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- delete -->\n<div class=\"modal fade\" id=\"deleteSurvey\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h3 class=\"modal-title\" id=\"exampleModalLabel\">ลบแบบสอบถาม</h3>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <b>ต้องการลบ&nbsp;:&nbsp;</b>{{s_name}}&nbsp;?\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"deleteData()\">ลบ</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- check student -->\n<div class=\"modal fade\" id=\"checkStudent\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h3 class=\"modal-title\" id=\"exampleModalLabel\">ตรวจสอบสถานะการทำแบบสอบถามของบัณฑิต</h3>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <b>เลือกปีการศึกษา</b><br>\n        <select class=\"ui selection dropdown\" [(ngModel)]=\"yearSelected\" (ngModelChange)=\"checkStudentData($event)\">\n          <option *ngFor=\"let data of studentYear\" [ngValue]=\"data\">{{data}}</option>\n        </select>\n        <table class=\"ui fixed single line celled table\">\n          <thead>\n            <tr><th>รหัสนักศึกษา</th>\n            <th>ชื่อ</th>\n            <th>นามสกุล</th>\n            <th>สถานะ</th>\n          </tr></thead>\n          <tbody>\n            <tr *ngFor=\"let data of checkStudentTemp\">\n              <td>{{data.key}}</td>\n              <td>{{data.student_firstname}}</td>\n              <td>{{data.student_lastname}}</td>\n              <td *ngIf=\"data.status == 'yes'\"><i class=\"green check icon\"></i></td>\n              <td *ngIf=\"data.status == 'no'\"></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"clearData()\">ปิด</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/manage-survey/manage-survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ManageSurveyComponent = /** @class */ (function () {
    function ManageSurveyComponent(db, router, firebaseService) {
        this.db = db;
        this.router = router;
        this.firebaseService = firebaseService;
        this.basePath = "/survey";
        this.questionTemp = [];
        this.choiceTemp = [];
        // check student
        this.checkStudentTemp = [];
        this.doSurveyTemp = [];
        this.studentYear = [];
        this.studentKeyTemp = [];
    }
    ManageSurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.surveyList = this.firebaseService.getList(this.basePath);
        this.questionList = this.firebaseService.getList('/question');
        this.choiceList = this.firebaseService.getList('/choice');
        this.studentList = this.firebaseService.getList('/student');
        this.doSurveyList = this.firebaseService.getList('/do_survey');
        this.questionList.subscribe(function (data) {
            data.forEach(function (tmp) {
                _this.questionTemp.push(tmp);
            });
        });
        this.choiceList.subscribe(function (data) {
            data.forEach(function (tmp) {
                _this.choiceTemp.push(tmp);
            });
        });
        this.studentList.subscribe(function (data) {
            data.forEach(function (tmp) {
                _this.studentKeyTemp.push(tmp.key);
            });
        });
        this.doSurveyList.subscribe(function (data) {
            data.forEach(function (tmp) {
                var x = tmp.target_id;
                if (_this.studentKeyTemp.find(function (item) { return item == x; })) {
                    var y = x.toString();
                    var year_1 = '25' + y.substring(0, 2);
                    if (_this.studentYear.find(function (item) { return item == year_1; })) {
                    }
                    else {
                        _this.studentYear.push(year_1);
                    }
                }
            });
            console.log(_this.studentYear);
        });
    };
    ManageSurveyComponent.prototype.setData = function (data) {
        console.log(data);
        this.s_name = data.survey_name;
        this.s_key = data.key;
        console.log("name=" + this.s_key);
    };
    ManageSurveyComponent.prototype.setCheckStudentData = function (selectedData) {
        this.selectedSurvey = selectedData.key;
        console.log(this.selectedSurvey);
    };
    ManageSurveyComponent.prototype.checkStudentData = function (newValue) {
        var _this = this;
        console.log(this.yearSelected);
        this.doSurveyList.subscribe(function (data) {
            _this.checkStudentTemp = [];
            _this.doSurveyTemp = [];
            data.forEach(function (tmp) {
                if (tmp.survey_id == _this.selectedSurvey) {
                    _this.doSurveyTemp.push(tmp);
                }
            });
            // console.log(this.doSurveyTemp);
            _this.studentList.subscribe(function (data) {
                data.forEach(function (tmp) {
                    var x = tmp.key;
                    var y = x.toString();
                    var year = '25' + y.substring(0, 2);
                    if (year == _this.yearSelected) {
                        if (_this.doSurveyTemp.find(function (item) { return item.target_id == tmp.key; })) {
                            var student = {
                                key: tmp.key,
                                student_firstname: tmp.student_firstname,
                                student_lastname: tmp.student_lastname,
                                status: 'yes'
                            };
                            _this.checkStudentTemp.push(student);
                        }
                        else {
                            var student = {
                                key: tmp.key,
                                student_firstname: tmp.student_firstname,
                                student_lastname: tmp.student_lastname,
                                status: 'no'
                            };
                            _this.checkStudentTemp.push(student);
                        }
                    }
                });
                // console.log(this.checkStudentTemp);
            });
        });
    };
    ManageSurveyComponent.prototype.deleteData = function () {
        console.log(this.s_key);
        var survey = {
            key: this.s_key
        };
        this.firebaseService.delData(survey, this.basePath);
        for (var i = 0; i < this.questionTemp.length; i++) {
            if (this.questionTemp[i].survey_id == this.s_key) {
                console.log("survey_id" + this.questionTemp[i].key);
                for (var j = 0; j < this.choiceTemp.length; j++) {
                    if (this.choiceTemp[j].question_id == this.questionTemp[i].key) {
                        var choice = {
                            key: this.choiceTemp[j].key
                        };
                        this.firebaseService.delData(choice, '/choice');
                    }
                }
                var question = {
                    key: this.questionTemp[i].key
                };
                this.firebaseService.delData(question, '/question');
            }
        }
    };
    ManageSurveyComponent.prototype.gotoEditSurvey = function (data) {
        localStorage.setItem('survey_key', data.key);
        this.router.navigate(['/edit-survey']);
    };
    ManageSurveyComponent.prototype.clearData = function () {
        this.doSurveyTemp = [];
        this.checkStudentTemp = [];
        this.yearSelected = '';
    };
    ManageSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage-survey',
            template: __webpack_require__("../../../../../src/app/manage-survey/manage-survey.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-survey/manage-survey.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */]])
    ], ManageSurveyComponent);
    return ManageSurveyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-user-header/manage-user-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-user-header/manage-user-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\">\n  <div class=\"twenty wide column\">\n    <div class=\"ui vertical fluid tabular menu\">\n      <a class=\"item\" [routerLink]=\"'/manage-graduates'\" routerLinkActive=\"active\">\n        จัดการข้อมูลบัณฑิต\n      </a>\n      <a class=\"item\" [routerLink]=\"'/manage-company'\" routerLinkActive=\"active\">\n        จัดการข้อมูลผู้ประกอบการ\n      </a>\n      <a class=\"item\" [routerLink]=\"'/manage-admin'\" routerLinkActive=\"active\">\n        จัดการข้อมูลผู้ดูแลระบบ\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/manage-user-header/manage-user-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageUserHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageUserHeaderComponent = /** @class */ (function () {
    function ManageUserHeaderComponent() {
    }
    ManageUserHeaderComponent.prototype.ngOnInit = function () {
    };
    ManageUserHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage-user-header',
            template: __webpack_require__("../../../../../src/app/manage-user-header/manage-user-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-user-header/manage-user-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManageUserHeaderComponent);
    return ManageUserHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-user/manage-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-user/manage-user.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar></app-header-bar>\n<div class=\"ui grid\">\n  <div class=\"four wide column\">\n    <app-manage-user-header></app-manage-user-header>\n  </div>\n  <div class=\"twelve wide column\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/manage-user/manage-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageUserComponent = /** @class */ (function () {
    function ManageUserComponent() {
    }
    ManageUserComponent.prototype.ngOnInit = function () {
    };
    ManageUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage-user',
            template: __webpack_require__("../../../../../src/app/manage-user/manage-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-user/manage-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManageUserComponent);
    return ManageUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/report-bar/report-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report-bar/report-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<select class=\"ui selection dropdown\">\n  <option class=\"item\" data-value=\"1\">\n    รายงานสรุปกระบวนวิชาที่เป็นประโยชน์ต่อการทำงาน\n  </option>\n  <option class=\"item\" data-value=\"2\">\n        รายงานสรุปกระบวนวิชาที่เป็นประโยชน์ต่อการศึกษาต่อ\n      </option>\n      <option class=\"item\" data-value=\"3\">\n        รายงานสรุปกระบวนวิชาที่เป็นประโยชน์ต่อชีวิตประจำวัน\n      </option>\n      <option class=\"item\" data-value=\"4\">\n        รายงานสรุปสถิติการได้งาน\n      </option>\n      <option class=\"item\" data-value=\"5\">\n        รายงานสรุปสถิติบัณฑิตที่ได้งานทำตรงสาย\n      </option>\n      <option class=\"item\" data-value=\"6\">\n        รายงานสรุปสถิติบัณฑิตที่ได้งานทำไม่ตรงสาย\n      </option>\n      <option class=\"item\" data-value=\"7\">\n        รายงานสรุปสถิติบัณฑิตที่ศึกษาต่อ\n      </option>\n      <option class=\"item\" data-value=\"8\">\n        รายงานสรุปสถิติบัณฑิตที่ประกอบอาชีพอิสระ\n      </option>\n      <option class=\"item\" data-value=\"9\">\n        รายงานสรุปสถานที่ทำงาน มหาลัยวิทยาลัยและสาขาที่ศึกษาต่อ หรือชื่อและประเภทธุรกิจ\n      </option>\n      <option class=\"item\" data-value=\"10\">\n        รายงานสรุปสถิติบัณฑิตที่กาลังหางานทำ\n      </option>\n      <option class=\"item\" data-value=\"11\">\n        รายงานสรุปสถิติบัณฑิตที่กาลังเตรียมตัวศึกษาต่อ\n      </option>\n      <option class=\"item\" data-value=\"12\">\n        รายงานสรุปความพึงพอใจของบัณฑิตต่อหลักสูตรวิทยาศาสตรบัณฑิต\n      </option>\n      <option class=\"item\" data-value=\"13\">\n        รายงานสรุปผลความพึงพอใจของนายจ้างหรือผู้บังคับบัญชาต่อบัณฑิต\n      </option>\n      <option class=\"item\" data-value=\"14\">\n        รายงานสรุปคุณลักษณะที่พึงประสงค์ของบัณฑิต\n      </option>\n</select>"

/***/ }),

/***/ "../../../../../src/app/report-bar/report-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportBarComponent = /** @class */ (function () {
    function ReportBarComponent() {
    }
    ReportBarComponent.prototype.ngOnInit = function () {
    };
    ReportBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-report-bar',
            template: __webpack_require__("../../../../../src/app/report-bar/report-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/report-bar/report-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportBarComponent);
    return ReportBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reports/company-report/company-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reports/company-report/company-report.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar></app-header-bar>\n<div class=\"container\">\n  <div id=\"content\">\n    <br>\n    <div class=\"ui segment\">\n      <br>\n      <h1 class=\"ui center aligned header\">รายงานสำหรับแบบสำรวจความพึงพอใจของนายจ้างหรือผู้บังคับบัญชาต่อบัญฑิต คณะวิทยาศาสตร์ มหาวิทยาลัยเชียงใหม่ สาขาวิทยาการคอมพิวเตอร์</h1>\n      <h1 class=\"ui center aligned header\" *ngIf=\"showYear\">{{yearTypeName}}&nbsp;&nbsp;{{yearValue}}</h1>\n      <h1 class=\"ui center aligned header\" *ngIf=\"showAll\">สรุปรวมทั้งหมด</h1>\n      <br>\n      <h2>รายงานสรุปผลความพึงพอใจของนายจ้างหรือผู้บังคับบัญชาต่อบัณฑิต</h2>\n      <div class=\"ui fitted divider\"></div>\n      <br>\n      <br>\n      <p-chart type=\"bar\" [data]=\"data\"></p-chart>\n      <br>\n      <br>\n      <h2>รายงานสรุปคุณลักษณะที่พึงประสงค์ของบัณฑิต</h2>\n      <div class=\"ui fitted divider\"></div>\n      <div class=\"ui bulleted list\">\n        <div class=\"item\" *ngFor=\"let data of traitTemp\">{{data.answer}}</div>\n      </div>\n      <br>\n      <br>\n      <button class=\"ui button right\" (click)=\"GeneratePDF()\">ดาวน์โหลดเป็น PDF</button>\n      <button class=\"ui button\" (click)=\"back()\">กลับ</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/reports/company-report/company-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_html2canvas__ = __webpack_require__("../../../../html2canvas/dist/npm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_html2canvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_html2canvas__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CompanyReportComponent = /** @class */ (function () {
    function CompanyReportComponent(db, router, firebaseService) {
        this.db = db;
        this.router = router;
        this.firebaseService = firebaseService;
        this.traitTemp = [];
        this.doSurveyTemp = [];
        this.a = 0;
        this.b = 0;
        this.c = 0;
        this.d = 0;
        this.e = 0;
        this.f = 0;
    }
    CompanyReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.yearType = localStorage.getItem("yearType");
        this.yearValue = localStorage.getItem("year");
        if (this.yearType == 'ดูรายงานตามปีที่กรอก') {
            this.yearTypeName = 'ประจำปี';
            this.showYear = true;
            this.showAll = false;
        }
        else {
            this.showYear = false;
            this.showAll = true;
        }
        this.answerList = this.firebaseService.getList('/answer');
        this.doSurveyList = this.firebaseService.getList('/do_survey');
        this.doSurveyList.subscribe(function (data) {
            data.forEach(function (tmp) {
                if (tmp.survey_id == 3) {
                    if (_this.yearType == "ดูรายงานตามปีที่กรอก") {
                        _this.doSurveyDate = tmp.date;
                        var x = _this.doSurveyDate.toString();
                        var year = parseInt(x.substring(6, 10)) + 543;
                        if (year == _this.yearValue) {
                            _this.doSurveyTemp.push(tmp);
                        }
                    }
                    else if (_this.yearType == "ดูทั้งหมด") {
                        _this.doSurveyTemp.push(tmp);
                    }
                }
            });
            console.log(_this.doSurveyTemp);
        });
        this.answerList.subscribe(function (data) {
            data.forEach(function (tmp) {
                if (_this.doSurveyTemp.find(function (item) { return item.key == tmp.do_survey_id; })) {
                    if (tmp.question_id == '70') {
                        _this.traitTemp.push(tmp);
                    }
                    if (tmp.question_id == '38' || tmp.question_id == '39' || tmp.question_id == '40' || tmp.question_id == '41') {
                        _this.a = _this.a + parseInt(tmp.answer);
                    }
                    else if (tmp.question_id == '43' || tmp.question_id == '44' || tmp.question_id == '45' || tmp.question_id == '46') {
                        _this.b = _this.b + parseInt(tmp.answer);
                    }
                    else if (tmp.question_id == '48' || tmp.question_id == '49' || tmp.question_id == '50') {
                        _this.c = _this.c + parseInt(tmp.answer);
                    }
                    else if (tmp.question_id == '52' || tmp.question_id == '53' || tmp.question_id == '54' || tmp.question_id == '55' || tmp.question_id == '56') {
                        _this.d = _this.d + parseInt(tmp.answer);
                    }
                    else if (tmp.question_id == '58' || tmp.question_id == '59' || tmp.question_id == '60') {
                        _this.e = _this.e + parseInt(tmp.answer);
                    }
                    else if (tmp.question_id == '62' || tmp.question_id == '63') {
                        _this.f = _this.f + parseInt(tmp.answer);
                    }
                }
            });
            _this.data = {
                labels: ['ด้านคุณธรรมจริยธรรม', 'ด้านความรู้', 'ด้านทักษะทางปัญญา', 'ด้านความสัมพันธ์ระหว่างบุคคล', 'ด้านทักษะการวิเคราะห์เชิงตัวเลข', 'ด้านวิชาชีพ'],
                datasets: [
                    {
                        label: 'ความพึงพอใจของนายจ้าง',
                        backgroundColor: '#42A5F5',
                        borderColor: '#1E88E5',
                        data: [_this.a, _this.b, _this.c, _this.d, _this.e, _this.f]
                    },
                    {
                        label: '',
                        backgroundColor: '#9CCC65',
                        borderColor: '#7CB342',
                        data: [0, 0, 0, 0, 0, 0]
                    }
                ]
            };
        });
    };
    CompanyReportComponent.prototype.GeneratePDF = function () {
        __WEBPACK_IMPORTED_MODULE_4_html2canvas__(document.getElementById('content')).then(function (canvas) {
            document.body.appendChild(canvas);
            var pdf = new jsPDF('p', 'pt', 'a4');
            pdf.addHTML(canvas, function () {
                pdf.save('survey_report_for_company.pdf');
            });
        });
        // window.location.reload();
    };
    CompanyReportComponent.prototype.back = function () {
        this.router.navigate(['/reports']);
    };
    CompanyReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company-report',
            template: __webpack_require__("../../../../../src/app/reports/company-report/company-report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reports/company-report/company-report.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */]])
    ], CompanyReportComponent);
    return CompanyReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reports/reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    margin-top: 20px;\r\n    margin-left: 100px;\r\n    margin-left: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar></app-header-bar>\n<div class=\"container\">\n  <div class=\"ui segment\">\n    <div class=\"manage-body\">\n      <h2>เลือกดูรายงาน</h2>\n      <div class=\"ui clearing divider\"></div>\n      <br>\n    </div>\n    <div class=\"ui equal width grid\">\n      <div class=\"column\">\n        <div class=\"ui segment\">\n          <h3>รายงานสำหรับแบบสอบถามความคิดเห็นของบัณฑิตต่อคุณภาพหลักสูตร</h3>\n          <br>\n          <br>\n          <!-- <button class=\"fluid ui green button\" [routerLink]=\"'/subject-report'\">ดูรายงาน</button> -->\n          <button class=\"fluid ui green button\" (click)=\"setData('1')\" data-toggle=\"modal\" data-target=\"#selectYearType\">ดูรายงาน</button>\n          <button class=\"fluid ui purple button\" (click)=\"setData('1')\" data-toggle=\"modal\" data-target=\"#selectDownloadType\">ดาวน์โหลดคำตอบ</button>\n        </div>\n      </div>\n      <div class=\"column\">\n        <div class=\"ui segment\">\n          <h3>รายงานสำหรับแบบสอบถามภาวะการมีงานทำ การศึกษาต่อ หรือประกอบอาชีพอิสระ ของบัณฑิตภาควิชาวิทยาการคอมพิวเตอร์</h3>\n          <br>\n          <br>\n          <button class=\"fluid ui green button\" (click)=\"setData('2')\" data-toggle=\"modal\" data-target=\"#selectYearType\">ดูรายงาน</button>\n          <button class=\"fluid ui purple button\" (click)=\"setData('2')\" data-toggle=\"modal\" data-target=\"#selectDownloadType\">ดาวน์โหลดคำตอบ</button>\n        </div>\n      </div>\n      <div class=\"column\">\n        <div class=\"ui segment\">\n          <h3>รายงานสำหรับแบบสำรวจความพึงพอใจของนายจ้างหรือผู้บังคับบัญชาต่อบัญฑิต คณะวิทยาศาสตร์ มหาวิทยาลัยเชียงใหม่ สาขาวิทยาการคอมพิวเตอร์</h3>\n          <br>\n          <br>\n          <button class=\"fluid ui green button\" (click)=\"setData('3')\" data-toggle=\"modal\" data-target=\"#selectYearType\">ดูรายงาน</button>\n          <button class=\"fluid ui purple button\" (click)=\"setData('3')\" data-toggle=\"modal\" data-target=\"#selectDownloadType\">ดาวน์โหลดคำตอบ</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- select report year type -->\n<div class=\"modal fade\" id=\"selectYearType\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h3 class=\"modal-title\" id=\"exampleModalLabel\">เลือกปีการศึกษา/ปีที่กรอก</h3>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngIf=\"surveyKey != 3\">\n          <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"radioValue\" *ngFor=\"let data of yearType1\">\n            <mat-radio-button class=\"example-radio-button\" [value]=\"data\" (click)=\"radioCheckValue(data)\">\n              {{data}}&nbsp;&nbsp;&nbsp;&nbsp;\n            </mat-radio-button>\n          </mat-radio-group>\n        </div>\n        <div *ngIf=\"surveyKey == 3\">\n            <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"radioValue\" *ngFor=\"let data of yearType2\">\n              <mat-radio-button class=\"example-radio-button\" [value]=\"data\" (click)=\"radioCheckValue(data)\">\n                {{data}}&nbsp;&nbsp;&nbsp;&nbsp;\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n        <div *ngIf=\"studentIdDropDown\">\n          <br>\n          <b>เลือกปีการศึกษา</b>\n          <br>\n          <select class=\"ui selection dropdown\" [(ngModel)]=\"selectedYear\">\n            <option *ngFor=\"let studentId of studentIdTemp\" [ngValue]=\"studentId\">{{studentId}}</option>\n          </select>\n        </div>\n        <div *ngIf=\"yearDropDown\">\n          <br>\n          <b>เลือกปีที่กรอก</b>\n          <br>\n          <select class=\"ui selection dropdown\" [(ngModel)]=\"selectedYear\">\n            <option *ngFor=\"let year of yeartemp\" [ngValue]=\"year\">{{year}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"clearData()\">ยกเลิก</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"goToReport()\">ดูรายงาน</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- select download year type -->\n<div class=\"modal fade\" id=\"selectDownloadType\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h3 class=\"modal-title\" id=\"exampleModalLabel\">เลือกปีการศึกษา/ปีที่กรอก</h3>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngIf=\"surveyKey != 3\">\n          <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"radioValue\" *ngFor=\"let data of yearType1\">\n            <mat-radio-button class=\"example-radio-button\" [value]=\"data\" (click)=\"radioCheckValue(data)\">\n              {{data}}&nbsp;&nbsp;&nbsp;&nbsp;\n            </mat-radio-button>\n          </mat-radio-group>\n        </div>\n        <div *ngIf=\"surveyKey == 3\">\n            <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"radioValue\" *ngFor=\"let data of yearType2\">\n              <mat-radio-button class=\"example-radio-button\" [value]=\"data\" (click)=\"radioCheckValue(data)\">\n                {{data}}&nbsp;&nbsp;&nbsp;&nbsp;\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n        <div *ngIf=\"studentIdDropDown\">\n          <br>\n          <b>เลือกปีการศึกษา</b>\n          <br>\n          <select class=\"ui selection dropdown\" [(ngModel)]=\"selectedYear\">\n            <option *ngFor=\"let studentId of studentIdTemp\" [ngValue]=\"studentId\">{{studentId}}</option>\n          </select>\n        </div>\n        <div *ngIf=\"yearDropDown\">\n          <br>\n          <b>เลือกปีที่กรอก</b>\n          <br>\n          <select class=\"ui selection dropdown\" [(ngModel)]=\"selectedYear\">\n            <option *ngFor=\"let year of yeartemp\" [ngValue]=\"year\">{{year}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"clearData()\">ยกเลิก</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"downloadAnswer()\">ดาวน์โหลดคำตอบ</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_excel_service__ = __webpack_require__("../../../../../src/app/service/excel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(db, router, firebaseService, excelService) {
        this.db = db;
        this.router = router;
        this.firebaseService = firebaseService;
        this.excelService = excelService;
        this.subjectReport = [];
        this.questionTemp = [];
        this.answerTemp = [];
        this.answers = [];
        this.doSurveyTemp = [];
        this.yearType1 = ['ดูรายงานตามปีการศึกษา', 'ดูรายงานตามปีที่กรอก', 'ดูทั้งหมด'];
        this.yearType2 = ['ดูรายงานตามปีที่กรอก', 'ดูทั้งหมด'];
        this.studentTemp = [];
        this.yeartemp = [];
        this.studentIdTemp = [];
        this.subjectExcel = [];
        this.workExcel = [];
        this.companyExcel = [];
    }
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.answerList = this.firebaseService.getList('/answer');
        this.questionList = this.firebaseService.getList('/question');
        this.doSurveyList = this.firebaseService.getList('/do_survey');
        this.studentList = this.firebaseService.getList('/student');
        this.studentList.subscribe(function (data) {
            data.forEach(function (element) {
                _this.studentTemp.push(element.key);
            });
        });
        this.doSurveyList.subscribe(function (data) {
            data.forEach(function (tmp) {
                _this.doSurveyTemp.push(tmp);
                _this.targetId = tmp.target_id;
                if (_this.studentTemp.find(function (item) { return item == _this.targetId; })) {
                    var x = _this.targetId.toString();
                    console.log(x.substring(0, 2));
                    var studentYear_1 = '25' + x.substring(0, 2);
                    // if (this.yeartemp.find(item => item == year)) {
                    // } else {
                    //   this.yeartemp.push(year);
                    // }
                    if (_this.studentIdTemp.find(function (item) { return item == studentYear_1; })) {
                    }
                    else {
                        _this.studentIdTemp.push(studentYear_1);
                    }
                }
                _this.yearDoSurvey = tmp.date;
                var a = _this.yearDoSurvey.toString();
                var year = parseInt(a.substring(6, 10)) + 543;
                if (_this.yeartemp.find(function (item) { return item == year; })) {
                }
                else {
                    _this.yeartemp.push(year);
                }
            });
            console.log(_this.yeartemp);
        });
        this.questionList.subscribe(function (data) {
            data.forEach(function (element) {
                _this.questionTemp.push(element.question);
            });
            // console.log(this.questionTemp);
            // const subjectQuestion = {
            //   question1: this.questionTemp[0],
            //   question2: this.questionTemp[1],
            //   question3: this.questionTemp[2],
            //   question4: this.questionTemp[3],
            //   question5: this.questionTemp[4],
            //   question6: this.questionTemp[5],
            //   question7: this.questionTemp[6],
            //   question8: this.questionTemp[7],
            //   question9: this.questionTemp[8],
            //   question10: this.questionTemp[9],
            //   question11: this.questionTemp[10],
            //   question12: this.questionTemp[11],
            //   question13: this.questionTemp[12],
            //   question14: this.questionTemp[13],
            //   question15: this.questionTemp[14],
            //   question16: this.questionTemp[15],
            //   question17: this.questionTemp[16],
            //   question18: this.questionTemp[17],
            //   question19: this.questionTemp[18],
            //   question20: this.questionTemp[19],
            //   question21: this.questionTemp[20],
            //   date: 'วันที่ทำแบบสอบถาม'
            // }
            // this.subjectExcel.push(subjectQuestion);
            // const companyQuestion = {
            //   question1: this.questionTemp[29],
            //   question2: this.questionTemp[30],
            //   question3: this.questionTemp[31],
            //   question4: this.questionTemp[32],
            //   question5: this.questionTemp[33],
            //   question6: this.questionTemp[34],
            //   question7: this.questionTemp[37],
            //   question8: this.questionTemp[38],
            //   question9: this.questionTemp[39],
            //   question10: this.questionTemp[40],
            //   question11: this.questionTemp[42],
            //   question12: this.questionTemp[43],
            //   question13: this.questionTemp[44],
            //   question14: this.questionTemp[45],
            //   question15: this.questionTemp[47],
            //   question16: this.questionTemp[48],
            //   question17: this.questionTemp[49],
            //   question18: this.questionTemp[51],
            //   question19: this.questionTemp[52],
            //   question20: this.questionTemp[53],
            //   question21: this.questionTemp[54],
            //   question22: this.questionTemp[55],
            //   question23: this.questionTemp[57],
            //   question24: this.questionTemp[58],
            //   question25: this.questionTemp[59],
            //   question26: this.questionTemp[61],
            //   question27: this.questionTemp[62],
            //   question28: this.questionTemp[64],
            //   question29: this.questionTemp[65],
            //   question30: this.questionTemp[67],
            //   question31: this.questionTemp[68],
            //   question32: this.questionTemp[69],
            //   question33: this.questionTemp[70],
            //   date: 'วันที่ทำแบบสอบถาม'
            // }
            // this.companyExcel.push(companyQuestion);
        });
        // this.answerList.subscribe(data => {
        //   data.forEach(element => {
        //     this.answers.push(element);
        //   });
        // });
    };
    ReportsComponent.prototype.subjectExport = function () {
        var _this = this;
        this.doSurveyList.subscribe(function (data) {
            if (_this.radioValue == 'ดูรายงานตามปีการศึกษา') {
                var head = {
                    question1: 'แบบสอบถามความคิดเห็นของบัณฑิตต่อคุณภาพหลักสูตร ' + 'ปีการศึกษา ' + _this.selectedYear.toString()
                };
                _this.subjectExcel.push(head);
            }
            else if (_this.radioValue == 'ดูรายงานตามปีที่กรอก') {
                var head = {
                    question1: 'แบบสอบถามความคิดเห็นของบัณฑิตต่อคุณภาพหลักสูตร ' + 'ประจำปี ' + _this.selectedYear.toString()
                };
                _this.subjectExcel.push(head);
            }
            else {
                var head = {
                    question1: 'แบบสอบถามความคิดเห็นของบัณฑิตต่อคุณภาพหลักสูตร รวมทั้งหมด'
                };
                _this.subjectExcel.push(head);
            }
            // this.header = 'แบบสอบถามความคิดเห็นของบัณฑิตต่อคุณภาพหลักสูตร ' + 'ประจำปี ' + this.selectedYear.toString();
            var subjectQuestion = {
                question1: _this.questionTemp[0],
                question2: _this.questionTemp[1],
                question3: _this.questionTemp[2],
                question4: _this.questionTemp[3],
                question5: _this.questionTemp[4],
                question6: _this.questionTemp[5],
                question7: _this.questionTemp[6],
                question8: _this.questionTemp[7],
                question9: _this.questionTemp[8],
                question10: _this.questionTemp[9],
                question11: _this.questionTemp[10],
                question12: _this.questionTemp[11],
                question13: _this.questionTemp[12],
                question14: _this.questionTemp[13],
                question15: _this.questionTemp[14],
                question16: _this.questionTemp[15],
                question17: _this.questionTemp[16],
                question18: _this.questionTemp[17],
                question19: _this.questionTemp[18],
                question20: _this.questionTemp[19],
                question21: _this.questionTemp[20],
                date: 'วันที่ทำแบบสอบถาม'
            };
            _this.subjectExcel.push(subjectQuestion);
            data.forEach(function (tmp) {
                _this.answerTemp = [];
                if (_this.radioValue == 'ดูรายงานตามปีการศึกษา') {
                    var x = tmp.target_id.toString();
                    var year = '25' + x.substring(0, 2);
                    _this.yearTmp = year;
                }
                else if (_this.radioValue == 'ดูรายงานตามปีที่กรอก') {
                    var x = tmp.date.toString();
                    var year = parseInt(x.substring(6, 10)) + 543;
                    _this.yearTmp = year;
                }
                else {
                    _this.yearTmp = undefined;
                }
                console.log(_this.yearTmp);
                console.log(_this.selectedYear);
                if (_this.yearTmp == _this.selectedYear) {
                    for (var i = 0; i < _this.answers.length; i++) {
                        if (_this.answers[i].do_survey_id == tmp.key) {
                            if (tmp.survey_id == '1') {
                                _this.answerTemp.push(_this.answers[i].answer);
                            }
                        }
                    }
                    _this.answerTemp.push(tmp.date);
                    console.log(_this.answerTemp);
                    if (tmp.survey_id == '1') {
                        var answer = {
                            question1: _this.answerTemp[0],
                            question2: _this.answerTemp[1],
                            question3: _this.answerTemp[2],
                            question4: _this.answerTemp[3],
                            question5: _this.answerTemp[4],
                            question6: _this.answerTemp[5],
                            question7: _this.answerTemp[6],
                            question8: _this.answerTemp[7],
                            question9: _this.answerTemp[8],
                            question10: _this.answerTemp[9],
                            question11: _this.answerTemp[10],
                            question12: _this.answerTemp[11],
                            question13: _this.answerTemp[12],
                            question14: _this.answerTemp[13],
                            question15: _this.answerTemp[14],
                            question16: _this.answerTemp[15],
                            question17: _this.answerTemp[16],
                            question18: _this.answerTemp[17],
                            question19: _this.answerTemp[18],
                            question20: _this.answerTemp[19],
                            question21: _this.answerTemp[20],
                            date: _this.answerTemp[21]
                        };
                        // console.log(answer);
                        _this.subjectExcel.push(answer);
                    }
                }
            });
            console.log(_this.subjectExcel);
            _this.excelService.exportAsExcelFile(_this.subjectExcel, 'subject');
            _this.subjectExcel = [];
            _this.radioValue = '';
            _this.selectedYear = '';
            _this.studentIdDropDown = false;
            _this.yearDropDown = false;
        });
    };
    ReportsComponent.prototype.workExport = function () {
        var _this = this;
        this.doSurveyList.subscribe(function (data) {
            if (_this.radioValue == 'ดูรายงานตามปีการศึกษา') {
                var head = {
                    question1: 'แบบสอบถามความคิดเห็นของบัณฑิตต่อคุณภาพหลักสูตร ' + 'ปีการศึกษา ' + _this.selectedYear.toString()
                };
                _this.subjectExcel.push(head);
            }
            else if (_this.radioValue == 'ดูรายงานตามปีที่กรอก') {
                var head = {
                    question1: 'แบบสอบถามความคิดเห็นของบัณฑิตต่อคุณภาพหลักสูตร ' + 'ประจำปี ' + _this.selectedYear.toString()
                };
                _this.subjectExcel.push(head);
            }
            else {
                var head = {
                    question1: 'แบบสอบถามความคิดเห็นของบัณฑิตต่อคุณภาพหลักสูตร รวมทั้งหมด'
                };
                _this.subjectExcel.push(head);
            }
            var workQuestion = {
                question1: _this.questionTemp[21],
                question2: _this.questionTemp[22],
                question3: _this.questionTemp[23],
                question4: _this.questionTemp[24],
                question5: _this.questionTemp[25],
                question6: _this.questionTemp[26],
                question7: _this.questionTemp[27],
                date: 'วันที่ทำแบบสอบถาม'
            };
            _this.workExcel.push(workQuestion);
            data.forEach(function (tmp) {
                _this.answerTemp = [];
                if (_this.radioValue == 'ดูรายงานตามปีการศึกษา') {
                    var x = tmp.target_id.toString();
                    var year = '25' + x.substring(0, 2);
                    _this.yearTmp = year;
                }
                else if (_this.radioValue == 'ดูรายงานตามปีที่กรอก') {
                    var x = tmp.date.toString();
                    var year = parseInt(x.substring(6, 10)) + 543;
                    _this.yearTmp = year;
                }
                else {
                    _this.yearTmp = undefined;
                }
                if (_this.yearTmp == _this.selectedYear) {
                    for (var i = 0; i < _this.answers.length; i++) {
                        if (_this.answers[i].do_survey_id == tmp.key) {
                            if (tmp.survey_id == '2') {
                                _this.answerTemp.push(_this.answers[i].answer);
                            }
                        }
                    }
                    _this.answerTemp.push(tmp.date);
                    // for (let i = 0; i < this.answers.length; i++) {
                    //   if (this.answers[i].do_survey_id == tmp.key) {
                    //     if (tmp.survey_id == '2') {
                    //       this.answerTemp.push(this.answers[i].answer);
                    //     }
                    //   }
                    // }
                    // console.log(this.answerTemp);
                    if (tmp.survey_id == '2') {
                        var answer = {
                            question1: _this.answerTemp[0],
                            question2: _this.answerTemp[1],
                            question3: _this.answerTemp[2],
                            question4: _this.answerTemp[3],
                            question5: _this.answerTemp[4],
                            question6: _this.answerTemp[5],
                            question7: _this.answerTemp[6],
                            date: _this.answerTemp[7]
                        };
                        // console.log(answer);
                        _this.workExcel.push(answer);
                    }
                }
            });
            // console.log(this.subjectExcel);
            _this.excelService.exportAsExcelFile(_this.workExcel, 'work');
            _this.workExcel = [];
            _this.radioValue = '';
            _this.selectedYear = '';
            _this.studentIdDropDown = false;
            _this.yearDropDown = false;
        });
    };
    ReportsComponent.prototype.companyExport = function () {
        var _this = this;
        this.doSurveyList.subscribe(function (data) {
            if (_this.radioValue == 'ดูรายงานตามปีที่กรอก') {
                var head = {
                    question1: 'แบบสอบถามความคิดเห็นของบัณฑิตต่อคุณภาพหลักสูตร ' + 'ประจำปี ' + _this.selectedYear.toString()
                };
                _this.subjectExcel.push(head);
            }
            else {
                var head = {
                    question1: 'แบบสอบถามความคิดเห็นของบัณฑิตต่อคุณภาพหลักสูตร รวมทั้งหมด'
                };
                _this.subjectExcel.push(head);
            }
            var companyQuestion = {
                question1: _this.questionTemp[29],
                question2: _this.questionTemp[30],
                question3: _this.questionTemp[31],
                question4: _this.questionTemp[32],
                question5: _this.questionTemp[33],
                question6: _this.questionTemp[34],
                question7: _this.questionTemp[37],
                question8: _this.questionTemp[38],
                question9: _this.questionTemp[39],
                question10: _this.questionTemp[40],
                question11: _this.questionTemp[42],
                question12: _this.questionTemp[43],
                question13: _this.questionTemp[44],
                question14: _this.questionTemp[45],
                question15: _this.questionTemp[47],
                question16: _this.questionTemp[48],
                question17: _this.questionTemp[49],
                question18: _this.questionTemp[51],
                question19: _this.questionTemp[52],
                question20: _this.questionTemp[53],
                question21: _this.questionTemp[54],
                question22: _this.questionTemp[55],
                question23: _this.questionTemp[57],
                question24: _this.questionTemp[58],
                question25: _this.questionTemp[59],
                question26: _this.questionTemp[61],
                question27: _this.questionTemp[62],
                question28: _this.questionTemp[64],
                question29: _this.questionTemp[65],
                question30: _this.questionTemp[67],
                question31: _this.questionTemp[68],
                question32: _this.questionTemp[69],
                question33: _this.questionTemp[70],
                date: 'วันที่ทำแบบสอบถาม'
            };
            _this.companyExcel.push(companyQuestion);
            data.forEach(function (tmp) {
                _this.answerTemp = [];
                console.log(_this.selectedYear);
                if (_this.radioValue == 'ดูรายงานตามปีที่กรอก') {
                    var x = tmp.date.toString();
                    var year = parseInt(x.substring(6, 10)) + 543;
                    _this.yearTmp = year;
                }
                else {
                    _this.yearTmp = undefined;
                }
                if (_this.yearTmp == _this.selectedYear) {
                    for (var i = 0; i < _this.answers.length; i++) {
                        if (_this.answers[i].do_survey_id == tmp.key) {
                            if (tmp.survey_id == '3') {
                                _this.answerTemp.push(_this.answers[i].answer);
                            }
                        }
                    }
                    _this.answerTemp.push(tmp.date);
                    // for (let i = 0; i < this.answers.length; i++) {
                    //   if (this.answers[i].do_survey_id == tmp.key) {
                    //     if (tmp.survey_id == '3') {
                    //       this.answerTemp.push(this.answers[i].answer);
                    //     }
                    //   }
                    // }
                    console.log(_this.answerTemp);
                    if (tmp.survey_id == '3') {
                        var answer = {
                            question1: _this.answerTemp[1],
                            question2: _this.answerTemp[2],
                            question3: _this.answerTemp[3],
                            question4: _this.answerTemp[4],
                            question5: _this.answerTemp[5],
                            question6: _this.answerTemp[6],
                            question7: _this.answerTemp[9],
                            question8: _this.answerTemp[10],
                            question9: _this.answerTemp[11],
                            question10: _this.answerTemp[12],
                            question11: _this.answerTemp[14],
                            question12: _this.answerTemp[15],
                            question13: _this.answerTemp[16],
                            question14: _this.answerTemp[17],
                            question15: _this.answerTemp[19],
                            question16: _this.answerTemp[20],
                            question17: _this.answerTemp[21],
                            question18: _this.answerTemp[23],
                            question19: _this.answerTemp[24],
                            question20: _this.answerTemp[25],
                            question21: _this.answerTemp[26],
                            question22: _this.answerTemp[27],
                            question23: _this.answerTemp[29],
                            question24: _this.answerTemp[30],
                            question25: _this.answerTemp[31],
                            question26: _this.answerTemp[33],
                            question27: _this.answerTemp[34],
                            question28: _this.answerTemp[36],
                            question29: _this.answerTemp[37],
                            question30: _this.answerTemp[39],
                            question31: _this.answerTemp[40],
                            question32: _this.answerTemp[41],
                            question33: _this.answerTemp[42],
                            date: _this.answerTemp[43]
                        };
                        // console.log(answer);
                        _this.companyExcel.push(answer);
                    }
                }
            });
            // console.log(this.subjectExcel);
            _this.excelService.exportAsExcelFile(_this.companyExcel, 'company');
            _this.companyExcel = [];
            _this.radioValue = '';
            _this.selectedYear = '';
            _this.studentIdDropDown = false;
            _this.yearDropDown = false;
        });
    };
    ReportsComponent.prototype.setData = function (survey_key) {
        console.log(survey_key);
        this.surveyKey = survey_key;
    };
    ReportsComponent.prototype.radioCheckValue = function (newValue) {
        console.log(newValue);
        if (newValue == 'ดูรายงานตามปีการศึกษา') {
            this.studentIdDropDown = true;
            this.yearDropDown = false;
        }
        else if (newValue == 'ดูทั้งหมด') {
            this.studentIdDropDown = false;
            this.yearDropDown = false;
        }
        else {
            this.studentIdDropDown = false;
            this.yearDropDown = true;
        }
    };
    ReportsComponent.prototype.goToReport = function () {
        console.log(this.radioValue);
        console.log(this.selectedYear);
        localStorage.setItem('yearType', this.radioValue);
        localStorage.setItem('year', this.selectedYear);
        if (this.surveyKey == '1') {
            this.router.navigate(['/subject-report']);
        }
        else if (this.surveyKey == '2') {
            this.router.navigate(['/work-report']);
        }
        else {
            this.router.navigate(['/company-report']);
        }
    };
    ReportsComponent.prototype.clearData = function () {
        this.surveyKey = '';
        this.radioValue = '';
        this.selectedYear = '';
        this.studentIdDropDown = false;
        this.yearDropDown = false;
    };
    ReportsComponent.prototype.downloadAnswer = function () {
        var _this = this;
        this.answerList.subscribe(function (data) {
            _this.answers = [];
            data.forEach(function (element) {
                if (_this.doSurveyTemp.find(function (item) { return item.key == element.do_survey_id; })) {
                    var index = _this.doSurveyTemp.findIndex(function (item) { return item.key == element.do_survey_id; });
                    if (_this.doSurveyTemp[index]['survey_id'] == _this.surveyKey) {
                        if (_this.radioValue == 'ดูรายงานตามปีการศึกษา') {
                            var x = _this.doSurveyTemp[index]['target_id'].toString();
                            var year = '25' + x.substring(0, 2);
                            if (year == _this.selectedYear) {
                                _this.answers.push(element);
                            }
                        }
                        else if (_this.radioValue == 'ดูรายงานตามปีที่กรอก') {
                            var x = _this.doSurveyTemp[index]['date'].toString();
                            var year = parseInt(x.substring(6, 10)) + 543;
                            if (year == _this.selectedYear) {
                                _this.answers.push(element);
                            }
                        }
                        else {
                            _this.answers.push(element);
                        }
                    }
                }
            });
            console.log(_this.answers);
            if (_this.surveyKey == '1') {
                _this.subjectExport();
            }
            else if (_this.surveyKey == '2') {
                _this.workExport();
            }
            else {
                _this.companyExport();
            }
        });
    };
    ReportsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__("../../../../../src/app/reports/reports.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reports/reports.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_4__service_excel_service__["a" /* ExcelService */]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reports/subject-report/subject-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reports/subject-report/subject-report.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar></app-header-bar>\n<div class=\"container\">\n  <div id=content>\n    <div class=\"ui segment\">\n      <br>\n      <h1 class=\"ui center aligned header\">รายงานสำหรับแบบสอบถามความคิดเห็นของบัณฑิตต่อคุณภาพหลักสูตร</h1>\n      <h1 class=\"ui center aligned header\" *ngIf=\"showYear\">{{yearTypeName}}&nbsp;&nbsp;{{yearValue}}</h1>\n      <h1 class=\"ui center aligned header\" *ngIf=\"showAll\">สรุปรวมทั้งหมด</h1>\n      <br>\n      <h3>สรุปกระบวนวิชาที่เป็นประโยชน์ต่อการทำงาน</h3>\n      <div class=\"ui fitted divider\"></div>\n      <div class=\"ui bulleted list\" *ngFor=\"let data of workTemp\">\n        <div *ngFor=\"let subject of subjectList | async\">\n          <div class=\"item\" *ngIf=\"data.subject_id == subject.key\">{{data.subject_id}} {{subject.subject_name}}\n          </div>\n        </div>\n      </div>\n      <!-- <button class=\"ui button\" (click)=\"download()\">download</button> -->\n      <h3>สรุปกระบวนวิชาที่เป็นประโยชน์ต่อการศึกษาต่อ</h3>\n      <div class=\"ui fitted divider\"></div>\n      <div class=\"ui bulleted list\" *ngFor=\"let data of studyTemp\">\n        <div *ngFor=\"let subject of subjectList | async\">\n          <div class=\"item\" *ngIf=\"data.subject_id == subject.key\">{{data.subject_id}} {{subject.subject_name}}\n          </div>\n        </div>\n      </div>\n      <h3>สรุปกระบวนวิชาที่เป็นประโยชน์ต่อชีวิตประจำวัน</h3>\n      <div class=\"ui fitted divider\"></div>\n      <div class=\"ui bulleted list\" *ngFor=\"let data of dailyTemp\">\n        <div *ngFor=\"let subject of subjectList | async\">\n          <div class=\"item\" *ngIf=\"data.subject_id == subject.key\">{{data.subject_id}} {{subject.subject_name}}\n          </div>\n        </div>\n      </div>\n      <h3>สรุปสถิติการได้งาน</h3>\n      <div class=\"ui fitted divider\"></div>\n      <br>\n      <!-- <b>เลือกปีการศึกษา</b>\n      <br>\n      <select class=\"ui selection dropdown\" [(ngModel)]=\"selectedYear\" (ngModelChange)=\"onChange($event)\">\n        <option *ngFor=\"let year of yeartemp\" [ngValue]=\"year\">{{year}}</option>\n      </select>\n      <br>\n      <br> -->\n      <div>\n        <p-chart type=\"pie\" [data]=\"data\"></p-chart>\n        <h5>สรุปสถิติการได้งานของนักศึกษาปีการศึกษา&nbsp;{{this.selectedYear}}</h5>\n        <ul class=\"ui list\">\n          <li>ได้งานแล้ว&nbsp;:&nbsp;{{a}}&nbsp;คน&nbsp;&nbsp;&nbsp;คิดเป็น&nbsp;&nbsp;{{(a/allCount) | percent}}</li>\n          <li>ศึกษาต่อ&nbsp;:&nbsp;{{b}}&nbsp;คน&nbsp;&nbsp;&nbsp;คิดเป็น&nbsp;&nbsp;{{(b/allCount) | percent}}</li>\n          <li>กำลังหางานทำ&nbsp;:&nbsp;{{c}}&nbsp;คน&nbsp;&nbsp;&nbsp;คิดเป็น&nbsp;&nbsp;{{(c/allCount) | percent}}</li>\n          <li>เตรียมตัวศึกษาต่อ&nbsp;:&nbsp;{{d}}&nbsp;คน&nbsp;&nbsp;&nbsp;คิดเป็น&nbsp;&nbsp;{{(d/allCount) | percent}}</li>\n        </ul>\n      </div>\n      <br>\n      <br>\n      <button class=\"ui button\" (click)=\"GeneratePDF()\">ดาวน์โหลดเป็น PDF</button>\n      <button class=\"ui button\" (click)=\"back()\">กลับ</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/reports/subject-report/subject-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_html2canvas__ = __webpack_require__("../../../../html2canvas/dist/npm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_html2canvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_html2canvas__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var SubjectReportComponent = /** @class */ (function () {
    function SubjectReportComponent(db, router, firebaseService) {
        this.db = db;
        this.router = router;
        this.firebaseService = firebaseService;
        this.temp = '';
        this.yeartemp = [];
        this.targetId = '';
        this.doSurveyTemp = [];
        this.studentTemp = [];
        // count
        this.a = 0;
        this.b = 0;
        this.c = 0;
        this.d = 0;
        this.allCount = 0;
        this.workTemp = [];
        this.studyTemp = [];
        this.dailyTemp = [];
    }
    SubjectReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.yearType = localStorage.getItem("yearType");
        this.yearValue = localStorage.getItem("year");
        this.answerList = this.firebaseService.getList('/answer');
        this.subjectList = this.firebaseService.getList('/subject');
        this.doSurveyList = this.firebaseService.getList('/do_survey');
        this.studentList = this.firebaseService.getList('/student');
        if (this.yearType == 'ดูรายงานตามปีการศึกษา') {
            this.yearTypeName = 'ปีการศึกษา';
            this.showYear = true;
            this.showAll = false;
        }
        else if (this.yearType == 'ดูรายงานตามปีที่กรอก') {
            this.yearTypeName = 'ประจำปี';
            this.showYear = true;
            this.showAll = false;
        }
        else {
            this.showYear = false;
            this.showAll = true;
        }
        this.doSurveyList.subscribe(function (data) {
            data.forEach(function (tmp) {
                if (tmp.survey_id == 1) {
                    if (_this.yearType == 'ดูรายงานตามปีการศึกษา') {
                        _this.targetId = tmp.target_id;
                        var x = _this.targetId.toString();
                        var year = '25' + x.substring(0, 2);
                        if (year == _this.yearValue) {
                            _this.doSurveyTemp.push(tmp);
                        }
                    }
                    else if (_this.yearType == "ดูรายงานตามปีที่กรอก") {
                        _this.targetId = tmp.date;
                        var x = _this.targetId.toString();
                        var year = parseInt(x.substring(6, 10)) + 543;
                        if (year == _this.yearValue) {
                            _this.doSurveyTemp.push(tmp);
                        }
                    }
                    else if (_this.yearType == "ดูทั้งหมด") {
                        _this.doSurveyTemp.push(tmp);
                    }
                }
            });
            console.log(_this.doSurveyTemp);
        });
        this.studentList.subscribe(function (data) {
            data.forEach(function (element) {
                _this.studentTemp.push(element.key);
            });
        });
        this.answerList.subscribe(function (data) {
            data.forEach(function (tmp) {
                if (_this.doSurveyTemp.find(function (item) { return item.key == tmp.do_survey_id; })) {
                    //  work
                    if (tmp.question_id == '10') {
                        _this.temp = tmp.answer.substring(0, [6]);
                        if (_this.workTemp.find(function (item) { return item['subject_id'] == _this.temp; })) {
                            _this.index = _this.workTemp.findIndex(function (item) { return item['subject_id'] == _this.temp; });
                            _this.workTemp[_this.index]['count']++;
                        }
                        else {
                            var data_1 = {
                                subject_id: _this.temp,
                                count: 1
                            };
                            _this.workTemp.push(data_1);
                        }
                    }
                    // study
                    if (tmp.question_id == '11') {
                        _this.temp = tmp.answer.substring(0, [6]);
                        if (_this.studyTemp.find(function (item) { return item['subject_id'] == _this.temp; })) {
                            _this.index = _this.studyTemp.findIndex(function (item) { return item['subject_id'] == _this.temp; });
                            _this.studyTemp[_this.index]['count']++;
                        }
                        else {
                            var data_2 = {
                                subject_id: _this.temp,
                                count: 1
                            };
                            _this.studyTemp.push(data_2);
                        }
                    }
                    // daily
                    if (tmp.question_id == '12') {
                        _this.temp = tmp.answer.substring(0, [6]);
                        if (_this.dailyTemp.find(function (item) { return item['subject_id'] == _this.temp; })) {
                            _this.index = _this.dailyTemp.findIndex(function (item) { return item['subject_id'] == _this.temp; });
                            _this.dailyTemp[_this.index]['count']++;
                        }
                        else {
                            var data_3 = {
                                subject_id: _this.temp,
                                count: 1
                            };
                            _this.dailyTemp.push(data_3);
                        }
                    }
                    // graph
                    if (tmp.question_id == '6') {
                        if (_this.doSurveyTemp.find(function (item) { return item.key == tmp.do_survey_id; })) {
                            var index = _this.doSurveyTemp.findIndex(function (item) { return item.key == tmp.do_survey_id; });
                            if (_this.yearType == "ดูรายงานตามปีการศึกษา") {
                                _this.targetId = _this.doSurveyTemp[index].target_id;
                                var x = _this.targetId.toString();
                                var year = '25' + x.substring(0, 2);
                                _this.yearTmp = year;
                            }
                            else if (_this.yearType == "ดูรายงานตามปีที่กรอก") {
                                _this.targetId = _this.doSurveyTemp[index].date;
                                var x = _this.targetId.toString();
                                var year = parseInt(x.substring(6, 10)) + 543;
                                _this.yearTmp = year;
                            }
                            if (_this.doSurveyTemp[index].key == tmp.do_survey_id) {
                                if (_this.yearType != "ดูทั้งหมด") {
                                    if (_this.yearTmp == _this.yearValue) {
                                        if (tmp.answer == 'ได้งานแล้ว') {
                                            _this.a = _this.a + 1;
                                        }
                                        else if (tmp.answer == 'ศึกษาต่อ') {
                                            _this.b = _this.b + 1;
                                        }
                                        else if (tmp.answer == 'กำลังหางานทำ') {
                                            _this.c = _this.c + 1;
                                        }
                                        else {
                                            _this.d = _this.d + 1;
                                        }
                                    }
                                }
                                else if (_this.yearType == "ดูทั้งหมด") {
                                    if (tmp.answer == 'ได้งานแล้ว') {
                                        _this.a = _this.a + 1;
                                    }
                                    else if (tmp.answer == 'ศึกษาต่อ') {
                                        _this.b = _this.b + 1;
                                    }
                                    else if (tmp.answer == 'กำลังหางานทำ') {
                                        _this.c = _this.c + 1;
                                    }
                                    else {
                                        _this.d = _this.d + 1;
                                    }
                                }
                            }
                        }
                    }
                    _this.allCount = _this.a + _this.b + _this.c + _this.d;
                    _this.data = {
                        labels: ['ได้งานแล้ว', 'ศึกษาต่อ', 'กำลังหางานทำ', 'เตรียมตัวศึกษาต่อ'],
                        datasets: [
                            {
                                data: [_this.a, _this.b, _this.c, _this.d],
                                backgroundColor: [
                                    "#FF6384",
                                    "#36A2EB",
                                    "#FFCE56",
                                    "#66FF33"
                                ],
                                hoverBackgroundColor: [
                                    "#FF6384",
                                    "#36A2EB",
                                    "#FFCE56",
                                    "#66FF33"
                                ]
                            }
                        ]
                    };
                }
            });
            _this.workTemp.sort(function (a, b) {
                if (a['count'] < b['count'])
                    return 1;
                else if (a['count'] > b['count'])
                    return -1;
                else
                    return 0;
            });
            console.log(_this.workTemp);
            _this.studyTemp.sort(function (a, b) {
                if (a['count'] < b['count'])
                    return 1;
                else if (a['count'] > b['count'])
                    return -1;
                else
                    return 0;
            });
            console.log(_this.studyTemp);
            _this.dailyTemp.sort(function (a, b) {
                if (a['count'] < b['count'])
                    return 1;
                else if (a['count'] > b['count'])
                    return -1;
                else
                    return 0;
            });
            console.log(_this.dailyTemp);
        });
    };
    SubjectReportComponent.prototype.GeneratePDF = function () {
        __WEBPACK_IMPORTED_MODULE_4_html2canvas__(document.getElementById('content')).then(function (canvas) {
            document.body.appendChild(canvas);
            var pdf = new jsPDF('p', 'pt', 'a4');
            pdf.addHTML(canvas, function () {
                pdf.save('work_survey_report.pdf');
            });
            // window.location.reload();
        });
    };
    SubjectReportComponent.prototype.back = function () {
        this.workTemp = [];
        this.dailyTemp = [];
        this.studyTemp = [];
        this.router.navigate(['/reports']);
    };
    SubjectReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subject-report',
            template: __webpack_require__("../../../../../src/app/reports/subject-report/subject-report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reports/subject-report/subject-report.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */]])
    ], SubjectReportComponent);
    return SubjectReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reports/work-report/work-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    margin-top: 20px;\r\n    margin-left: 100px;\r\n    margin-left: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reports/work-report/work-report.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar></app-header-bar>\n<div class=\"container\">\n    <div id=\"content\">\n        <br>\n        <div class=\"ui segment\">\n            <br>\n            <h1 class=\"ui center aligned header\">รายงานสำหรับแบบสอบถามภาวะการมีงานทำ การศึกษาต่อ หรือประกอบอาชีพอิสระ ของบัณฑิตภาควิชาวิทยาการคอมพิวเตอร์</h1>\n            <h1 class=\"ui center aligned header\" *ngIf=\"showYear\">{{yearTypeName}}&nbsp;&nbsp;{{yearValue}}</h1>\n            <h1 class=\"ui center aligned header\" *ngIf=\"showAll\">สรุปรวมทั้งหมด</h1>\n            <br>\n            <h2>สรุปสถิติการมีงานทำ การศึกษาต่อ หรือประกอบอาชีพอิสระ</h2>\n            <div class=\"ui fitted divider\"></div>\n            <br>\n            <br>\n            <p-chart type=\"pie\" [data]=\"data\"></p-chart>\n            <br>\n            <br>\n            <ul class=\"ui list\">\n                <li>ได้งานแล้ว&nbsp;(ทำงานตรงสาย)&nbsp;:&nbsp;{{a}}&nbsp;คน&nbsp;&nbsp;&nbsp;คิดเป็น&nbsp;&nbsp;{{(a/allCount)\n                    | percent}}</li>\n                <li>ได้งานแล้ว&nbsp;(ทำงานไม่ตรงสาย)&nbsp;:&nbsp;{{b}}&nbsp;คน&nbsp;&nbsp;&nbsp;คิดเป็น&nbsp;&nbsp;{{(b/allCount)\n                    | percent}}</li>\n                <li>กำลังศึกษาต่อ&nbsp;:&nbsp;{{c}}&nbsp;คน&nbsp;&nbsp;&nbsp;คิดเป็น&nbsp;&nbsp;{{(c/allCount) | percent}}</li>\n                <li>ประกอบอาชีพอิสระ&nbsp;(เช่น&nbsp;ทำธุรกิจส่วนตัว)&nbsp;:&nbsp;{{d}}&nbsp;คน&nbsp;&nbsp;&nbsp;คิดเป็น&nbsp;&nbsp;{{(d/allCount)\n                    | percent}}</li>\n                <li>กำลังหางานทำ&nbsp;:&nbsp;{{e}}&nbsp;คน&nbsp;&nbsp;&nbsp;คิดเป็น&nbsp;&nbsp;{{(e/allCount) | percent}}</li>\n                <li>กำลังเตรียมตัวศึกษาต่อ&nbsp;:&nbsp;{{f}}&nbsp;คน&nbsp;&nbsp;&nbsp;คิดเป็น&nbsp;&nbsp;{{(f/allCount) | percent}}</li>\n            </ul>\n            <br>\n            <br>\n            <h2>สรุปสถานที่ทำงาน</h2>\n            <div class=\"ui fitted divider\"></div>\n            <ul class=\"ui list\">\n                <li *ngFor=\"let data of workplaceTemp;\">{{data.answer}}</li>\n            </ul>\n            <br>\n            <br>\n            <h2>สรุปชื่อสาขา และมหาวิทยาลัยที่ศึกษาต่อ </h2>\n            <div class=\"ui fitted divider\"></div>\n            <ul class=\"ui list\">\n                <li *ngFor=\"let data of uniTemp;\">{{data.answer}}</li>\n            </ul>\n            <br>\n            <br>\n            <h2>สรุปชื่อธุรกิจ หรือประเภทธุรกิจ </h2>\n            <div class=\"ui fitted divider\"></div>\n            <ul class=\"ui list\">\n                <li *ngFor=\"let data of jobTemp;\">{{data.answer}}</li>\n            </ul>\n            <br>\n            <br>\n\n            <button class=\"ui button\" (click)=\"GeneratePDF()\">ดาวน์โหลดเป็น PDF</button>\n            <button class=\"ui button\" (click)=\"back()\">กลับ</button>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/reports/work-report/work-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_html2canvas__ = __webpack_require__("../../../../html2canvas/dist/npm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_html2canvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_html2canvas__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var WorkReportComponent = /** @class */ (function () {
    function WorkReportComponent(db, router, firebaseService) {
        this.db = db;
        this.router = router;
        this.firebaseService = firebaseService;
        this.doSurveyTemp = [];
        this.graphTemp = [];
        this.workplaceTemp = [];
        this.uniTemp = [];
        this.jobTemp = [];
        // count
        this.a = 0;
        this.b = 0;
        this.c = 0;
        this.d = 0;
        this.e = 0;
        this.f = 0;
        this.allCount = 0;
    }
    WorkReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.yearType = localStorage.getItem("yearType");
        this.yearValue = localStorage.getItem("year");
        if (this.yearType == 'ดูรายงานตามปีการศึกษา') {
            this.yearTypeName = 'ปีการศึกษา';
            this.showYear = true;
            this.showAll = false;
        }
        else if (this.yearType == 'ดูรายงานตามปีที่กรอก') {
            this.yearTypeName = 'ประจำปี';
            this.showYear = true;
            this.showAll = false;
        }
        else {
            this.showYear = false;
            this.showAll = true;
        }
        this.answerList = this.firebaseService.getList('/answer');
        this.doSurveyList = this.firebaseService.getList('/do_survey');
        this.doSurveyList.subscribe(function (data) {
            data.forEach(function (tmp) {
                if (tmp.survey_id == 2) {
                    if (_this.yearType == 'ดูรายงานตามปีการศึกษา') {
                        _this.targetId = tmp.target_id;
                        var x = _this.targetId.toString();
                        var year = '25' + x.substring(0, 2);
                        if (year == _this.yearValue) {
                            _this.doSurveyTemp.push(tmp);
                        }
                    }
                    else if (_this.yearType == "ดูรายงานตามปีที่กรอก") {
                        _this.targetId = tmp.date;
                        var x = _this.targetId.toString();
                        var year = parseInt(x.substring(6, 10)) + 543;
                        if (year == _this.yearValue) {
                            _this.doSurveyTemp.push(tmp);
                        }
                    }
                    else if (_this.yearType == "ดูทั้งหมด") {
                        _this.doSurveyTemp.push(tmp);
                    }
                }
            });
            console.log(_this.doSurveyTemp);
        });
        this.answerList.subscribe(function (data) {
            data.forEach(function (tmp) {
                if (tmp.answer != '') {
                    if (_this.doSurveyTemp.find(function (item) { return item.key == tmp.do_survey_id; })) {
                        // console.log(tmp);
                        // graph
                        if (tmp.question_id == '25') {
                            _this.graphTemp.push(tmp.answer);
                        }
                        // work place
                        if (tmp.question_id == '26') {
                            if (_this.workplaceTemp.find(function (item) { return item['answer'] == tmp.answer; })) {
                                var index = _this.workplaceTemp.findIndex(function (item) { return item['answer'] == tmp.answer; });
                                _this.workplaceTemp[index]['count']++;
                            }
                            else {
                                var data_1 = {
                                    answer: tmp.answer,
                                    count: 1
                                };
                                _this.workplaceTemp.push(data_1);
                            }
                        }
                        // university
                        if (tmp.question_id == '27') {
                            if (_this.uniTemp.find(function (item) { return item['answer'] == tmp.answer; })) {
                                var index = _this.uniTemp.findIndex(function (item) { return item['answer'] == tmp.answer; });
                                _this.uniTemp[index]['count']++;
                            }
                            else {
                                var data_2 = {
                                    answer: tmp.answer,
                                    count: 1
                                };
                                _this.uniTemp.push(data_2);
                            }
                        }
                        // job
                        if (tmp.question_id == '28') {
                            if (_this.jobTemp.find(function (item) { return item['answer'] == tmp.answer; })) {
                                var index = _this.jobTemp.findIndex(function (item) { return item['answer'] == tmp.answer; });
                                _this.jobTemp[index]['count']++;
                            }
                            else {
                                var data_3 = {
                                    answer: tmp.answer,
                                    count: 1
                                };
                                _this.jobTemp.push(data_3);
                            }
                        }
                    }
                }
                _this.workplaceTemp.sort(function (a, b) {
                    if (a['count'] < b['count'])
                        return 1;
                    else if (a['count'] > b['count'])
                        return -1;
                    else
                        return 0;
                });
                // console.log(this.workplaceTemp);
                _this.uniTemp.sort(function (a, b) {
                    if (a['count'] < b['count'])
                        return 1;
                    else if (a['count'] > b['count'])
                        return -1;
                    else
                        return 0;
                });
                // console.log(this.uniTemp);
                _this.jobTemp.sort(function (a, b) {
                    if (a['count'] < b['count'])
                        return 1;
                    else if (a['count'] > b['count'])
                        return -1;
                    else
                        return 0;
                });
                // console.log(this.jobTemp);
            });
            for (var i = 0; i < _this.graphTemp.length; i++) {
                if (_this.graphTemp[i] == 'ได้งานแล้ว (ทำงานตรงสาย)') {
                    _this.a = _this.a + 1;
                }
                else if (_this.graphTemp[i] == 'ได้งานแล้ว (ทำงานไม่ตรงสาย)') {
                    _this.b = _this.b + 1;
                }
                else if (_this.graphTemp[i] == 'กำลังศึกษาต่อ') {
                    _this.c = _this.c + 1;
                }
                else if (_this.graphTemp[i] == 'ประกอบอาชีพอิสระ (เช่น ทำธุรกิจส่วนตัว)') {
                    _this.d = _this.d + 1;
                }
                else if (_this.graphTemp[i] == 'กำลังหางานทำ') {
                    _this.e = _this.e + 1;
                }
                else {
                    _this.f = _this.f + 1;
                }
            }
            _this.allCount = _this.a + _this.b + _this.c + _this.d + _this.e + _this.f;
            _this.data = {
                labels: ['ได้งานแล้ว (ทำงานตรงสาย)', 'ได้งานแล้ว (ทำงานไม่ตรงสาย)', 'กำลังศึกษาต่อ', 'ประกอบอาชีพอิสระ', 'กำลังหางานทำ', 'กำลังเตรียมตัวศึกษาต่อ'],
                datasets: [
                    {
                        data: [_this.a, _this.b, _this.c, _this.d, _this.e, _this.f],
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF0099",
                            "#CCFF33",
                            "#CC66CC"
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF0099",
                            "#CCFF33",
                            "#CC66CC"
                        ]
                    }
                ]
            };
        });
    };
    WorkReportComponent.prototype.GeneratePDF = function () {
        __WEBPACK_IMPORTED_MODULE_4_html2canvas__(document.getElementById('content')).then(function (canvas) {
            document.body.appendChild(canvas);
            var pdf = new jsPDF('p', 'pt', 'a4');
            pdf.addHTML(canvas, function () {
                pdf.save('work_survey_report.pdf');
            });
        });
        // window.location.reload();
    };
    WorkReportComponent.prototype.back = function () {
        this.router.navigate(['/reports']);
    };
    WorkReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-work-report',
            template: __webpack_require__("../../../../../src/app/reports/work-report/work-report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reports/work-report/work-report.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_firebase_service_service__["a" /* FirebaseService */]])
    ], WorkReportComponent);
    return WorkReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/excel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx__ = __webpack_require__("../../../../xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_xlsx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EXCEL_EXTENSION = '.xlsx';
var ExcelService = /** @class */ (function () {
    function ExcelService(db) {
        this.db = db;
    }
    ExcelService.prototype.exportAsExcelFile = function (json, excelFileName) {
        var worksheet = __WEBPACK_IMPORTED_MODULE_2_xlsx__["utils"].json_to_sheet(json);
        var workbook = __WEBPACK_IMPORTED_MODULE_2_xlsx__["utils"].book_new();
        __WEBPACK_IMPORTED_MODULE_2_xlsx__["utils"].book_append_sheet(workbook, worksheet, 'report');
        __WEBPACK_IMPORTED_MODULE_2_xlsx__["writeFile"](workbook, excelFileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    ExcelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ExcelService);
    return ExcelService;
}());



/***/ }),

/***/ "../../../../../src/app/service/firebase-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseService = /** @class */ (function () {
    function FirebaseService(db) {
        this.db = db;
    }
    FirebaseService.prototype.getList = function (path) {
        this.list = this.db.list(path).snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        return this.list;
    };
    // addData(data,path): AngularFireList<any[]>{
    //   this.db.list(path).push(data);
    //   return this.list;
    // }
    FirebaseService.prototype.addData = function (data, path) {
        var key = data.key.toString();
        delete data.key;
        this.db.list(path).set(key, data);
        // return this.list;
    };
    FirebaseService.prototype.delData = function (data, path) {
        // console.log("key=====");
        // console.log(data.key);
        this.db.list(path).remove(data.key);
    };
    FirebaseService.prototype.editData = function (key, data, path) {
        console.log(data);
        delete data.key;
        this.db.object(path + '/' + key).update(data);
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "../../../../../src/app/service/login-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginServiceService = /** @class */ (function () {
    function LoginServiceService(db) {
        this.db = db;
    }
    // getList(path){
    //   this.list =  this.db.list(path).valueChanges();
    //   return this.list;
    // }
    LoginServiceService.prototype.getList = function (path) {
        this.list = this.db.list(path).snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        return this.list;
    };
    LoginServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], LoginServiceService);
    return LoginServiceService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/environments/firebase.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyAhezdBBEgUBGZnr0Ue2_7_48z4zmFeAb4",
    authDomain: "survey-management-b8d07.firebaseapp.com",
    databaseURL: "https://survey-management-b8d07.firebaseio.com",
    projectId: "survey-management-b8d07",
    storageBucket: "survey-management-b8d07.appspot.com",
    messagingSenderId: "724709436632"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map