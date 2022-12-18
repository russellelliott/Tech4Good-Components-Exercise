import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent implements OnInit {
  
  @Input() message: string;
  @Input() name: string;
  @Input() major: string;

  constructor() { 
  }

  ngOnInit() {
  }

  repeatedName() {
    return this.name + this.name + this.name;
  }

}
