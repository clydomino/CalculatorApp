import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';

  //what user types with the keyboard
  userinput = '';

  //operation parts
  leftoperand = 0;
  rightoperand = 0;
  operator = ''

  //term
  term = "";

  //whenever the user presses the key
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    console.log(event);
    this.userinput = event.key;

    if(isFinite(Number(this.userinput))){
      this.term += this.userinput;
    }

  }

}
