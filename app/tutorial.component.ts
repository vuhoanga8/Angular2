import {Component} from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: 
        `<h2> {{title}} </h2>
        first name <input type ="text" [(ngModel)] = "fname" /> 
        last name <input type ="text" [(ngModel)] = "lname" /> 
        <br>
        Full name : {{fname}} {{lname}}
        `
        ,
    
})
export class TutorialComponent{
    title = "this is tutorial component"
}