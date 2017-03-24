import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1> Hello {{title}} </h1>
        <img [src]="image">
        <my-tutorial></my-tutorial>
        <input type="text" [value]="welcomeText"/>
    `,
})
export class AppComponent { 
    public title = "Vu Minh Hoang"

    //properties binding
    public image = "http://lorempixel.com/300/300"

    public welcomeText = "welcome to my website"
}
