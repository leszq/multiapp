import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Package1RoutingModule } from './package1-routing.module';
import { Package1Component } from './package1/package-1.component';

@NgModule({
  imports: [CommonModule, Package1RoutingModule],
  declarations: [Package1Component],
  exports: [Package1Component]
})
export class Package1Module {}
