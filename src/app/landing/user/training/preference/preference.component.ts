import { Component, OnInit } from '@angular/core';
import { AppModel } from './app.model';
import { RegisterationService } from '../../../../service/student/registeration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})
export class PreferenceComponent implements OnInit {

  preferences: String[] = [];

  constructor( private registerationService : RegisterationService) {}

  ngOnInit() {
  }
  company : String[]
  
  sendPreferences(value: AppModel){
    this.company = [];
    this.company.push(value.instituteName1+'/'+value.instituteAddress1);
    this.company.push(value.instituteName2+'/'+value.instituteAddress2);
    this.company.push(value.instituteName3+'/'+value.instituteAddress3);
    this.registerationService.postPreferences(this.company)
                                            .subscribe(
                                              (res) => {
                                                console.log(res);
                                              },
                                              (error) => {
                                                console.log('this is error');
                                                console.log(error);
                                              },
                                              () => {
                                                this.preferences = [];
                                              }
                                            );

  }
}
