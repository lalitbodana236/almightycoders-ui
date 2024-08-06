import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  OnChanges,
} from '@angular/core';

import Quill from 'quill';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css'],
})
export class TopicDetailsComponent implements OnInit, AfterViewInit, OnChanges {
  quill!: Quill;
  @Input() isReadOnly: boolean = false;

  ngOnInit(): void {
    this.isReadOnly = false;
  }

  @Input() selectedTopic: any | undefined;
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

  copyContent(content: HTMLElement) {
    const text = content.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert('Content copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy content: ', err);
      });
  }

  codeSnippet: string = `
  .card {
    transition: height 0.3s ease-in-out;
    min-height: 200px; /* ensure the card has a minimum height */
  }

  .btn-primary {
    margin-top: 10px;
 
  `;
}
