import { Component, OnInit } from '@angular/core';
import{HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getUser();
  }
  getUser(){
    this.http.get('http://ilandertech.com/api/index.php/Welcome/getStuUsers').subscribe((result:any)=>{
    console.log(result);
    console.log(result.data);
    this.data=result.data; //data is global variable
    
    //serial key generate 
    let i=0;//declare one variable and assign value;
    let arr=[];//take one empty array to store data

    this.data.sort((a,b) => {return b.user_id-a.user_id});
    this.data.forEach((element:any)=>{
        i++;
        element['id']=i;//to add id elemnt in data, how many data we have ,the number of times data(ID) disply
        arr.push(element);//add ID value in data
      });
      this.data=arr; //again our total data in to data variable.
     
      console.log(arr);
    });
  }
}
