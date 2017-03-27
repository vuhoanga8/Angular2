import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template:
    `<h2> {{title}} </h2>
    <p>Child component: {{name}}</p>

    <button [disabled]="voted" (click)="vote(true)">Agree</button>
    <button [disabled]="voted" (click)="vote(fasle)">Disgree</button>

    Result:  {{voted}}
     `
    ,
    
})
export class TutorialComponent {
    @Input() name:string;
    @Output() onVote = new EventEmitter<boolean>();


    public voted:boolean = false;

    vote(agree:boolean){
        this.voted = true;
        this.onVote.emit(agree);
    }

    setName(name: string){
        this.name = name;
    }
}