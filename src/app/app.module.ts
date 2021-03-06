import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, RequestOptions } from '@angular/http';
import { APP_ROUTES_PROVIDER } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TeamComponent } from './landing/landing-components/team/team.component';
import { ServicesComponent } from './landing/landing-components/services/services.component';
import { HeaderComponent } from './landing/landing-components/header/header.component';
import { FooterComponent } from './landing/landing-components/footer/footer.component';
import { StudentloginComponent } from './landing/user/studentlogin/studentlogin.component';
import { SindexComponent } from './landing/user/studentlogin/sindex/sindex.component';
import { StudentprofileComponent } from './landing/user/studentprofile/studentprofile.component';
import { StudentnavigationComponent } from './landing/user/studentlogin/studentnavigation/studentnavigation.component';
import { LoginComponent } from './landing/landing-components/login/login.component';
import { ErrorComponent } from './error/error.component';
import { SettingsComponent } from './landing/user/settings/settings.component';
import { PersonaldetailComponent } from './landing/user/training/fill-detail/personaldetail/personaldetail.component';
import { AcademicdetailComponent } from './landing/user/training/fill-detail/academicdetail/academicdetail.component';
import { TrainingdetailComponent } from './landing/user/training/fill-detail/trainingdetail/trainingdetail.component';
import { AboutComponent } from './landing/landing-components/about/about.component';
import { HomeComponent } from './landing/user/home/home.component';
import { CompanyComponent } from './landing/company/company.component';
import { TrainingComponent } from './landing/user/training/training.component';
import { StepperComponent } from './landing/user/training/stepper/stepper.component';
import { PreferenceComponent } from './landing/user/training/preference/preference.component';
import { TpoApprovalComponent } from './landing/user/training/tpo-approval/tpo-approval.component';
import { CompanyApprovalComponent } from './landing/user/training/company-approval/company-approval.component';
import { FillDetailComponent } from './landing/user/training/fill-detail/fill-detail.component';
import { CompanyHomeComponent } from './landing/company/company-home/company-home.component';
import { CompanyNavigationComponent } from './landing/company/company-navigation/company-navigation.component';
import { CompanyDetailsComponent } from './landing/company/company-details/company-details.component';
import { UniversityHighlightsComponent } from './landing/company/company-home/university-highlights/university-highlights.component';
import { DashboardComponent } from './landing/coordinator/dashboard/dashboard.component';
import { EventComponent } from './landing/coordinator/dashboard/event/event.component';
import { CompanyRegisterComponent } from './landing/company/company-register/company-register.component';
import { CompanyFormComponent } from './landing/company/company-form/company-form.component';
import { TrainingDataComponent } from './landing/coordinator/dashboard/training-data/training-data.component';
import { SearchFormComponent } from './landing/coordinator/dashboard/search-form/search-form.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';

/* Service import  */
import { BaseService } from './service/student/base.service';
import { BaseServiceCoordinator} from './service/coordinator/base.service';
import { LoginService } from './landing/landing-components/service/login.service';
import { StorageServiceModule} from 'angular-webstorage-service';
import { RegisterationService } from './service/student/registeration.service';
import{ SearchFormServiceService } from './service/coordinator/search-form-service.service';
import {FileUploadService} from './service/student/file-upload.service';
import { UpdateUserDetailsComponent } from './landing/user/studentprofile/update-user-details/update-user-details.component';
import { EditDetailsService } from './service/student/edit-details.service';
import { UpdatePersonalDetailsComponent } from './landing/user/studentprofile/update-personal-details/update-personal-details.component';
import { UpdatePasswordComponent } from './landing/user/studentprofile/update-password/update-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavigationComponent,
    TeamComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    StudentloginComponent,
    SindexComponent,
    StudentprofileComponent,
    StudentnavigationComponent,
    LoginComponent,
    ErrorComponent,
    SettingsComponent,
    PersonaldetailComponent,
    AcademicdetailComponent,
    TrainingdetailComponent,
    AboutComponent,
    HomeComponent,
    TrainingComponent,
    StepperComponent,
    PreferenceComponent,
    TpoApprovalComponent,
    CompanyApprovalComponent,
    FillDetailComponent,
    CompanyHomeComponent,
    CompanyNavigationComponent,
    CompanyDetailsComponent,
    UniversityHighlightsComponent,
    DashboardComponent,
    EventComponent,
    CompanyRegisterComponent,
    CompanyFormComponent,
    TrainingDataComponent,
    SearchFormComponent,
    UpdateUserDetailsComponent,
    UpdatePersonalDetailsComponent,
    UpdatePasswordComponent,

  ],
  imports: [
    BrowserModule,
    APP_ROUTES_PROVIDER,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StorageServiceModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [BaseService,BaseServiceCoordinator, LoginService, RegisterationService, SearchFormServiceService, FileUploadService, EditDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
