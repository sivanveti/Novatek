import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateTimeComponent } from './dialogs/update-time/update-time.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'novatek-assignment';
  constructor(private dialog: MatDialog) {}

  openDialog() {
   this.dialog.open(UpdateTimeComponent, {
    hasBackdrop: true
   }); 
  }
}
