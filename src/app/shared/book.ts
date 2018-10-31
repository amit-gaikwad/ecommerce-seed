/**
 * Book entity, used for filtering as well.
 */
export class Book {
    /**
     * @type {number} id Unique numeric identifier.
     */
    id: number;

    /**
     * @type {string} title The title of the book.
     */
    title: String;

    /**
     * @type {string} author The author of the book.
     */
    author: String;

    /**
     * @type {string} type of The the book.
     */
    type: String;

    /**
     * @type {string} image of The the book.
     */
    img: String;

    /**
     * @type {number} year The year the book was published.
     */

    year: number;
    /**
     * @type {number} price The price of the book was published.
     */
    price: number;

    /**
     * @type {number} Discount The discount of the book.
     */
    discount: number;
}