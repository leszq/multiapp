import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'package-1',
        loadChildren: () => import('@multiapp/package1').then(mod => mod.Package1Module)
    },
    {
        path: 'package-2',
        loadChildren: () => import('@multiapp/package2').then(mod => mod.Package2Module)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }