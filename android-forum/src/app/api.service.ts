import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Theme } from './types/theme';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTheme(id: string) {
    const { apiUrl } = environment
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }
  
  getThemes() {
    const { apiUrl } = environment
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }

  getLastThemes(limit?: number) {
    const { apiUrl } = environment
    const limitCount = limit ? `?limit=${limit}` : '';
    return this.http.get<Theme[]>(`${apiUrl}/themes${limitCount}`);
  }
 
  addNewTheme(){
    //TODO: implement post request
  }


}



















