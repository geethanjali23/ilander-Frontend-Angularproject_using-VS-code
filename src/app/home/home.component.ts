import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  res;
  filepath;
  constructor(private http:ApiService) { }

  ngOnInit() {
    this.gethomeData();
  }

  gethomeData()
  {
    this.http.getdetails().subscribe((out:any)=>{
      this.res=out.data;
      this.filepath=out.filepath;
      this.res.sort((a,b) => {return b.d_id-a.d_id});
     
      console.log(this.res);
      
    });
  }

}
