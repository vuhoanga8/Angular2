import {Component} from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: 
        `<h2> {{title}} </h2>
        <button (click) ="OnClick(name.value)">click me</button>
        <input type="text" #name />
        `
        ,
    
})
export class TutorialComponent{
    title = "this is tutorial component"

    OnClick(value){
        console.log(value);
    }
}