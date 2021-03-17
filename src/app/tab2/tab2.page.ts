import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  gameWin : boolean;
  randomNumber : Number;
  angkaInput : Number;

  
  randomCheck()
  {
    this.randomNumber = Math.floor(Math.random() * (5 - 1) + 1);

    if(this.angkaInput == this.randomNumber)
    {
      this.gameWin = true;
    }
    else{
      this.gameWin = false;
    }
  }

  
}
