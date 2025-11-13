import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { InputDenySymbolsDirective } from './common/directive/input-deny-symbols.directive';
import { Form } from './features/components/form/form';
import { Header } from './features/components/header/header';
import { Main } from './features/components/main/main';
import { Product } from './features/components/product/product';

@NgModule({
  declarations: [App, Header, Main, Product, Form, InputDenySymbolsDirective],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
