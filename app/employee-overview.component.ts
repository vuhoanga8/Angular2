import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'employee-overview-component',
    template: `<h3> employee overview </h3>
    <div>Parent Id: {{getParentId()}}</div>
        
        
    `,

})
export class EmployeeOverViewComponent implements OnInit, OnDestroy {
    public  parenRouterId: number;
    public sub: Subscription;
    constructor(private router:Router, private activatedRoute: ActivatedRoute){

    }
    ngOnInit(){
        // this.sub = this.activatedRoute.parent.params.subscribe(params =>{
        //     this.parenRouterId = params['id'];
        //     console.log(this.parenRouterId);
        // });
    }
    ngOnDestroy(){

    }

    getParentId(){
         this.sub = this.activatedRoute.parent.params.subscribe(params =>{
            this.parenRouterId = params['id'];
        });
        return this.parenRouterId;
    };
   
}