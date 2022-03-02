import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  model!:Telefonkonyv[];
  
  constructor() { }

  ngOnInit(): void {
    this.model=[
      {
        "name": "Tanya Middleton",
        "email": "tanyamiddleton@centrexin.com",
        "phone": "+1 (804) 494-2733"
    },
    {
        "name": "Lauren Hughes",
        "email": "laurenhughes@centrexin.com",
        "phone": "+1 (800) 413-3644"
    },
    {
        "name": "Amber Waller",
        "email": "amberwaller@centrexin.com",
        "phone": "+1 (813) 435-3645"
    },
    {
        "name": "Woodward Olson",
        "email": "woodwardolson@centrexin.com",
        "phone": "+1 (871) 430-3016"
    },
    {
        "name": "Roxanne Mathews",
        "email": "roxannemathews@centrexin.com",
        "phone": "+1 (886) 480-2753"
    },
    {
        "name": "Daniel Taylor",
        "email": "danieltaylor@centrexin.com",
        "phone": "+1 (996) 470-2032"
    },
    {
        "name": "Salas Willis",
        "email": "salaswillis@centrexin.com",
        "phone": "+1 (864) 584-2562"
    }
    ]
  }

}

export interface Telefonkonyv{
  name:string;
  email:string;
  phone:string;

}