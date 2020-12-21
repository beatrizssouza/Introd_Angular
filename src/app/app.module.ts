import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { Error404Compoent } from './core/component/error-404/error404.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Compoent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path: '',redirectTo:'courses', pathMatch:'full'
      },
      {
        path:'**', component: Error404Compoent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
