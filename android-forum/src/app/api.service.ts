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

  addNewTheme(themeName: string, postText: string) {
    return this.http.post<Theme>('/api/themes', { themeName, postText })
  }

//Chech if it work - set back-en method
  getPost(postId: string) {
    return this.http.get<Post>(`/api/posts/${postId}`);
  }

  postComment(postText: string, themeId: string) {
    return this.http.post<Post>(`/api/themes/${themeId}`, { postText })
  }


  likePost(postId: string) {
    return this.http.put<Post>(`/api/likes/${postId}`, {})
  }

  editPost(themeId: string, postId: string, postText: string) {
    return this.http.put(`/api/themes/${themeId}/posts/${postId}`, { postText })
  }

  deletePost(themeId: string, postId: string) {
    return this.http.delete(`/api/themes/${themeId}/posts/${postId}`, {})
  }
}



















