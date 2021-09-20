import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset'
import {MenubarModule} from 'primeng/menubar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports:[
    CardModule,
    ButtonModule,
    MenubarModule,
    FieldsetModule
  ]
})
export class PrimeNgModule { }
