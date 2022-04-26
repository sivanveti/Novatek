import { Component, OnInit } from '@angular/core';
import { ActiveClockService } from 'src/app/providers/active-clock.service';

@Component({
  selector: 'app-update-time',
  templateUrl: './update-time.component.html',
  styleUrls: ['./update-time.component.scss']
})
export class UpdateTimeComponent implements OnInit {

  minuites: number = 0;
  hours: number = 0;
  constructor(private clock: ActiveClockService) { }

  ngOnInit(): void {
  }

  save() {
   let dateToUpdate: Date = this.clock.clockDate.value;
   dateToUpdate.setMinutes(dateToUpdate.getMinutes() + this.minuites);
   dateToUpdate.setHours(dateToUpdate.getHours() + this.hours);
   this.clock.clockDate.next(dateToUpdate);
  }

}
