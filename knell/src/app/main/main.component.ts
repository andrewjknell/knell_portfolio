import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  idx = 0;
  idx2 = 0;
  position = 0;
  position2 = 0;
  constructor() { }

  ngOnInit() {
  }
  goLeft(){
    if(this.idx == 0){

    } else {
      this.idx -= 1;
      this.position -= 680;
      document.getElementById('controlOne').scroll(
        {
          top:0, 
          left:this.position,
          behavior:"smooth"
        });

    }
  }
  goRight(){
    if(this.idx == 2){

    } else {
      this.idx += 1;
      this.position += 680;
      document.getElementById('controlOne').scroll(
        {
          top:0, 
          left:this.position,
          behavior:"smooth"
        });
    }
  }

  goLeft2(){
    if(this.idx2 == 0){

    } else {
      this.idx2 -= 1;
      this.position2 -= 680;
      document.getElementById('controlTwo').scroll(
        {
          top:0, 
          left:this.position2,
          behavior:"smooth"
        });

    }
  }
  goRight2(){
    if(this.idx2 == 1){

    } else {
      this.idx2 += 1;
      this.position2 += 680;
      document.getElementById('controlTwo').scroll(
        {
          top:0, 
          left:this.position2,
          behavior:"smooth"
        });
    }
  }
  scrollTo(id) {
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
  }



}
