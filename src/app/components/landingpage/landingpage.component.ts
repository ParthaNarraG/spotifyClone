import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  navLinks:any=['Premium','Support','Download','Sign up','Log in'];
  constructor() { }

  ngOnInit(): void {
  }

}
