import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HompageComponent } from './hompage/hompage.component';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { StopclockComponent } from './stopclock/stopclock.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { NewOneComponent } from './new-one/new-one.component';


const routes: Routes = [
  { path: 'dashboard', component: HompageComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: 'addstudent', component: AddstudentComponent },
  { path: 'editstudentdetails', component: EditstudentComponent },
  { path: 'deletestudent', component: DeletestudentComponent },
  { path: 'watch', component: StopclockComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'new', component: NewOneComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HompageComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    AddstudentComponent,
    EditstudentComponent,
    DeletestudentComponent,
    StopclockComponent,
    RegisterComponent,
    LoginComponent,
    ChatComponent,
    NewOneComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
