import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Image } from '../domain/image';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getImages(): Promise<Image[]> {
  return this.http.get<any>('assets/showcase/data/photos.json')
    .toPromise()
    .then(res => <Image[]>res.data)
    .then(data => { return data; });
  }
}
