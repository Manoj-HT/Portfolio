import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NavService } from '../navigation/nav-service/nav.service';
import { HttpClient } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'home-page',
    imports: [NgOptimizedImage],
    templateUrl: './home.component.html',
    styleUrl: './home.component.less'
})
export class HomeComponent implements OnInit, OnDestroy {
  private navService = inject(NavService);
  private http = inject(HttpClient)
  ngOnInit(): void {
    this.navService.setTitle(false);
  }


  dragged(e: Event) {
    console.log('dragged', e);
  }

  dragStart(e: Event) {
    console.log('start', e);
  }
  dragEnd(e: Event) {
    console.log('end', e);
    let dragEnd = (e as DragEvent).clientY;
    if (dragEnd > 600) {
      alert('secret route');
    }
  }
  ngOnDestroy(): void {
    this.navService.setTitle(true);
  }
}
