import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent implements OnInit {
  
  /*@Input() message: string;
  @Input() name: string;
  @Input() major: string;*/
  /** An object representing details about a project */
  @Input() project;

  /** Edit a project */
  @Output() editProj: EventEmitter<void> = new EventEmitter<void>();
  
  /** Remove a project */
  @Output() removeProj: EventEmitter<void> = new EventEmitter<void>();
  
  /** View a project */
  @Output() goToProj: EventEmitter<void> = new EventEmitter<void>();

  constructor() { 
  }

  ngOnInit() {
  }

}
