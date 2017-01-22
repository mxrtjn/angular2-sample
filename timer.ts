import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'timer',
    template: '<h1>{{ minutes }}: {{ seconds }}</h1>'
})
class TimerComponent{
    minutes: number;
    seconds: number;

    constructor(){
       this.resetTimer();
       setInterval(() => this.tick(), 1000);
    }

    private resetTimer(){
       this.minutes = 24;
       this.seconds = 59;
    }

    private tick(): void{
        if( --this.seconds < 0){
            this.seconds = 59;
            if(--this.minutes < 0){
                this.minutes = 24;
                this.seconds = 59;
            }
        }
    }//end tick
}//end TimerComponent

bootstrap(TimerComponent);//Componente es boostrapped!