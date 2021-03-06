import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { LoginComponent } from "../hal2/login.component";
import { HomeComponent } from "../home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { GlobalvarService } from "./globalvar.service";
import { Hal3Component } from "./hal3/hal3.component";

const ROUTES: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "hal3", component: Hal3Component },
];
@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    HomeComponent,
    Hal3Component
  ],
  bootstrap: [AppComponent],
  providers: [GlobalvarService]
})
export class AppModule {}
