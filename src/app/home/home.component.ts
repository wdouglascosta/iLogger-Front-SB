import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ApiService } from '../Api/api.services';
import { DataService } from '../data.service';
import { Observable, observable, interval } from 'rxjs';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @Input() values$: Observable<any>;

  gaugeThick = 20;
  gaugeMax = 100;
  gaugeSize = 400;

  gaugeType1 = "arch";
  gaugeLabel1 = "Amp";

  gaugeType2 = "arch";
  gaugeLabel2 = "Amp";

  gaugeType3 = "arch";
  gaugeLabel3 = "Amp";

  gaugeValue1 = 0
  gaugeValue2 = 0
  gaugeValue3 = 0

  thresholdConfig = {
    '0': {color: 'green'},
    '30': {color: 'orange'},
    '45.5': {color: 'red'}
};

  constructor(private data: DataService) { }

  ngOnInit() {


    this.refreshData()
  }

  refreshData(): void {
    interval(100).subscribe(param => {
      this.data.dataReq().then(res => {
        this.gaugeValue1 = res[0].value
        this.gaugeValue2 = res[1].value
        this.gaugeValue3 = res[2].value
      })
    })
  }
}

