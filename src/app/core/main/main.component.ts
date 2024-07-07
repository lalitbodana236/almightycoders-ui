import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  [x: string]: any;
  totalPages: any;
  constructor() {}

  ngOnInit(): void {}

  cardItems = [
    { title: 'Card 1', description: 'Description for Card 1' },
    { title: 'Card 2', description: 'Description for Card 2' },
    { title: 'Card 3', description: 'Description for Card 3' },
    { title: 'Card 4', description: 'Description for Card 4' },
    { title: 'Card 5', description: 'Description for Card 5' },
    { title: 'Card 6', description: 'Description for Card 6' },
    { title: 'Card 7', description: 'Description for Card 7' },
    { title: 'Card 8', description: 'Description for Card 7' },
    // Add more items as needed
  ];

  pageSize = 3; // Number of items per page
  currentPage = 1; // Current page number

  // Method to load more cards
  loadMoreCards() {
    const moreItems = [
      { title: 'Card 4', description: 'Description for Card 4' },
      { title: 'Card 5', description: 'Description for Card 5' },
      { title: 'Card 6', description: 'Description for Card 6' },
      { title: 'Card 7', description: 'Description for Card 7' },
      { title: 'Card 8', description: 'Description for Card 7' },
      // Add more items as needed
    ];
    this.cardItems = [...this.cardItems, ...moreItems];
  }

  // Method to load cards based on current page
  loadCards() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.cardItems.slice(startIndex, endIndex);
  }

  // Method to go to previous page
  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Method to go to next page
  goToNextPage() {
    const totalPages = Math.ceil(this.cardItems.length / this.pageSize);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  Math = Math; // Expose Math to the template context
}
