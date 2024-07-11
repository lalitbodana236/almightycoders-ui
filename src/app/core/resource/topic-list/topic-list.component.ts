import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css'],
})
export class TopicListComponent implements OnInit {
  content: any = {};
  topics: any[] = [];
  selectedMainTopic: any = null;
  selectedSubTopic: any = null;

  @Output() topicSelected = new EventEmitter<string>();

  // selectedMainTopic: any = null;
  //selectedSubTopic: any = null;

  // selectMainTopic(topic: any) {
  //   if (this.selectedMainTopic === topic) {
  //     this.selectedMainTopic = null;
  //   } else {
  //     this.selectedMainTopic = topic;
  //   }
  //   this.selectedSubTopic = null; // Clear subtopic selection
  //   this.topicSelected.emit(topic);
  // }

  // selectSubTopic(subtopic: any) {
  //   this.selectedSubTopic = subtopic;
  //   this.topicSelected.emit(subtopic);
  // }

  ngOnInit(): void {
    this.topicService.getTopics().subscribe((data) => {
      this.content = data[0];
      this.topicSelected.emit(this.content);
    });
  }

  constructor(private topicService: TopicService) {}
  selectMainTopic(topic: any): void {
    this.selectedMainTopic = this.selectedMainTopic === topic ? null : topic;
    this.selectedSubTopic = null;
    this.topicSelected.emit(
      this.selectedMainTopic != null
        ? this.selectedMainTopic.subtopics[0]
        : this.content
    );
  }

  selectSubTopic(subtopic: any): void {
    this.selectedSubTopic =
      this.selectedSubTopic === subtopic ? null : subtopic;
    this.topicSelected.emit(this.selectedSubTopic);
  }

  isMainTopicSelected(topic: any): boolean {
    return this.selectedMainTopic === topic;
  }

  isSubTopicSelected(subtopic: any): boolean {
    return this.selectedSubTopic === subtopic;
  }
}
