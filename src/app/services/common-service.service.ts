import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  counter = 1;
  selectedTab = 1;
  tabs = [
    {
      Tabnumber: 1,
    },
  ];
  updateTabs() {
    this.counter++;
    this.tabs.push({ Tabnumber: this.counter });
    console.log(this.tabs);
  }
  updateSelectedTab(num:number) {
    this.selectedTab = num + 1;
  }
  constructor() {}
}
