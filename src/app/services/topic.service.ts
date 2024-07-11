import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  private jsonUrl = 'assets/mock-topics.json'; // URL to your mock JSON file

  constructor(private http: HttpClient) {}

  getTopics(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
