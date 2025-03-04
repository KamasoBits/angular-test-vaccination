import { Component, OnInit } from '@angular/core';

class Patients{

constructor(

  public firstName :string,
  public middleName :string,
  public lastName:string,
  public dob :string,
  public sex:string,
  public email:string,
  public nok:string,


){}

}



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})


export class FormsComponent implements OnInit {



 public patients :Patients


 

  constructor() {
    this.patients = new Patients("kenya","nairobi","kawangware","1996","male","k.gmail.co.ke","lola")

    


  }

  ngOnInit(): void {
  }

}

