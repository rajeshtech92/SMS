import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  http: any;
 
  constructor( private user:HttpClient) { }

url='http://localhost:3000/posts';

getData(){
  return this.http.get(this.url);
}
postData(data:any){
  return this.http.post(this.url,data);
}
updateData(id:any){
  return this.http.put(this.url,id);
}
deleteData(id:any){
  return this.http.delete(this.url,id)
}
}
 