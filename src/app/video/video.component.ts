import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  showHidePlay: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  playPause() {

    const myVideo: any = document.getElementById("family");
    if (myVideo.paused){
      myVideo.play();
      this.showHidePlay = true;
    }
    else {
      myVideo.pause();
      this.showHidePlay = false;

    }
  }
}
