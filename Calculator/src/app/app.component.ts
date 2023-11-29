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

  //number on screen
  term = '';
  

  //add up the operands
  addition(a : number, b : number) : number{

    return a+b;
  }

  //substract the two operands
  substraction(a : number, b : number) : number{
    return a - b;
  }

  //multiply the two operands
  multiplication(a : number, b : number) : number{
    return a * b;
  }

  //divide the two operands
  division(a : number, b : number) : number{
    return a / b;
  }

  //clear everything
  clear(){

  }


  //whenever the user presses the key
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    console.log(event);
    //console.log(this.mouseonresult);

    //retrieve the user input
    this.userinput = event.key;

    //exit the function in case of space input
    /*if(event.code == "="){
      return ;
    }

    if(event.code == "+"){
      return ;
    }

    if(event.code == "-"){
      return ;
    }

    if(event.code == "*"){
      return ;
    }

    if(event.code == "/"){
      return ;
    }*/

    //remove the last digit in the number on screen in case of backspace input
    if(event.code == "BackSpace"){
      console.log("erase");
    }

    /*if(isFinite(Number(this.userinput)) && !this.mouseclickonresult){
      this.term += this.userinput;
    }*/


  }

}
