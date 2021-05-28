import { Component, OnInit } from '@angular/core';
import{HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myObj={fname:null,lname:null,mail:null,ph:null,pwd:null};
  output="";

  clr={green:null,red:null};

  constructor(private api:HttpClient) { }

  ngOnInit() {
    this.clr={green:false,red:false};
  }
  reg(){

    const data=new FormData();//here we create local varible using const ,data is varible name
    data.append("fname",this.myObj.fname);
    data.append("lname",this.myObj.lname);
		data.append("email",this.myObj.mail);
		data.append("ph",this.myObj.ph);
		data.append("pwd",this.myObj.pwd);

    this.api.post("http://ilandertech.com/api/index.php/Welcome/AddStuRegister",data).subscribe((b:any)=>{
      console.log(b);
      this.output=b.message; //here b is coming from DATABASE and ANY DATA we will resive so we write "any" , it means any data we will receive
      if(b.status==1)
      {
        this.clr={green:true,red:false};
      }
      else{
        this.clr={green:false,red:true};
      }
    });
  }
}
