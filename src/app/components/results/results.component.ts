import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
index=1;
  constructor(private commonService:CommonServiceService) { }

  ngOnInit() {
    this.index = this.commonService.selectedTab;
  }

}
