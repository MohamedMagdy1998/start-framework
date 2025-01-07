import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  imageSource: string = '';
  isClicked: boolean = false;


  display(imgPath: string): string {
    this.imageSource = imgPath;
    this.isClicked = true;
    return (this.imageSource);

  }

}

