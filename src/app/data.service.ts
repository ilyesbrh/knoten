import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient, private router: Router) {
  }

  URL = 'http://127.0.0.1:5000/api/';

  createProject(params) {
    this.http.post(this.URL + 'project/create', params).subscribe((v) => console.log(v));
    console.log(params);

  }
  async getProjects(role) {
    return await this.http.post(this.URL + 'project/post',
      { id: localStorage.getItem('id'), role }).pipe(map((v: any) => v.result)).toPromise();
  }

  signup(params) {
    console.log(params);

    this.http.post(this.URL + 'signUp',
      {
        email: params.email,
        password: params.password,
        first_name: params.first,
        last_name: params.last,
        fields: params.fields.split(' '),
        about: params.about
      }).subscribe((v: any) => {
        localStorage.setItem('id', v.result);
        console.log(v);
        if (!!v.result) {
          this.router.navigate(['/home']);
          return true;
        }
      }
      );
  }


}
