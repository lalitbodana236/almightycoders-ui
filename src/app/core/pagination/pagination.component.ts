import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() currentPage: number | undefined;
  @Input() totalPages: number | undefined;
  @Output() previousPage = new EventEmitter<void>();
  @Output() nextPage = new EventEmitter<void>();

  goToPreviousPage() {
    this.previousPage.emit();
  }

  goToNextPage() {
    this.nextPage.emit();
  }
}
