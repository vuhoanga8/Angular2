import { Component} from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template:
    `<h2> {{title | uppercase}} </h2>
    
     `
    ,
    
})
export class TutorialComponent {
    public title ="this is tutorial component";
}