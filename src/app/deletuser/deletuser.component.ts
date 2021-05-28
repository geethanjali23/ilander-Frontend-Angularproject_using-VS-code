import { Component, OnInit } from '@angular/core';
import{HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-deletuser',
  templateUrl: './deletuser.component.html',
  styleUrls: ['./deletuser.component.css']
})
export class DeletuserComponent implements OnInit {

  constructor(private http:HttpClient) { }
  data:any;
  msg="";//for message disply purpose
  clr={green:null,red:null};
  ngOnInit() {
    this.getUser();
    this.clr={green:false,red:false};
  }
  getUser(){
    this.http.get('http://ilandertech.com/api/index.php/Welcome/getStuUsers').subscribe((result:any)=>{
    this.msg=null;
    this.data=result.data; 
    let i=0;
    let arr=[];
    this.data.sort((a,b) => {return b.user_id-a.user_id});
    this.data.forEach((element:any)=>{
        i++;
        element['id']=i;
        arr.push(element);
      });
      this.data=arr;
      console.log(arr);
    });
  }

  delete1(x){
//console.log(x);
  if(confirm("Are you sure to delete"))
  {
    const data1=new FormData();
      data1.append("u_id",x);

      this.http.post('http://ilandertech.com/api/index.php/Welcome/DeleteStuUsers',data1).subscribe((result:any)=>{
        console.log(result);
        this.msg=result.message;
        if(result.status==1)
        {
          this.getUser();//for refreshing page when we deleting
          this.clr={green:true,red:false};
        }
        else{
          this.clr={green:false,red:true};
        }
      });

  }
  }

}
