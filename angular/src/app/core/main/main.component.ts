import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  public startGame(e): void
  {
    e.preventDefault();
    this.api.create().subscribe(
      data => {
        this.router.navigate(['game', data.id ]);
      },
      error => {
        console.log(error);
      }
    );
  }
}
