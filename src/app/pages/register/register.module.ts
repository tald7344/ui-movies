import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import {ThemeModule} from '../../@theme/theme.module';


@NgModule({
  declarations: [],
  imports: [
    ThemeModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
