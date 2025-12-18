package com.example.book_inventory;

import com.example.book_inventory.Repository.BookRepository;
import com.example.book_inventory.Service.BookService;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class BookServiceTest {
    @Test
    void shouldAddBookAndReturnCorrectPrice() {
        BookRepository bookRepository = new BookRepository();
        BookService bookService = new BookService(bookRepository);

        Book newBook = new Book(1, "Harry Potter", "J.K. Rowling", 780.0);

        Book savedBook = bookService.addBook(newBook);

        assertNotNull(savedBook);
        assertEquals(780.0, savedBook.getPrice(), 0.001);
    }


    @Test
    void shouldThrowExceptionWhenPriceIsNegative() {
        BookRepository bookRepository = new BookRepository();
        BookService bookService = new BookService(bookRepository);

        Book newBook = new Book(1, "Harry Potter", "J.K. Rowling", 780.0);

        IllegalArgumentException ex =
                assertThrows(IllegalArgumentException.class, () -> {
                    bookService.addBook(newBook);
                });

        assertEquals("Price must be positive", ex.getMessage());
    }


    @Test
    void shouldThrowExceptionWhenIdIsNotPositive() {
        BookRepository bookRepository = new BookRepository();
        BookService bookService = new BookService(bookRepository);

        Book newBook = new Book(1, "Harry Potter", "J.K. Rowling", 780.0);

        IllegalArgumentException ex =
                assertThrows(IllegalArgumentException.class, () -> {
                    bookService.addBook(newBook);
                });

        assertEquals("Book ID must be positive", ex.getMessage());
    }

    @Test
    void ShouldNotContainDuplicateId(){
        BookRepository bookRepository = new BookRepository();
        BookService bookService = new BookService(bookRepository);

        Book newBook = new Book(1, "Harry Potter", "J.K. Rowling", 780.0);
        Book duplicate = new Book(1, "Clean Code", "Robert Martin", 500.0);

        bookService.addBook(newBook);

        IllegalArgumentException ex =
                assertThrows(IllegalArgumentException.class, () -> {
                    bookService.addBook(duplicate);
                });

        assertEquals("Book with ID " + newBook.getBookId() + " already exists", ex.getMessage());
    }
}