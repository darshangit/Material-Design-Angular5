import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonComponent } from './button/button.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexboxComponent } from './flexbox/flexbox.component';

@NgModule({
  imports: [CommonModule, DemoRoutingModule, MaterialModule, FormsModule],
  declarations: [ButtonComponent, FlexboxComponent]
})
export class DemoModule {}
