import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';
import { ErrorinterceptorProvide } from './_services/error.interceptor';
import { BsDropdownModule } from 'ngx-bootstrap';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { routing } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { UserService } from './_services/user.service';
import { MemberCardComponent } from './members/member-card/member-card.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    routing
  ],
  providers: [
    AuthService,
    AlertifyService,
    ErrorinterceptorProvide,
    AuthGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
