import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-sqleditor',
  templateUrl: './sqleditor.component.html',
  styleUrls: ['./sqleditor.component.css']
})
export class SqleditorComponent implements OnInit {

  counter =1;
  tabs:any;
  constructor(private commonService:CommonServiceService) { }

  ngOnInit(): void {
    this.tabs=this.commonService.tabs;
  }
  onLinkClick(event: MatTabChangeEvent) {
    this.commonService.updateSelectedTab(event.index);
  }
}
