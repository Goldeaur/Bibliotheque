import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ListComponent } from './books/list/list.component';
import { BookComponent } from './books/book/book.component';
import { FormComponent } from './books/form/form.component';
import { HeaderComponent } from './header/header.component';
import {BooksService} from "./services/books.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {AuthService} from "./services/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { UsersComponent } from './users/list/users.component';
import { UserComponent } from './users/user/user.component';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent},
  { path: 'auth/signin', component: SigninComponent},
  { path: 'books', canActivate:[AuthGuardService], component: ListComponent},
  { path: 'books/new', canActivate:[AuthGuardService],component: FormComponent},
  { path: 'books/:bookId', canActivate:[AuthGuardService],component: BookComponent},
  { path: 'users', canActivate:[AuthGuardService],component: UsersComponent},
  { path: '', redirectTo: 'books', pathMatch: 'full'},
  { path: '**', redirectTo: 'books'}
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ListComponent,
    BookComponent,
    FormComponent,
    HeaderComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })
  ],
  providers: [
    AuthService,
    AuthGuardService,
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
