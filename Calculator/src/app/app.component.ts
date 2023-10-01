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
  leftoperand = "";
  rightoperand = "";
  operator = ''

  //term
  term = "";

  mouseonresult : boolean = false;
  mouseclickonresult : boolean = false;

  //change the operator
  changeoperator(operator : string){

    /*if(this.rightoperand !=""){

      return ;
    }

    this.operator = operator;
    this.leftoperand = this.term;
    this.term = "";*/
    
  }

  addtermclick(t : string){
    this.term += t;

    this.mouseonresult = false;
    this.mouseclickonresult = false;
  }

  addition(a : number, b : number) : number{

    return a+b;
  }

  substraction(a : number, b : number) : number{
    return a - b;
  }

  multiplication(a : number, b : number) : number{
    return a * b;
  }

  division(a : number, b : number) : number{
    return a / b;
  }

  clear(){

  }

  clickdetected(){
    if(this.mouseonresult)
      this.mouseclickonresult = true;

    console.log(this.mouseonresult);
  }


  //whenever the user presses the key
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    console.log(event);
    console.log(this.mouseonresult);

    //retrieve the user input
    this.userinput = event.key;

    //exit the function in case of space input
    if(event.code == "Space"){
      return ;
    }

    //remove the last digit in the number on screen in case of backspace input
    if(event.code == "BackSpace"){
      console.log("erase");
    }

    if(isFinite(Number(this.userinput)) && !this.mouseclickonresult){
      this.term += this.userinput;
    }


  }

}
