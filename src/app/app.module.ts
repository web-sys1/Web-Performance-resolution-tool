import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';

import { OnTrigger } from './modal-dialog';
import { ModalServiceModule } from './providers/modal-service/modal-service.module';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatSortModule
} from '@angular/material';
import { BytesToKBPipe } from './pipes/bytesToKB';

@NgModule({
  declarations: [AppComponent, OnTrigger, WebviewDirective, BytesToKBPipe],
  imports: [
    MatFormFieldModule,
    MatSortModule,
    ModalServiceModule.forRoot(),
    MatProgressSpinnerModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  entryComponents: [ OnTrigger ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule {}
