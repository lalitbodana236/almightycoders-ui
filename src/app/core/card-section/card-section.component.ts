import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css'],
})
export class CardSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() cardItems: any[] = [];
  @Input()
  loadCards!: Function;
}
