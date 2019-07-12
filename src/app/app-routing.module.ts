import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { Home }          from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PublishComponent } from './publish/publish.component';

const routes: Routes = [    
   {path: '', component: Home},
   {path: 'about', component: AboutComponent},
   {path: 'publish', component: PublishComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
