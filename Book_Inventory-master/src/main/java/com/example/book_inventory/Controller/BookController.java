package com.example.book_inventory.Controller;

import com.example.book_inventory.Book;
import com.example.book_inventory.Service.BookService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/books")
public class BookController {

    private final BookService bookService;
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @PostMapping
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        Book savedBook = bookService.addBook(book);
        return new ResponseEntity<>(savedBook, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBookById(@PathVariable int id) {
        try {
            Book book = bookService.getBookById(id);
            return new ResponseEntity<>(book, HttpStatus.OK);
        } catch (IllegalArgumentException ex) {
            return new ResponseEntity<>("Book with ID " + id + " not found",HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/search")
    public ResponseEntity<?> getBookByAuthorAndTitle(
            @RequestParam String author,
            @RequestParam String title) {

        try {
            Book book = bookService.getBookByAuthorAndTitle(author, title);
            return new ResponseEntity<>(book, HttpStatus.OK);
        } catch (IllegalArgumentException ex) {
            return new ResponseEntity<>(ex.getMessage(),
                    HttpStatus.NOT_FOUND);
        }
    }
}
