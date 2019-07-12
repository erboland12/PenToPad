// #docregion
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { PostModule }     from './post/post.module'

import { AppComponent }         from './app.component';
import { PostComponent }        from './post/post.component';
import { RouterModule }         from '@angular/router';
// #docregion routing-module
import { AppRoutingModule }     from './app-routing.module';
import { Home }                 from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { PublishComponent } from './publish/publish.component';
import { PoemComponent } from './poem/poem.component';
import { LyricsComponent } from './lyrics/lyrics.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path: 'home', component: Home},
      {path: 'about', component: AboutComponent},
      {path: 'publish', component: PublishComponent},
      {path: 'poem', component: PoemComponent},
      {path: 'lyrics', component: LyricsComponent}
    ])
  ],
// #enddocregion routing-module
  // #docregion dashboard
  declarations: [
    AppComponent,
    PostComponent,
    Home,
    AboutComponent,
    NavComponent,
    FooterComponent,
    PublishComponent,
    PoemComponent,
    LyricsComponent
    ],
  // #enddocregion dashboard
  providers: [],
  bootstrap: [ AppComponent ]
// #docregion routing-module
})
export class AppModule { }
// #enddocregion routing-module