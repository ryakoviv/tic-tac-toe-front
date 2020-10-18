import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './components/cell/cell.component';



@NgModule({
  declarations: [CellComponent],
  exports: [CellComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
