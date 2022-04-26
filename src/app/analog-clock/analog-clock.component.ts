import { Component, OnInit, ViewChild } from '@angular/core';
import { ActiveClockService } from '../providers/active-clock.service';

@Component({
  selector: 'analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss']
})
export class AnalogClockComponent implements OnInit {

  @ViewChild('hour') public hour: any;
  @ViewChild('minuite') public minuite: any;
  @ViewChild('second') public second: any;
  clockDate: Date = new Date();
  constructor(private clock: ActiveClockService) { }

  ngOnInit(): void {
    this.runTheClock();
  }

  setAnglesAndRotate() : void {
    const hr = this.clockDate.getHours();
    const min = this.clockDate.getMinutes();
    const sec = this.clockDate.getSeconds();
    const hr_rotation = 30 * hr + min / 2; //converting current time
    const min_rotation = 6 * min;
    const sec_rotation = 6 * sec;
    this.hour.nativeElement.style.transform = `rotate(${hr_rotation}deg)`;
    this.minuite.nativeElement.style.transform = `rotate(${min_rotation}deg)`;
    this.second.nativeElement.style.transform = `rotate(${sec_rotation}deg)`;
  }

  runTheClock(): void {
    this.clock.clockDate.subscribe((res: Date) => {
      this.clockDate = res;
      this.setAnglesAndRotate();
    });
  }

}
