import { Component } from '@angular/core';
import { Memory, inputMemories} from './models/memory';
import { States } from './models/states.enum';
import * as _ from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  finished = false;
  mem1 = inputMemories;
  mem2 = this.duplicateIds(inputMemories);
  memories: Memory[] = this.shuffleArray(this.mem1.concat(this.mem2));

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  duplicateIds(array: Memory[]): Memory[] {
    return array.map(memory => {
      const newMemory = Object.assign({}, memory);
      newMemory.id = newMemory.id + 25;
      return newMemory;
    });
  }

  checkFlip(memory: Memory) {
    if (memory.status === States.FOUND) {
      return;
    }
    const activeMemories = this.memories.filter(
      m => m.status === States.ACTIVE
    );
    if (memory.status === States.HIDDEN) {
      switch (activeMemories.length) {
        case 0:
          this.updateMemoryStatus([memory.id], States.ACTIVE);
          break;
        case 1:
          const activeMemory = activeMemories[0];
          if (
            Math.max(activeMemory.id, memory.id) /
              Math.min(activeMemory.id, memory.id) ===
            2
          ) {
            this.updateMemoryStatus([activeMemory.id, memory.id], States.FOUND);
            this.checkFinished();
          } else {
            this.updateMemoryStatus([memory.id], States.ACTIVE);
            setTimeout(() => {
              this.updateMemoryStatus(
                [activeMemory.id, memory.id],
                States.HIDDEN
              );
            }, 2000);
          }
          break;
        case 2:
          this.updateMemoryStatus(activeMemories.map(m => m.id), States.HIDDEN);
          this.updateMemoryStatus([memory.id], States.ACTIVE);
          break;
        default:
          break;
      }
    } else {
      if (activeMemories.length === 2) {
        this.updateMemoryStatus(activeMemories.map(m => m.id), States.HIDDEN);
      }
    }
  }

  updateMemoryStatus(ids: number[], statusUpdate: States) {
    this.memories = this.memories.map(m => {
      if (ids.includes(m.id)) {
        const newM = Object.assign({}, m);
        newM.status = statusUpdate;
        return newM;
      }
      return m;
    });
  }

  checkFinished() {
    this.finished = _.every(this.memories, mem => mem.status === States.FOUND);
  }
}
