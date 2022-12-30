import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { GithubButtonComponent } from './components/github-button/github-button.component';
import { LinkedinButtonComponent } from './components/linkedin-button/linkedin-button.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProfilePicComponent } from './components/profile-pic/profile-pic.component';
import { SectionComponent } from './components/section/section.component';
import { LogoArgProgramaComponent } from './components/logo-arg-programa/logo-arg-programa.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NameComponent } from './components/name/name.component';
import { ProfessionComponent } from './components/profession/profession.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DiscordButtonComponent } from './components/discord-button/discord-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    GithubButtonComponent,
    LinkedinButtonComponent,
    BannerComponent,
    ProfilePicComponent,
    SectionComponent,
    LogoArgProgramaComponent,
    AboutMeComponent,
    NameComponent,
    ProfessionComponent,
    ProfileComponent,
    DiscordButtonComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
