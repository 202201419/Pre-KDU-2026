package com.example.book_inventory.Service;

import com.example.book_inventory.Book;
import com.example.book_inventory.Repository.BookRepository;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Book addBook(Book book) {

        if (book == null) {
            throw new IllegalArgumentException("Book cannot be null");
        }

        if (book.getBookId() <= 0) {
            throw new IllegalArgumentException("Book ID must be positive");
        }

        if (book.getPrice() <= 0) {
            throw new IllegalArgumentException("Price must be positive");
        }

        if (bookRepository.existsById(book.getBookId())) {
            throw new IllegalArgumentException("Book with ID " + book.getBookId() + " already exists"
            );
        }

        return bookRepository.save(book);
    }

    public Book getBookById(int bookId) {
        Book book = bookRepository.findById(bookId);

        if (book == null) {
            throw new IllegalArgumentException("Book not found with ID: " + bookId);
        }

        return book;
    }

    public Book getBookByAuthorAndTitle(String author,String title) {
        Book book = bookRepository.findbyAuthorandTitle(author,title);

        if (book == null) {
            throw new IllegalArgumentException("Book named "+title+" not found by: " + author);
        }

        return book;
    }

}
