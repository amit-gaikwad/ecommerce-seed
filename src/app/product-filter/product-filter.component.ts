import { Component, Injectable, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Book } from '../shared/book';
@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  /**
     * @type {string} name The page title.
     */
  name = 'Applying filters to Products/Books ';

  /**
   * @type {number} minYear The year of the oldest book in the json.
   */
  minYear: number = 1996;

  /**
   * @type {number} maxYear The year of the newest book in the json.
   */
  maxYear: number = 2017;

  /**
   * @type {number} numberOfBooks The number of books in the JSON file, used for max attribute for limit and page.
   */
  numberOfBooks: number;

  /**
   * @type {number} limit The number of books per page.
   */
  limit: number;

  /**
   * @type {number} page The current page.
   */
  page: number = 1;

  /**
   * @type {Book[]} books A list of books to output in a table.
   */
  books: Book[];

  /**
   * @type {Book} filter The object containing the filter values to apply to bookfilter.
   * Could have created another entity called BookFilter, but it would basically have the same fields.
   */

  filter: Book = new Book();

  constructor(private booksService: BooksService) { }
  
  ngOnInit() {
    // // Load books from the books service on init
    this.booksService.getBooks().subscribe(
      (_response) => {
        console.log('_response', _response);
        console.log('response body', _response.body);
        this.books = _response.body.data;
        this.numberOfBooks = this.books.length;
        this.limit = this.books.length; // Start off by showing all books on a single page.
      })
  }

}
