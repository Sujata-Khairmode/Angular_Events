import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-app';
  username="ram";
  imgpath= '/assets/images/user.png';

  clickme(){
    alert("hi")
  }

  num1=10;
}
