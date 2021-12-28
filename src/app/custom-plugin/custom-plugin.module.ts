import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomPluginPage } from './custom-plugin.page';

import { CustomPluginPageRoutingModule } from './custom-plugin-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CustomPluginPageRoutingModule
  ],
  declarations: [CustomPluginPage]
})
export class CustomPluginPageModule {}
