import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Post {
  title: "",
  menu_id: "",
  content: ""
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs: AngularFirestore) { }

  getPosts(): Observable<any[]> {
    return this.afs.collection("posts").snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as any;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }
  addPost(post: Post) {
    this.afs.collection("posts").add(post);
  }
  deletePost(postId) {
    this.afs.doc('posts/'+postId).delete();
  }
  updatePost(postId, post: Post) {
    this.afs.doc('posts/'+postId).update(post);
  }

}