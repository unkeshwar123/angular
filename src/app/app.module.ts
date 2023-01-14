import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { FormGroup, FormsModule } from '@angular/forms';

import{RouterModule, Routes} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgifComponent } from './ngif/ngif.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MessageServiceService } from './appServices/message-service.service';
import { ChildComponent } from './about/child/child.component';
import { C1Component } from './about/c1/c1.component';
import { C2Component } from './contact/c2/c2.component';
import { C3Component } from './contact/c3/c3.component';
import { ProductPipe } from './appPipes/product.pipe';

const appRoutes:Routes=[
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ChildComponent,
    C1Component,
    C2Component,
    C3Component,
    ProductPipe
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [MessageServiceService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
