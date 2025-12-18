package com.example.book_inventory.Repository;

import com.example.book_inventory.Book;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Repository
public class BookRepository {

    private final Map<Integer, Book> bookStorebyId = new HashMap<>();
    private final Map<String, Book> bookStorebyAuthorandTitle = new HashMap<>();

    public boolean existsById(int bookId) {
        return bookStorebyId.containsKey(bookId);
    }

    public Book save(Book book) {
        bookStorebyId.put(book.getBookId(), book);
        bookStorebyAuthorandTitle.put(book.getAuthor()+"|"+book.getTitle(),book);
        return book;
    }

    public Book findById(int bookId) {
        return bookStorebyId.get(bookId);
    }

    public Book findbyAuthorandTitle(String author, String title){
        return bookStorebyAuthorandTitle.get(author+"|"+title);
    }
}
