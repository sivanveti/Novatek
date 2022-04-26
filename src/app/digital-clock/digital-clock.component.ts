import { Component, OnInit, ViewChild } from '@angular/core';
import { ActiveClockService } from '../providers/active-clock.service';

@Component({
  selector: 'digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {

  @ViewChild('countdown') public countdown: any;
  clockTime: Date = new Date();
  hours: number = 0;
  minuites: number = 0;
  seconds: number = 0;
  constructor(private clock: ActiveClockService) { }

  ngOnInit(): void {
    this.clock.clockDate.subscribe((res: Date) => {
      this.clockTime = res;
      this.hours = this.clockTime.getHours();
      this.minuites = this.clockTime.getMinutes();
      this.seconds = this.clockTime.getSeconds();
      // this.countdown.nativeElement.innerHTML = "<span>" + this.pad(this.hours) + "</span><span>" 
      //              + this.pad(this.minuites) + "</span><span>" + this.pad(this.seconds) + "</span>"
    });
  }
  pad(n: number) {
    return (n < 10 ? '0' : '') + n;
  }

}
