import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'hello-world',
    template: '<h1>{{text}}</h1>'
})
class HelloWorldComponent{
    text: string;
    constructor(){
        this.text = '¡Hola Mundo! Angular 2';
    }
}

bootstrap(HelloWorldComponent);