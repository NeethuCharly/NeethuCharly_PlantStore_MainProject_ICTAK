import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Plant Store';
  constructor(public _auth:AuthService,
    private _router:Router){

}
logoutUser()
{
localStorage.removeItem('token')
this._router.navigate(['/home'])
}
loggedUser()
{
  this._router.navigate(['/add'])
}
userslogged()
{
  this._router.navigate(['/loggedusers'])
}
}