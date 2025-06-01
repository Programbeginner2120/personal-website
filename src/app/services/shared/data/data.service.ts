import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //DI
  private http = inject(HttpClient);

  getData(uri: string): Observable<any> {
    return this.http.get<any>(uri);
  }

}
