import { NgModule}          from '@angular/core';
import { CommonModule }     from '@angular/common';
import { PostComponent }    from './post.component';
import { PostRoutingModule }       from './post-routing.module';

@NgModule({
    declarations: [PostComponent],
    imports: [
      CommonModule
    ]
  })
  export class PostModule { 
    title: "Word";
  }