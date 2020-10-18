import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  readonly CELL_X = 'X';
  readonly CELL_O = 'O';
  readonly CELL_EMPTY = '-';
  readonly BOARD_EMPTY = '---------';

  readonly STATUS_X_WON = 'X_WON';
  readonly STATUS_O_WON = 'O_WON';
  readonly STATUS_DRAW = 'DRAW';
  readonly STATUS_RUNNING = 'RUNNING';

  public board = this.BOARD_EMPTY;
  public status = this.STATUS_RUNNING;
  private gameId: string;

  constructor(private api: ApiService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.gameId = this.activeRoute.snapshot.paramMap.get('id');
    this.getGame();
  }

  private getGame(): void
  {
    this.api.get(this.gameId).subscribe(
      data => {
        this.board = data.board;
        this.status = data.status;
      },
      error => {
        console.log(error);
      }
    );
  }

  private moveGame(): void
  {
    this.api.move(this.gameId, this.board).subscribe(
      data => {
        this.board = data.board;
        this.status = data.status;
      },
      error => {
        console.log(error);
      }
    );
  }

  public onCellClick(value: string, index: number): void
  {
    const strArr = this.getBoardAsArray();
    if (value === this.CELL_EMPTY) {
      strArr[index] = this.CELL_X;
      this.board = strArr.join('');
      this.moveGame();
    }
  }

  public getBoardAsArray(): string[]
  {
    return this.board.split('');
  }

  public isBoardDisabled(): boolean
  {
    return this.status !== this.STATUS_RUNNING;
  }

}
