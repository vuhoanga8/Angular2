import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1> Hello {{title | lowercase}} </h1>
        <p>Date today: {{today | date: 'shortDate'}}</p>
        <p> Percent: {{percentNumber | percent}}</p>
        <p> e: {{e | number}}
        <my-tutorial></my-tutorial>
    `,
})
export class AppComponent {
    public title = "Vu Minh Hoang";
    public today =  Date.now();
    public percentNumber= 1.3495;
    public e:number= 2.1236489547;
}

