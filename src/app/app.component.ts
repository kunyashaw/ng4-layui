import { Component,OnInit } from '@angular/core';

declare var laydate: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  
  title = 'app';
  ngOnInit(){
    laydate.render({
      elem:'#test1',
      type:"datetime",
      theme:'#ff0000',
      done:(value,date,enddate)=>{
          console.log(value);
          console.log(date);
          console.log(enddate);
      }
    });
  }
  handleClick(){
    //执行一个laydate实例
    console.log(laydate);
    
  }
}
