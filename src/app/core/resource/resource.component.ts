import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css'],
})
export class ResourceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  selectedTopic: string | undefined;

  onTopicSelected(topic: string) {
    this.selectedTopic = topic;
  }
}
