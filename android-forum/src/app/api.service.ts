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
    const { appUrl } = environment
    return this.http.get<Theme>(`${appUrl}/themes/${id}`);
  }
  
  getThemes() {
    const { appUrl } = environment
    return this.http.get<Theme[]>(`${appUrl}/themes`);
  }

  getLastThemes(limit?: number) {
    const { appUrl } = environment
    const limitCount = limit ? `?limit=${limit}` : '';
    return this.http.get<Theme[]>(`${appUrl}/themes${limitCount}`);
  }
 
  addNewTheme(){
    //TODO: implement post request
  }


}



















