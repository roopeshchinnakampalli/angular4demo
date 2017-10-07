import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[my-highlight]'
})

export class MyHighlighterDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.background = 'yellow';
    }
}