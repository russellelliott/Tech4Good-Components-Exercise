import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WidgetAnimations } from './widget.animations';
import { LongTermGoal } from '../../../core/store/long-term-goal/long-term-goal.model';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: WidgetAnimations,
})
export class WidgetComponent implements OnInit {
  // --------------- INPUTS AND OUTPUTS ------------------

  /** The long term goal. */
  @Input() longTermGoal: LongTermGoal = {
    __id: 'ltg',
    __userId: 'test-user',
    oneYear: 'Improve my grades',
    fiveYear: 'Land a well paying job that I enjoy',
  };
    
  /** Initiate edit of long term goals. */
  @Output() editGoals: EventEmitter<void> = new EventEmitter<void>();

  // --------------- LOCAL AND GLOBAL STATE --------------

  // --------------- DATA BINDING ------------------------

  // --------------- EVENT BINDING -----------------------

  // --------------- HELPER FUNCTIONS AND OTHER ----------

  viewProject() {
    console.log('Viewing project!');
    console.log(this);
  }

  editProject() {
    console.log('Editing project!');

    // edit the one-year goal
    console.log(this.longTermGoal.oneYear);
    let oneYear = prompt("Enter a goal you want to achieve in 1 year.", this.longTermGoal.oneYear);
    if (oneYear != null) {
      this.longTermGoal.oneYear = oneYear;
    }

    // edit the five-year goal
    console.log(this.longTermGoal.fiveYear);
    let fiveYear = prompt("Enter a goal you want to achieve in 5 years.", this.longTermGoal.fiveYear);
    if (fiveYear != null) {
      this.longTermGoal.fiveYear = fiveYear;
    }
  }

  removeProject() {
    console.log('Removing project!');
  }

  constructor() { }

  ngOnInit(): void {
  }
}
