import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RxJs
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class SmartHomeService {

  private apiURL = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  home(home: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/${home}`);
  }

  rooms(home: string): Observable<any[]> {
    return this.http.get<any>(`${this.apiURL}/${home}/rooms`);
      // .pipe(map(({ Items }) => Items.map(room => ({ devices: [], ...room }))));
  }

  devices(home: string): Observable<any[]> {
    return this.http.get<any>(`${this.apiURL}/devices/${home}`)
      .pipe(map(({ Items }) => Items));
  }

  floors(n: number): Observable<string[]> {
    return this.http.get<any>(`${this.apiURL}/floors/${n}`);
  }

  updateDevice(device: any) {
    return this.http.put(`${this.apiURL}/${device.homeId}/device/`, { device });
  }

  syncDevices(home: string): Observable<any[]> {
    return this.http.get<any>(`${this.apiURL}/devices/${home}/sync/`);
  }
}
