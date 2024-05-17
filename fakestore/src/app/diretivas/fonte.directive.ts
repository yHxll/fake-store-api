import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[fonte]'
})
export class FonteDirective {

  constructor() { }
  @HostBinding('style.fontFamily') tipo = 'Arial'
  @HostBinding('style.transform') tamanho = 'scale(1)'
  @HostBinding('style.transition') transicao = 'transform 0.5s'
  
  @HostListener('mouseover') aumenta(){
    this.tamanho = 'scale(1.2)'
  }
  @HostListener('mouseleave') diminui(){
    this.tamanho = 'scale(1)'
  }

}
