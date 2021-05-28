import { Component, OnInit } from '@angular/core';
import{Router} from "@angular/router";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData;
  constructor(private r:Router) { }

  ngOnInit() {
    const a=localStorage.getItem('user');
    this.r.navigate(['/dashboard/users']);
    //console.log(a);
    //const userData=JSON.parse(a);
    //console.log(userData);
    //console.log(userData.user_fname);
    this.userData=JSON.parse(a);
    //console.log(this.userData.user_fname);
    if(this.userData==null){
      this.r.navigate(['/admin']);
    }
  }
  logout(){
   
    localStorage.clear();
    this.r.navigate(['/admin']);
  }
}
