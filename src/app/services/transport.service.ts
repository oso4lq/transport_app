import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TransportService {
  private apiUrl = 'https://api.rasp.yandex.net/v3.0/';
  private apiKey = 'b9ae274a-ab37-4eee-babe-ddf4b7f786c4';

  // constructor(private http: HttpClient) { }

  // searchTransport(from: string, to: string, transportType: string, date: string): Observable<any> {
  //   // Construct query parameters
  //   let params = new HttpParams()
  //     .set('apikey', this.apiKey)
  //     .set('format', 'json')
  //     .set('from', from)
  //     .set('to', to)
  //     .set('lang', 'ru_RU')
  //     .set('date', date);

  //     console.log(params);
      
  //   if (transportType !== 'any') {
  //     params = params.set('transport_types', transportType);
  //   };

  //   // Make API request
  //   return this.http.get<any>(`${this.apiUrl}search/`, { params: params });
  // };
};
