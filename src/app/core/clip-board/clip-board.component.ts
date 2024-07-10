import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-clip-board',
  templateUrl: './clip-board.component.html',
  styleUrls: ['./clip-board.component.css'],
})
export class ClipBoardComponent implements OnInit {
  copyButtonText: string = 'Copy code'; // Initial button text
  constructor() {}

  ngOnInit(): void {}

  @Input() language: string = 'plaintext';
  @Input() code: string = '';
  @ViewChild('codeContent') codeContent: ElementRef | undefined;

  copyCode() {
    const textToCopy = this.codeContent?.nativeElement?.innerText || '';
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        this.copyButtonText = 'Copied!'; // Change button text to 'Copied!' after successful copy
        setTimeout(() => {
          this.copyButtonText = 'Copy code'; // Reset button text after 2 seconds
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy code: ', err);
      });
  }
}
