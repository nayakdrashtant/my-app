import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CarouselBannerComponent } from './home/carousel-banner/carousel-banner.component';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { StoryComponent } from './home/story/story.component';
import { OurProductsComponent } from './home/our-products/our-products.component';
import { TechnologyComponent } from './home/technology/technology.component';
import { AboutComponent } from './home/about/about.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { OurStoryComponent } from './our-story/our-story.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    CarouselBannerComponent,
    StoryComponent,
    OurProductsComponent,
    TechnologyComponent,
    AboutComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    OurTeamComponent,
    OurStoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    CarouselModule,
    GoogleMapsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
