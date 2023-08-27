import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  songs:any;
  constructor() {
    this.songs =[
      ["Hound Dog", "Elvis Presley"],
      ["Jailhouse Rock", "Elvis Presley"],
      ["Can't Help Falling in Love", "Elvis Presley"],
      ["Love Me Tender", "Elvis Presley"],
      ["All Shook Up", "Elvis Presley"],
      ["Are You Lonesome Tonight", "Elvis Presley"],
      ["Hound Dog", "Elvis Presley"],
      ["Blue Suede Shoes", "Elvis Presley"],
      ["Heartbreak Hotel", "Elvis Presley"],
      ["Always On My Mind", "Elvis Presley"],
      ["It's Now Or Never", "Elvis Presley"],
      ["Suspicious Minds", "Elvis Presley"]

    ];
  }
  reordering(e: any): void {    
    e.detail.complete(this.songs);
  }

}
