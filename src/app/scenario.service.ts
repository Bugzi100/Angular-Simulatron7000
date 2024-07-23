import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Scenario {
  guid: string;
  name: string;
  description: string;
  startTime: number;
  period: number;
}

@Injectable({
  providedIn: 'root'
})
export class ScenarioService {

  private apiUrl = 'http://localhost:8080/api/scenarios';

  constructor(private http: HttpClient) { }

  getScenario(uuid: string): Observable<Scenario> {
    return this.http.get<Scenario>(`${this.apiUrl}/${uuid}`);
  }
}
