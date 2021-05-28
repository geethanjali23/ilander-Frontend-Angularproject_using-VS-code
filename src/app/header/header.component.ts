import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
res;
filepath;
  constructor(private http:ApiService) { }

  ngOnInit() {
    this.getSlider();
  }

  getSlider()
  {
    this.http.getslidersactive().subscribe((out:any)=>{
      this.res=out.data;
      this.filepath=out.filepath;
      this.res.sort((a,b) => {return b.slider_id-a.slider_id});
      console.log(this.res);
      //this.ngOnInit();
    });
  }

}
