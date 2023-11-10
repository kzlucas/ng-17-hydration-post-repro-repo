import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ],
})
export class AppComponent {

  getReq$: Observable<any>;
  postReq$: Observable<any>;

  constructor(
    private http: HttpClient,
  ) {
    this.getReq$ = this.get();
    this.postReq$ = this.post();
  }

  get(): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      'https://dummyjson.com/products/1'
      , {});
  }

  post(): Observable<HttpResponse<any>> {
    return this.http.post<any>(
      'https://dummyjson.com/products/add'
      , {})
  }

}
