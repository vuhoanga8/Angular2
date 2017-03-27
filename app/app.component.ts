import { Component, ViewChild } from '@angular/core';
import { TutorialComponent } from './tutorial.component';

@Component({
    selector: 'my-app',
    template: `
        <h1> Hello {{title}} </h1>
        <input type="text" #textName (keyup)="0" />
        <p>Agree number: {{agree}}. Disagree: {{disgree}}</p>
        <button (click)="changeName()">Change name</button>
        <my-tutorial *ngFor="let person of names" [name]="person" (onVote)="parentVote($event)"></my-tutorial>
    `,
})
export class AppComponent {
    public title = "Vu Minh Hoang"

    public agree: number = 0;
    public disgree: number = 0;
    public names = ['MR A', 'Mr B', 'Mr C', 'Mr D'];

    @ViewChild(TutorialComponent)
    private tutorialComponent: TutorialComponent;
    

    parentVote(agree: boolean) {
        if (agree) this.agree++;
        else this.disgree++;
    }

    changeName(){
        this.tutorialComponent.setName("change name to this");
    }


}

