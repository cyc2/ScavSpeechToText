import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import {
  SubComponent,
  RxComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SubComponent,
    RxComponent,
  ],
  exports: [
    SubComponent,
    RxComponent,
  ],
  bootstrap: [
    SubComponent
  ]
})
export class SubModule { }
