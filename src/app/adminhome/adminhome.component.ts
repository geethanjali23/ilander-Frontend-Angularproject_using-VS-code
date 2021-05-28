import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
declare var $;
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  myObj={dname:null,img:null,desc:null,did:null};
  msg='';
  msgd="";
  msg1="";
  res;
  filepath;
  files: any;
  clr={green:null,red:null};

  constructor(private http:ApiService) { }

  ngOnInit() {
    this.clr={green:false,red:false};
    this.gethomeData();
  }

  uploadImg(event: any){
    this.files = event.target.files[0];
    //console.log(this.files);
  }

  addpara(){
    const data = new FormData();
    data.append("d_name",this.myObj.dname); 
    data.append("d_img",this.files);
    data.append("d_desc",this.myObj.desc);
    //console.log(data);
    this.http.addDescription(data).subscribe((result:any)=>{
        this.msg=result.message;
        if(result.status==1)
        {
          this.clr={green:true,red:false};
          this.gethomeData();
        }
        else
        {
          this.clr={green:false,red:true};
        }
    });
  }
  close()
  {
    this.msg="";
  }

  gethomeData()
  {
    this.http.getdetails().subscribe((out:any)=>{
      this.res=out.data;
      this.filepath=out.filepath;
      this.res.sort((a,b) => {return b.d_id-a.d_id});
      let i=0;//declare one variable and assign value;
      let arr=[];//take one empty array to store data
      this.res.forEach((element:any)=>{
        i++;
        element['id']=i;//to add id elemnt in data, how many data we have ,the number of times data(ID) disply
        arr.push(element);//add ID value in data
      });
      this.res=arr; //again our total data in to data variable.
     
      console.log(arr);
      this.msgd='';
    });
  }

  delete1(x){
    if(confirm("Are you sure to delete"))
    {
    const data1=new FormData();
      data1.append("d_id",x);

      this.http.delhomedetails(data1).subscribe((result:any)=>{
        console.log(result);
        this.msgd=result.message;
        if(result.status==1)
        {
          this.gethomeData();//for refreshing page when we deleting
          this.clr={green:true,red:false};
        }
        else{
          this.clr={green:false,red:true};
        }
      });

    }
  }

  edit1(id)
  {
    $("#myModal1").modal('show'); //jqueryy
    //console.log(id);
    const d1=this.res.filter(x=>x.d_id===id); //take one varible and matched data to store in that varible
    //here x is our total data assume, and x.user_id===id compare 
    console.log(d1);

    this.myObj.dname=d1[0].d_name; //use twoway binding and we disply data in html file
    this.myObj.desc=d1[0].d_desc;
    this.myObj.img=d1[0].d_img;
    this.myObj.did=d1[0].d_id;
  }

  updateme1()
  {
    const d=new FormData();
    d.append("d_name",this.myObj.dname);
    d.append("d_desc",this.myObj.desc);
    d.append("d_img",this.myObj.img);
    d.append("d_id",this.myObj.did);
    this.http.updatehomedata(d).subscribe((output:any)=>{
    console.log(output);
    this.msg1=output.message;
        if(output.status==1)
        {
          this.gethomeData();//refresh the table when update details
          this.clr={green:true,red:false};
        }
        else{
          this.clr={green:false,red:true};
        }
  });
  }
  clss(){
    this.msg1="";
  }
}
