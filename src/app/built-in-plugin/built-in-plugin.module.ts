import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuiltInPluginPage } from './built-in-plugin.page';

import { BuiltInPluginPageRoutingModule } from './built-in-plugin-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BuiltInPluginPageRoutingModule
  ],
  declarations: [BuiltInPluginPage]
})
export class BuiltInPluginPageModule {}
