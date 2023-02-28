import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NameDialogComponent } from '../dialogs/name-dialog/name-dialog.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass'],
})
export class WelcomeComponent implements OnInit {
  name = '';

  constructor(private readonly dialog: MatDialog) {}

  ngOnInit(): void {}

  openNameDialog(): void {
    const dialogRef = this.dialog.open(NameDialogComponent);
    dialogRef.afterClosed().subscribe({
      next: (data) => {
        this.name = data;
      },
    });
  }
}
