import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients-info',
  templateUrl: './patients-info.component.html',
  styleUrls: ['./patients-info.component.scss']
})
export class PatientsInfoComponent implements OnInit {

  public temperature = ""
  public pulseRate = ""
  public respiratoryRate = ""
  public bloodPressure = ""
  public SpO2 = ""


  constructor() { }

  ngOnInit(): void {
  }

}


