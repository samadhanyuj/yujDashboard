import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponenetComponent } from './home-componenet/home-componenet.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { LoginComponenetComponent } from './login-componenet/login-componenet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AdminComponent,
    MainContainerComponent,
    ProfileComponent,
    LoginComponentComponent,
    HomeComponenetComponent,
    NotFoundComponentComponent,
    LoginComponenetComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
