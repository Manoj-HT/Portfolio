import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetsManagerService {
 private http = inject(HttpClient)

 getVariables(){
  return this.http.get<AssetVariablesType>('/assets/variables/variables.json')
 }
}

export type AssetVariablesType = {
  resumeLink : string;
}