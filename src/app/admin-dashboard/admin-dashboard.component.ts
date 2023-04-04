import { Component } from '@angular/core';
import {  VERSION } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  $(arg0: string) {
    throw new Error('Method not implemented.');
  }
  name = 'Angular ' + VERSION.major;
   
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Finished', 'Ongoing', 'OnHold', 'Archived'];
  public pieChartData: SingleDataSet = [50, 30, 10, 10 ];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  target: any;
  data: any;
   
  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  };

// <invoice>
  names = 'Angular ' + VERSION.major;
   
  public pieChartOption: ChartOptions = {
    responsive: true,
  };
  public pieChartLabel: Label[] = ['PAID'];
  public pieChartDatas: SingleDataSet = [100];
  public pieChartTypes: ChartType = 'pie';
  public pieChartLegends = true;
  public pieChartPlugin = [];
   
  profileForm = new FormGroup({
    ticket: new FormControl(''),
    project: new FormControl(''),
    priority: new FormControl(''),
    description: new FormControl(''),
    file: new FormControl(''),

  });

  onSubmit(){
    console.log(this.profileForm.value);
  }


  }






