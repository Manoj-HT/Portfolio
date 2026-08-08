import { Injectable, signal } from '@angular/core';

type BackgroundOptionsType = {
  classname: string;
  img: string;
}

@Injectable({
  providedIn: 'root',
})
export class BackgroundService {
  private initObject = {
    classname: "",
    img: "1.svg"
  }
  public readonly backgroundOptions = signal<BackgroundOptionsType>(this.initObject);

  setCustomClass(className: BackgroundOptionsType): void {
    this.backgroundOptions.set(className);
  }

  clearCustomClass(): void {
    this.backgroundOptions.set(this.initObject);
  }
}
