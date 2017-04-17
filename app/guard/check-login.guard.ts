import {CanActivate} from '@angular/router';
import{Injectable} from '@angular/core';
import {LoginService} from '../service/login.service';
@Injectable()
export class CheckLoginGuard implements CanActivate{

    constructor(private loginService: LoginService){

    }
    canActivate(){
        let status = this.loginService.IsLogged();

        if (status == false)
            alert("you dont have permision!");

        return status;
    }
}