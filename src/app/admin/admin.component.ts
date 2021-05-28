import { Component, OnInit } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import{Router}from"@angular/router";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  myObj={mail:null,pwd:null};
  status1="";
  clr={green:null,red:null};
  constructor(private api:HttpClient,private r:Router) { }

  ngOnInit() {
    this.clr={green:false,red:false};
  }
  reg(){
    console.log(this.myObj);
      const data1=new FormData();//here we create local varible using const ,data is varible name
     
      data1.append("userEmail",this.myObj.mail);
      data1.append("userPassword",this.myObj.pwd);
  
      this.api.post('http://ilandertech.com/api/index.php/Welcome/StuLogin',data1).subscribe((c:any)=>{
  
        console.log(c.data);
        this.status1=c.message; //here c is coming from DATABASE and ANY DATA we will resive so we write "any" , it means any data we will receive
  
        if(c.status==1)
        {
          this.clr={green:true,red:false};
          const jsonData=JSON.stringify(c.data[0]);
          localStorage.setItem('user',jsonData);
          this.r.navigate(['/dashboard']);
        }
        else{
          this.clr={green:false,red:true};
        }
      })
    }
}
