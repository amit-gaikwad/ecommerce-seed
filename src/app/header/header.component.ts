import { Component, OnInit } from '@angular/core';
//import { AuthService } from "../shared/services/auth.service";
//import { UserService } from "../shared/services/user.service";
import { Router } from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string = null;
  token: string = null;
  msg:string = null;

  constructor(
    //private authService: AuthService,
    private router: Router,
    //private userService: UserService
  ) { }

  ngOnInit() { 
    this.username = 'guest1';
    this.token = 'jdksfklsdafjwerjwerpwe';
    

   /* window.onscroll = function () { myFunction() };

    var header = document.getElementById("myHeader");

    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");

      } else {
        header.classList.remove("sticky");

      }
    }*/
    
  }

 

  onSignOutSubmit() {
  }
}
