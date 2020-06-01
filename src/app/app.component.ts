import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

    memes: string[] = [
    'oprah.jpg', 'costanza.jpg', 'sean_bean.jpg'
  ];

  currentMeme: string;

  ngOnInit(): void {
    const currentRandom = 1 + Math.floor(Math.random() * this.memes.length);
    console.log('Random is ', currentRandom);
    this.currentMeme = './assets/images/' + this.memes[currentRandom - 1];
  }
}
