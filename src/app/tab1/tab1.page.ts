import { Component } from '@angular/core';
import { CallBackData, sample } from 'sampleplugin';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {
    console.log('Uday');
    sample.echo({value: 'Rajesh'}).then((response: { value: any; }) => {
     // console.log("ervferf");
      console.log(response.value);
  });
  sample.addListener("ApplicationGoingToBackground",(data: CallBackData) => {
   console.log("Application did Enter Background" + data);
  });
 }
}
