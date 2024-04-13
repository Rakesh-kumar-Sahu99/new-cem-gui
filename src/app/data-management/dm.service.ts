import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DMService {

  private baseUrl = "http://localhost:8082";
  constructor(private httpClient: HttpClient) {

  }
  saveDataSource(formData:FormData):Observable<any>{
    const url = `${this.baseUrl}/createdatasource`;
    return this.httpClient.post<any>(url, formData).pipe(
      catchError(error => {
        throw error;
      })
    );
  }

  getDataSource() :Observable<any> {
    const url = `${this.baseUrl}/getalldatasource`;
    return this.httpClient.get<any>(url).pipe(
      catchError(error => {
        throw error;
      })
    );
  }
  getDatabases() {
    return this.httpClient.get("http://localhost:8082/getalldatabase");
  }
  getEntityName(entityName:String){
    return this.httpClient.get("http://localhost:8082/getallentities/"+entityName);
  }
  getColumns(dbName:String,entityName:String){
    return this.httpClient.get("http://localhost:8082/gettableinfo/"+dbName+"/"+entityName);
  }

  // saveDataService(jsonpayload:any){
  //   return this.httpClient.post
  // }
}
