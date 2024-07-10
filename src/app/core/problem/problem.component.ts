import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css'],
})
export class ProblemComponent implements OnInit {
  [x: string]: any;
  totalPages: any;
  constructor() {}

  ngOnInit(): void {}

  cardItems = [
    {
      title: 'Array',
      description:
        'Fundamental data structure used to store elements in a contiguous memory location.',
    },
    {
      title: 'String',
      description:
        'Sequence of characters, often used to store and manipulate text.',
    },
    {
      title: 'Two Pointer',
      description:
        'Technique used in algorithms to optimize searches and traversal, using two indices.',
    },
    {
      title: 'Sorting',
      description:
        'Process of arranging elements in a specific order, such as ascending or descending.',
    },
    {
      title: 'Searching',
      description:
        'Finding the position or value of an element within a data structure.',
    },
    {
      title: 'Stack',
      description:
        'Linear data structure following LIFO (Last In, First Out) principle.',
    },
    {
      title: 'Queue',
      description:
        'Linear data structure following FIFO (First In, First Out) principle.',
    },
    {
      title: 'Linked List',
      description:
        'Data structure consisting of nodes, where each node contains a value and a pointer to the next node.',
    },
    {
      title: 'Tree',
      description:
        'Hierarchical data structure with a root node and child nodes, forming a tree-like structure.',
    },
    {
      title: 'Graph',
      description:
        'Collection of nodes (vertices) and edges connecting them, used to represent networks.',
    },
    {
      title: 'Dynamic Programming',
      description:
        'Optimization technique for solving complex problems by breaking them down into simpler subproblems.',
    },
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
