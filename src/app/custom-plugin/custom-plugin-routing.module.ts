import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPluginPage } from './custom-plugin.page';

const routes: Routes = [
  {
    path: '',
    component: CustomPluginPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomPluginPageRoutingModule {}
