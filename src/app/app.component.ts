import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="murari";
  isbtn = true;
  name = "";
  staticname = "";
  tcolor='red';
  bcolor='blue';
  
  list = ["vishanth","rakesh","charu","anjali","vamsi","charu","anjali","vamsi"]
  btn(){
      return false;
  }
  sw(){
    this.isbtn = this.isbtn==true ? false : true;
    // (condition) ? trueblock : falseblock;
  }
  onc(){
     this.staticname = this.name;
  }
  switchColor(){
    this.tcolor == 'red' ? this.tcolor = 'blue' : this.tcolor='red';
    this.bcolor == 'blue' ? this.bcolor = 'red': this.bcolor = 'blue';
  }
}
