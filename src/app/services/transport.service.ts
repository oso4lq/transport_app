import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// IMPORTANT
// A proxy server https://cors-anywhere.herokuapp.com/ is used to avoid browser CORS restrictions.
// To enable it, go to DevTools/Network, fill the app inputs and make an API request.
// Then, find the bad request, open it and click the button to enable using this proxy for developing purposes.

export class TransportService {
  // suggestions based on the user input
  private apiURLSuggestions = 'https://suggests.rasp.yandex.net/all_suggests?format=old&part=';
  // Yandex timetables API
  private apiURLTimetables = 'https://api.rasp.yandex.net/v3.0/';
  // got from Yandex account
  private apiKey = 'b9ae274a-ab37-4eee-babe-ddf4b7f786c4';
  // CORS proxy URL to prevent browser restrictions on sending API requests
  private corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getDestinationSuggestions(part: string): Observable<any> {
    const suggestionsUrl = `${this.corsProxyUrl}${this.apiURLSuggestions}${part}`;
    return this.http.get<any>(suggestionsUrl);
  };

  searchTransport(from: string, to: string, transportType: string, date: any): Observable<any> {
    let params = new HttpParams()
      .set('apikey', this.apiKey)
      .set('format', 'json')
      .set('from', from)
      .set('to', to)
      .set('lang', 'ru_RU')
      .set('date', date);

    if (transportType !== 'any') {
      params = params.set('transport_types', transportType);
    };

    return this.http.get<any>(`${this.corsProxyUrl}${this.apiURLTimetables}search/`, { params: params });
  };

};
