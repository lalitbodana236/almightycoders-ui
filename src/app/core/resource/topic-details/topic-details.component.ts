import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css'],
})
export class TopicDetailsComponent implements OnInit {
  ngOnInit(): void {}

  @Input() selectedTopic: string | undefined;
  cardHeight: number | undefined;
  defaultHeight: number = 500; // default height in pixels

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.updateCardHeight();
  }

  ngOnChanges() {
    this.updateCardHeight();
  }

  updateCardHeight() {
    setTimeout(() => {
      const cardBody = this.el.nativeElement.querySelector('.card-body');
      const contentHeight = cardBody.scrollHeight + 30; // adding padding/margin
      const newHeight =
        contentHeight > this.defaultHeight ? contentHeight : this.defaultHeight;
      this.renderer.setStyle(
        this.el.nativeElement.querySelector('.card'),
        'height',
        `${newHeight}px`
      );
    });
  }
}
