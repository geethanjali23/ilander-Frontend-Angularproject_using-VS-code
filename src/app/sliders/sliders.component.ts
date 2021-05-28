import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'
declare var $;
@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {
slider={img:null};
sliderup={img:null,img1:null,uid:null,Status:null};
msg="";
msg1="";
msgu="";
res;
filepath;
files: any;
clr={green:null,red:null};
  constructor(private http:ApiService) { }

  ngOnInit() {
    this.clr={green:false,red:false};
    this.getSlider();
  }
  //to get image data
  uploadImg(event: any){
    this.files = event.target.files[0];
    console.log(this.files);
  }
  //to add slider
  addslider()
  {
    const data = new FormData();
    data.append("servicesImage",this.files);
    this.http.addSliderapi(data).subscribe((result:any)=>{
        this.msg=result.message;
        if(result.status==1)
        {
          this.clr={green:true,red:false};
          this.getSlider();
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
  close1(){
    this.msgu="";
  }
  //to display sliders
  getSlider()
  {
    this.http.getsliders().subscribe((out:any)=>{
      this.res=out.data;
      this.filepath=out.filepath;
      this.res.sort((a,b) => {return b.slider_id-a.slider_id});
      let i=0;//declare one variable and assign value;
      let arr=[];//take one empty array to store data
      this.res.forEach((element:any)=>{
        i++;
        element['id']=i;//to add id elemnt in data, how many data we have ,the number of times data(ID) disply
        arr.push(element);//add ID value in data
      });
      this.res=arr; //again our total data in to data variable.
     
      console.log(arr);
      this.msg1="";
      //this.ngOnInit();
    });
  }
  //del slider
  delslider(y:any){
    if(confirm("Are u sure you want to delete ?")){
      console.log(y);
      const data= new FormData;
      data.append('slider_id',y);
      this.http.delSlider(data).subscribe((result:any)=>{
        console.log(result);
        this.msg1=result.message;
          if(result.status==1)
          {
            this.clr={green:true,red:false};
            this.getSlider();
          }
          else
          {
            this.clr={green:false,red:true};
          }
      }); 
    }
  }


  //edit slider
  editslider(id){
    $('#updateimg').modal('show');
    console.log(id);
    const d1= this.res.filter(x=> x.slider_id == id);
    console.log(d1);
    this.sliderup.img1=d1[0].slider_image;
    this.sliderup.uid=d1[0].slider_id;
    this.sliderup.Status=d1[0].slider_status;
  }
  updatesliders()
  {
    console.log(this.sliderup);
    const data=new FormData();
    data.append('slider_id',this.sliderup.uid);
    data.append('slider_image',this.files);
    data.append('slider_status',this.sliderup.Status);
    this.http.updateSliders(data).subscribe((out:any)=>{
      console.log(out);
      this.msgu=out.message;
          if(out.status==1)
          {
            this.clr={green:true,red:false};
            this.getSlider();
          }
          else
          {
            this.clr={green:false,red:true};
          }
    });
  }



}
