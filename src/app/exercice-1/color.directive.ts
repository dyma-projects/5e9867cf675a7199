import { Directive, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {

  @HostBinding("style.color") color: string;

  @HostListener('window:keydown', ['$event']) onKeydown($event) {
    switch ($event.key) {
      case 'ArrowUp':
        this.color = 'red';
        break;
      case 'ArrowDown':
        this.color = 'blue';
        break;
      case 'ArrowLeft':
        this.color = 'cyan';
        break;
      case 'ArrowRight':
        this.color = 'green';
        break
      default:
        this.color = 'inherit';
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.color = "inherit";
  }

}
