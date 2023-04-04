import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(private http: HttpClient) { }
  profile = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    project: new FormControl(''),

  })

  data: any = [];
  actionBtn = 'Save';
  id: any;
  Search: any;
  services: any;
  submit() {
    this.data.push(this.profile.value)
    console.log(this.profile.value);
  }
  add() {
    this.actionBtn = 'Save';
  }
  edit(id: any) {
    this.actionBtn = 'Update';
    this.id = id;
    this.services.subscribe((res: any[]) => {
      console.log(res[0]),
        this.profile = new FormGroup({
          firstname: new FormControl(res[0]['firstname']),
          lastName: new FormControl(res[0]['lastName']),
          email: new FormControl(res[0]['email']),
          phone: new FormControl(res[0]['phone']),
          project: new FormControl(res[0]['project']),

        }),
        console.log(this.profile.value);

    });
  }
  
deleteRow(x:any){
  var delBtn = confirm(" Do you want to delete ?");
  if ( delBtn == true ) {
    this.data.splice(x, 1 );
    console.log(this.data)
  }   
} 

}




