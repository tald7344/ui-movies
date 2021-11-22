import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminConfig } from 'src/app/pages/AdminConfig';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

}
