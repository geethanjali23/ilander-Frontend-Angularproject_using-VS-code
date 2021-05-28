import { Component, OnInit } from '@angular/core';
import{HttpClient} from "@angular/common/http";
declare var $;
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(private http:HttpClient) { }

  data:any;
  msg="";
  msg1="";
  updateObj={uid:null,fname:null,lname:null,emil:null,Phne:null};

  clr={green:null,red:null};

  ngOnInit() {
    this.getUser();
    this.clr={green:false,red:false};
  }
  getUser(){
    this.http.get('http://ilandertech.com/api/index.php/Welcome/getStuUsers').subscribe((result:any)=>{
    this.msg="";
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
  }//getusers

  delete1(x){
    if(confirm("Are you sure to delete"))
    {

    const data1=new FormData();
    data1.append("u_id",x);
    console.log(x);
    this.http.post('http://ilandertech.com/api/index.php/Welcome/DeleteStuUsers',data1).subscribe((result:any)=>{
      console.log(result);
      this.msg=result.message;
      if(result.status==1)
      {
        this.getUser();
        this.clr={green:true,red:false};
      }
      else{
        this.clr={green:false,red:true};
      }
    });
  }
}//delet end

edit1(id){
 $("#myModal").modal('show'); //jqueryy
    //console.log(id);
    const d1=this.data.filter(x=>x.user_id===id); //take one varible and matched data to store in that varible
    //here x is our total data assume, and x.user_id===id compare 
    console.log(d1);

    this.updateObj.fname=d1[0].user_fname; //use twoway binding and we disply data in html file
    this.updateObj.lname=d1[0].user_lname;
    this.updateObj.emil=d1[0].user_email;
    this.updateObj.Phne=d1[0].user_phone;
    this.updateObj.uid=d1[0].user_id;
}//modalopen

updateme(){
 const d=new FormData();
    d.append("user_id",this.updateObj.uid);
    d.append("user_fname",this.updateObj.fname);
    d.append("user_lname",this.updateObj.lname);
    d.append("user_email",this.updateObj.emil);
    d.append("user_phone",this.updateObj.Phne);

  this.http.post("http://ilandertech.com/api/index.php/Welcome/updateStuUsers",d).subscribe((output:any)=>{
    console.log(output);
    this.msg1=output.message;
        if(output.status==1)
        {
          this.getUser();//refresh the table when update details
          this.clr={green:true,red:false};
        }
        else{
          this.clr={green:false,red:true};
        }
  });
}
  clss()
  {
    this.msg1="";
  }
}
