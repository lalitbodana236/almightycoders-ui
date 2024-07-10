import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css'],
})
export class TopicListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() topicSelected = new EventEmitter<string>();

  topics = ['An item', 'A second item', 'A third item'];

  selectTopic(topic: string) {
    this.topicSelected.emit(topic);
  }
}
