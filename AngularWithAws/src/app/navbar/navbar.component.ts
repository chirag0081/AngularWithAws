import { Component, OnInit } from '@angular/core';
import { Appsettings } from '../appsettings';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public appSetting: Appsettings) { }

  ngOnInit(): void {
  }

}
