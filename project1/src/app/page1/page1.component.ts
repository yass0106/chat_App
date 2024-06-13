import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
      inputText:any="test"
      textcolor="pink"
      bgcolor="black"
      paddings:any=['padding-top','padding-rignt','padding-bottom','padding-left']
      Pad:any="50px"
      PadRange="50px"
      MarRange="10px"
      margin:any=['m-top','m-rignt','m-bottom','m-left']
      range="10"
      px="px"
     totalstyle={
        'color':this.textcolor,'background-color':this.bgcolor
      }
}
