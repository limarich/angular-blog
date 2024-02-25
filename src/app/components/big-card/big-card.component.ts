import { Component, Input } from '@angular/core';

interface BigCardProps {
  img_url: string;
  title: string;
  author: string;
  description: string;
}

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {
  @Input() card?: BigCardProps;
}
