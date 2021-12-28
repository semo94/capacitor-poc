import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltInPluginPage } from './built-in-plugin.page';

const routes: Routes = [
  {
    path: '',
    component: BuiltInPluginPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuiltInPluginPageRoutingModule {}
