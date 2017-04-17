import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { EmployeeDetailComponent } from '../employee-detail.component'
@Injectable()
export class CheckSaveFormGuard implements CanDeactivate<EmployeeDetailComponent>{
    canDeactivate(component: EmployeeDetailComponent) {
        alert("Cannot leave without save form!")
        return false;

    }
}