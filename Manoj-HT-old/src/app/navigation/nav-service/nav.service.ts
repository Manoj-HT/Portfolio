import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  isTitleOn = signal<boolean>(true);
  isTitleStyle = signal<boolean>(true);
  isBodyStyle = signal<boolean>(true);
  navList: NavListType[] = [
    {
      name: 'Home',
      routeLink: '/home',
      title: "A quick overview",
    },
    {
      name: 'Projects',
      routeLink: '/projects',
      title: "Take a look at my projects",
    },
    {
      name: 'Work Experience',
      routeLink: '/work-experience',
      title: "The places I have worked",
    },
    {
      name: 'Skills',
      routeLink: '/skills',
      title: "What I've learnt over the years",
    },
    {
      name: 'Resume/CV',
      routeLink: '/resume',
      title: "Download my resume",
    },
    {
      name: 'My Blogs',
      routeLink: '/blogs',
      title: "Checkout some interesting things",
    },
    {
      name: 'Contact Me!',
      routeLink: '/contact',
      title: "Contact me to know more about me",
    },
  ];
  setTitle(state: boolean) {
    this.isTitleOn.update((currentStae) => {
      if (state) {
        this.isTitleStyle.set(false);
        this.isTitleOn.set(true);
      } else {
        this.isTitleStyle.set(true);
        setTimeout(() => {
          this.isTitleOn.set(false);
        }, 300);
      }
      return true;
    });
  }
  setBodyAnimation() {
    this.isBodyStyle.set(false);
    setTimeout(() => {
      this.isBodyStyle.set(true);
    }, 300);
  }

  setBackgroundCurveForLi(idOfLi: string){
    let bg = document.getElementById('selectedBackground') as HTMLDivElement;
    let li = document.getElementById(idOfLi) as HTMLLIElement
    bg.style.top = String(li?.getBoundingClientRect().top)+'px'
  }
}
export type NavListType = {
  name: string;
  routeLink: string;
  title: string;
};
