import {Directive, Input, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[counterOf]'
})
export class CounterDirective {

  @Input('counterOf')
  counter: Array<number> = [];

  constructor(private container : ViewContainerRef,
              private template: TemplateRef<Object>) { }

  ngOnChanges(changes: SimpleChanges) {
    this.container.clear();
    for (let i = 0; i < this.counter.length; i++) {
      this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i+1))
    }
  }
}

class CounterDirectiveContext {

  constructor(public $implicit: any) {
  }
}
