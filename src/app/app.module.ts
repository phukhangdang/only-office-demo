import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DocumentEditorModule } from '@onlyoffice/document-editor-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlyOfficeComponent } from './only-office/only-office.component';

@NgModule({
  declarations: [AppComponent, OnlyOfficeComponent],
  imports: [BrowserModule, AppRoutingModule, DocumentEditorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
