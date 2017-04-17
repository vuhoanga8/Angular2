import { Component, OnInit } from '@angular/core';
import{ LoginService} from './service/login.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
})
export class AppComponent implements OnInit {
    public isLoggedin:boolean;
    constructor(private loginService: LoginService){

    }
    ngOnInit(){
        this.isLoggedin = this.loginService.IsLogged();
    }
    Logout(){
        this.loginService.SetLogin(false);
        console.log('logged out');
    }
    
}

