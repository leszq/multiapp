import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Package2RoutingModule } from './package2-routing.module';
import { Package2Component } from './package2/package-2.component';

@NgModule({
  imports: [CommonModule, Package2RoutingModule],
  declarations: [Package2Component],
  exports: [Package2Component]
})
export class Package2Module {}
