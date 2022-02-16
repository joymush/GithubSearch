import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { DateCountPipe } from './date-count.pipe';
import { DatePipePipe } from './date-pipe.pipe';
import { DatepipePipe } from './datepipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    DateCountPipe,
    DatePipePipe,
    DatepipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
