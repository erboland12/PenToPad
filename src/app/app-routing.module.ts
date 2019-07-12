import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { Home }          from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PublishComponent } from './publish/publish.component';
import { PoemComponent } from './poem/poem.component';
import { LyricsComponent } from './lyrics/lyrics.component';

const routes: Routes = [    
   {path: '', component: Home},
   {path: 'about', component: AboutComponent},
   {path: 'publish', component: PublishComponent},
   {path: 'poem', component: PoemComponent},
   {path: 'lyrics', component: LyricsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
