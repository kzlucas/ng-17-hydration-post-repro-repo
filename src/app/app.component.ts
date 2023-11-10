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
    try {
      return this.http.get<any>(
        'https://dummyjson.com/products/1'
        , {})
        .pipe(map((res: HttpResponse<any>) => {
          console.log(res);
          return res
        }));
    }
    catch (error) {
      console.log(error);
      throw (error)
    }
  }

  post(): Observable<HttpResponse<any>> {
    try {
      return this.http.post<any>(
        'https://dummyjson.com/products/add'
        , {})
        .pipe(map((res: HttpResponse<any>) => {
          console.log(res);
          return res;
        }));
    }
    catch (error) {
      console.log(error);
      throw (error)
    }
  }

}
