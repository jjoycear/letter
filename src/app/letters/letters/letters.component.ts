import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErroDialogComponent } from 'src/app/shared/components/erro-dialog/erro-dialog.component';
import { Users } from './model/structure';

import { LettersService } from './services/letters.service';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss']
})
export class LettersComponent implements OnInit {

  users$: Observable<Users[]>

  displayedColumns = ['id', 'name', 'username', 'email', 'actions'];

  constructor(
    private lettersService: LettersService,
    public dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.users$ = this.lettersService.getUser()
    .pipe(
      catchError(error => {
        this.openMsgError('Erro ao carregar letters')
        return of([])
      })
    );
  }

  openMsgError(errorMsg: string) {
    this.dialog.open(ErroDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {
  }

  generateObject() {
    this.router.navigate(['object'], {relativeTo: this.activatedRoute});
  }

}
