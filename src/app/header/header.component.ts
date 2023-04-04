import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { MenuItem } from './menu.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  showFiller = false;
   expanded: boolean = true;

  menuItem:any=[]
  ngOnInit(): void {
  const auth = Menu.filter((ele)=>ele.id===400);
  console.log(auth)
  for (let i in auth)
  this.menuItem.push(auth[i]);
  }
  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }

  
}
