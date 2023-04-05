import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
  animations: [ 
    trigger('slidein', [
       transition(':enter', [
         style({ transform: 'translateX(-100%)' }),
          animate(250, style({ transform: 'translateX(0)' })) ]),
          transition(':leave', [
             animate(250, style({ transform: 'translateX(-100%)' }))
            ])])]
})

export class TestingComponent {
  expanded: boolean = true;
  constructor(private router:Router){}
  back(){
    this.router.navigate(['/project'])
  }
}
