import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShowHidePasswordComponent } from './src/ngx-show-hide-password';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [ShowHidePasswordComponent],
  declarations: [ShowHidePasswordComponent],
})
export class ShowHidePasswordModule {
}
