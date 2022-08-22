import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SecondAngularProject';
  i=12;
  Click(i:any, j:any)
  {
    alert("hello");
    alert(j);
  }
  KeyUp(val:any)
  {
    console.warn(val);
  }
  KeyDown(val: any)
  {
    console.warn(val);
  }
  Blur(val:any)
  {
    console.warn(val);
  }
  Input(val:any)
  {
    console.warn(val);
  }
  Mouseoverorleave(val:any)
  {
    console.warn(val)
  }
  name:string=""
  GetName(val:string)
  {
    this.name=val;
  }
  count:number=0;
  counter(selected:string)
  {
    selected==="true"?this.count++ :this.count--;
  }
  qname="harsh";
  disable=false;
  show= true;
  show1=true;
  showman="nana"
  color="green"
  
}
