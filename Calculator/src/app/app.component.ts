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

  //result of the calculation
  result = 0;

  mouseonresult : boolean = false;
  mouseclickonresult : boolean = false;


  //change the operator
  applyoperator(operator : string){
    
    this.updateTerms(operator);
    /*if(this.rightoperand != 0){
      this.calculate();
      return ;
    }*/
    

  }

  //execute the calculation
  calculate(){
    this.rightoperand = +this.term
    this.calloperator(this.operator);
    this.term = "" + this.result;
    this.leftoperand = +this.term;
    this.rightoperand = 0;
  }

  //call the right operator according to the user input
  calloperator(operator : string){

    var left = Number(this.leftoperand);
    var right = Number(this.rightoperand);

    if(operator == "+"){
      this.result = this.addition(left,right);
    }

    else if(operator == "-"){
      this.result = this.substraction(left,right);
    }

    else if(operator == "x"){
      this.result = this.multiplication(left,right);
    }

    else if(operator == "/"){
      this.result = this.division(left,right);
    }
  
  }

  //Update terms of operation
  updateTerms(operator : string){
      this.operator = operator;

      this.leftoperand = +this.term;
       
      this.term = "";
            

  }

  //add digit to the term by clicking on a number button
  addtermclick(t : string){
    this.term += t;

    this.mouseonresult = false;
    this.mouseclickonresult = false;
  }

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

  //determine whether or not the cursor is focused on the term screen
  clickdetected(){
    if(this.mouseonresult)
      this.mouseclickonresult = true;

   // console.log(this.mouseonresult);
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

    if(isFinite(Number(this.userinput)) && !this.mouseclickonresult){
      this.term += this.userinput;
    }


  }

}
