import { httpResource } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'contact-page',
  imports: [],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
  standalone: true
})
export class ContactPage {
  contactInfo = [
    {
      type: 'Email',
      value: 'manulogan101@gmail.com',
      link: 'mailto:manulogan101@gmail.com',
      icon: '✉️'
    },
    {
      type: 'Phone',
      value: '+91-8277429750',
      link: 'tel:+918277429750',
      icon: '📱'
    },
    {
      type: 'LinkedIn',
      value: 'linkedin.com/in/manoj-ht',
      link: 'https://www.linkedin.com/in/manoj-ht/',
      icon: '💼'
    },
    {
      type: 'Reddit',
      value: 'reddit.com/user/manoj-ht',
      link: 'https://www.reddit.com/user/manoj-ht/',
      icon: '👾'
    }
  ];

  downloadResume() {
    window.open(`${document.location.origin}/MANOJ_HT_RESUME.pdf`, '_blank');
  }
}
