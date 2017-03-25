import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1> Hello {{title}} </h1>
        <my-tutorial></my-tutorial>
    `,
})
export class AppComponent { 
    public title = "Vu Minh Hoang"

}

