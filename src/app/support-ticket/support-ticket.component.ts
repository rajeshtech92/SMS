
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-support-ticket',
  templateUrl: './support-ticket.component.html',
  styleUrls: ['./support-ticket.component.css']
})
export class SupportTicketComponent {
  constructor(private base:UsersService) { }
  profileForm = new FormGroup({
    ticket: new FormControl('', [Validators.required]),
    project: new FormControl('', [Validators.required]),
    priority: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),

  });
  data: any = [];
  onSubmit() {
    this.data.push(this.profileForm.value)
    console.log(this.profileForm.value);
  }

  // <api function> //

 displayGetData(){
  this.base.getData().subscribe((result:any)=>{
    console.log(result)
  })
 }
 displayPostData(){
  this.base.postData(this.data).subscribe((result:any)=>{
    console.log(result)
  })
 }
 displayUpdateData(){
  this.base.updateData(this.id).subscribe((result:any)=>{
    console.log(result)
  })
 }
 displayDeleteData(){
  this.base.deleteData(this.id).subscribe((result:any)=>{
    console.log(result)
  })
 }
  actionBtn = 'Save';
  id: any;
  Search: any;
  services: any;

  add() {
    this.actionBtn = 'Save';
  }
  edit(id: any) {
    // debugger;
    this.actionBtn = 'Update';
    this.id = id;

    this.base.updateData(this.id).subscribe((res: any[]) => {
      console.log(res[0]),
        this.profileForm = new FormGroup({
          ticket: new FormControl(res[0]['ticket']),
          project: new FormControl(res[0]['project']),
          priority: new FormControl(res[0]['priority']),
          description: new FormControl(res[0]['description']),
          file: new FormControl(res[0]['file']),

        }),
        console.log(this.profileForm.value);

    });
  }
  deleteRow(id: any) {
      this.data.splice(id, 1);
      // delete this.data[this.id,1];
      console.log(this.data);
  }

}

