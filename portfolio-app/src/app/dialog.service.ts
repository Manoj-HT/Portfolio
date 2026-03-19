import { Injectable, signal } from '@angular/core';

export interface DialogData {
  type: 'project' | 'skill';
  title: string;
  description: string;
  // Project specific
  technologies?: string;
  timePeriod?: string;
  company?: string;
  // Skill specific
  category?: string;
  proficiency?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  isOpen = signal<boolean>(false);
  data = signal<DialogData | null>(null);

  open(dialogData: DialogData) {
    this.data.set(dialogData);
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
    setTimeout(() => this.data.set(null), 300); // clear data after animation
  }
}
