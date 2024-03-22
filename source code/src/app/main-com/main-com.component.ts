import { Component } from '@angular/core';

@Component({
  selector: 'app-main-com',
  templateUrl: './main-com.component.html',
  styleUrls: ['./main-com.component.css']
})
export class MainComComponent {

  start_but:boolean=false;
  start_game(){
    this.start_but=true;
  }

user:number=0;
num:number=0;
res:number=0;


t_match:number=0;

h_win:number=0;
h_draw:number=0;
h_lost:number=0;

m_win:number=0;
m_draw:number=0;
m_lost:number=0;

OverallWinner:string="";
human_res:string="";
machine_res:string="";



l_img_url:string="assets/images/L_paper.jpeg";
r_img_url:string="assets/images/R_paper.jpeg";

paper(){
  this.num=Math.floor(Math.random()*3)+1;
  this.user=10;
  this.res=this.user+this.num;
  this.final_result(this.res); 

}
rock(){
  this.num=Math.floor(Math.random()*3)+1;
  this.user=20;
  this.res=this.user+this.num;
  this.final_result(this.res);

}
sci(){
  this.num=Math.floor(Math.random()*3)+1;
  this.user=30;
  this.res=this.user+this.num;
  this.final_result(this.res);

}


final_result(a:number){
  if(this.t_match<5){
    switch(a){
      case 11:alert("paper wins");
         this.pap_win();
         break;
      case 12:alert("paper loss")
          this.pap_loss();
         break;
      case 13:alert("paper draw");
          this.pap_draw();
         break;   
      case 21:alert("rock wins");
          this.rock_win();
         break;
      case 22:alert("rock loss")
          this.rock_loss();
         break;
      case 23:alert("rock draw");
          this.rock_draw();
         break;  
      case 31:alert("scissor wins");
          this.scissor_win();
         break;
      case 32:alert("scissor loss")
          this.scissor_loss();
         break;
      case 33:alert("scissor draw");
          this.scissor_draw();
         break;   
    }
  }else{
    alert("GAME OVER");
    this.start_but=false;
    this.t_match=0;
    this.h_lost=0;
    this.h_draw=0;
    this.h_win=0;
    this.m_lost=0;
    this.m_draw=0;
    this.m_win=0;


  }

     
      

}

pap_win(){
this.t_match=this.t_match+1;  
this.h_win=this.h_win+2;
this.m_lost=this.m_lost+1;
this.l_img_url="assets/images/L_paper.jpeg";
this.r_img_url="assets/images/R_rock.jpeg";
}
pap_draw(){
this.t_match=this.t_match+1;  
this.h_draw=this.h_draw+1;
this.m_draw=this.m_draw+1;
this.l_img_url="assets/images/L_paper.jpeg";
this.r_img_url="assets/images/R_paper.jpeg";
  

}
pap_loss(){
this.t_match=this.t_match+1;
this.m_win=this.m_win+2;
this.h_lost=this.h_lost+1;
this.l_img_url="assets/images/L_paper.jpeg";
this.r_img_url="assets/images/R_sci.jpeg";

}
rock_win(){

this.t_match=this.t_match+1; 
this.h_win=this.h_win+2;
this.m_lost=this.m_lost+1;
this.l_img_url="assets/images/L_rock.jpeg";
this.r_img_url="assets/images/R_sci.jpeg";

}
rock_draw(){
  this.t_match=this.t_match+1;
  this.h_draw=this.h_draw+1;
  this.m_draw=this.m_draw+1;
this.l_img_url="assets/images/L_rock.jpeg";
this.r_img_url="assets/images/R_rock.jpeg";
}
rock_loss(){
  this.t_match=this.t_match+1;
  this.m_win=this.m_win+2;
  this.h_lost=this.h_lost+1;
this.l_img_url="assets/images/L_rock.jpeg";
this.r_img_url="assets/images/R_paper.jpeg";
  

}
scissor_win(){
  this.t_match=this.t_match+1;
  this.h_win=this.h_win+2;
  this.m_lost=this.m_lost+1;
this.l_img_url="assets/images/L_sci.jpeg";
this.r_img_url="assets/images/R_paper.jpeg";

}
scissor_draw(){
  this.t_match=this.t_match+1;
  this.h_draw=this.h_draw+1; 
  this.m_draw=this.m_draw+1;
this.l_img_url="assets/images/L_sci.jpeg";
this.r_img_url="assets/images/R_sci.jpeg";


}
scissor_loss(){
  this.t_match=this.t_match+1;
  this.m_win=this.m_win+2;
  this.h_lost=this.h_lost+1;
this.l_img_url="assets/images/L_sci.jpeg";
this.r_img_url="assets/images/R_rock.jpeg";


}


}
