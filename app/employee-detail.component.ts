import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './service/employee.service';
import { Subscription } from 'rxjs';


@Component({
    selector: 'employee-detail-component',
    templateUrl: './app/employee-detail.component.html',

})
export class EmployeeDetailComponent implements OnInit, OnDestroy {
    public _id: number;
    public subscription: any;
    public employee: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute,
        public employeeService: EmployeeService
    ) {
       
    }
    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this._id = params['id'];
        });
        this.employeeService.GetSingle(this._id).subscribe((data) =>{
            this.employee = data;
        });

    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}