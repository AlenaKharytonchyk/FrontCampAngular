import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent {

  @Input() label: string;
  @Output() Click = new EventEmitter<any>();

  onClickbutton($event: MouseEvent) {
    this.Click.emit($event);
  }
}
