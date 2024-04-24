import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu, MenusService } from '../../service/menus/menus.service';
import { PostsService } from '../../service/posts/posts.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {

  menu: any;
  postsList: any;
  constructor(private routes: ActivatedRoute, private menus: MenusService, private posts: PostsService) {
    this.routes.params.subscribe(params => {
      console.log(params);
      this.menus.getConditionalMenus("url", "==", params.url).subscribe(menus => {
        console.log(menus);
        if (menus.length) {
          this.menu = menus[0];
          this.posts.getConditionalPosts("menu_id", "==", this.menu.id).subscribe(posts => {
            console.log(posts);
            this.postsList = posts;
          })
        }
      })
    })
  }
}
