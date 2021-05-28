import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }
  api='http://ilandertech.com/api/index.php/Welcome/';
  addSliderapi(obj)
  {
    return this.http.post(this.api+'AddStuSliders',obj);
  }
  getsliders()
  {
    return this.http.get(this.api+'GetStuSlider');
  }
  delSlider(obj)
  {
    return this.http.post(this.api+'DeleteStuSlider',obj);
  }
  updateSliders(obj)
  {
    return this.http.post(this.api+'updateStuSlider',obj);
  }
  getslidersactive()
  {
    return this.http.get(this.api+'GetStuSliderActive');
  }
  addDescription(obj)
  {
    return this.http.post(this.api+'AddStuDesc',obj);
  }
  getdetails()
  {
    return this.http.get(this.api+'GetStuDesc');
  }
  delhomedetails(obj)
  {
    return this.http.post(this.api+'DeleteStuDesc',obj);
  }
  updatehomedata(obj)
  {
    return this.http.post(this.api+'updateStuDesc',obj);
  }
  
}
