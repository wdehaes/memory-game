import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { Memory } from '../models/memory';
import { States } from '../models/states.enum';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() memory: Memory;
  @Output() flipper = new EventEmitter<Memory>();
  constructor() { }

  ngOnInit() {
  }

  get flipped(): boolean {
    return this.memory.status !== States.HIDDEN;
  }
  flip() {
    this.flipper.emit(this.memory);
  }

}
