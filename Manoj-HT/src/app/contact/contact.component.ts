import { Component } from '@angular/core';
import { Icons } from '../utilities/icons/icons';

@Component({
  selector: 'contact-page',
  standalone: true,
  imports: [Icons],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.less'
})
export class ContactComponent {

  myVar = 'whatsapp-icon'
}
