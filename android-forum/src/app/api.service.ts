import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTheme(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }
  
  getThemes() {
    const { apiUrl } = environment;
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }

  getLastThemes(limit?: number) {
    const { apiUrl } = environment;
    const limitCount = limit ? `?limit=${limit}` : '';
    return this.http.get<Theme[]>(`${apiUrl}/themes${limitCount}`);
  }
 
  addNewTheme(themeName:string, postText:string){
    return this.http.post<Theme>('/api/themes', {themeName, postText})  
  }

  postComment( postText:string, themeId: string){
    return this.http.post<Post>(`/api/themes/${themeId}`, { postText})   
  }


  likePost(postId: string){
     return this.http.put<Post>(`/api/likes/${postId}`, {})
  }

  editPost(){
    //Only for Owner
    //TODO:
    //PUT REQUEST
    ///themes/:themeId/posts/:postId
  }

  deletePost(){
    //Only for Owner
    //TODO:
    //DELETE REQUEST
    ///themes/:themeId/posts/:postId
  }
}



















