import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'built-in-plugin',
        loadChildren: () => import('../built-in-plugin/built-in-plugin.module').then(m => m.BuiltInPluginPageModule)
      },
      {
        path: 'custom-plugin',
        loadChildren: () => import('../custom-plugin/custom-plugin.module').then(m => m.CustomPluginPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/built-in-plugin',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/built-in-plugin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
