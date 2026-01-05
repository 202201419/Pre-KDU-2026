package com.example.book_inventory.Repository;

import com.example.book_inventory.Book;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class BookRepository {

    private final Map<Integer, Book> bookStorebyId = new HashMap<>();
    private final Map<String, Book> bookStorebyAuthorandTitle = new HashMap<>();
    private final List books=new ArrayList();
    private final Map<String,List<Book>> bookStoredbyAuthor = new HashMap<>();

    public boolean existsById(int bookId) {
        return bookStorebyId.containsKey(bookId);
    }

    public Book save(Book book) {
        bookStorebyId.put(book.getBookId(), book);
        bookStorebyAuthorandTitle.put(book.getAuthor()+"|"+book.getTitle(),book);
        books.add(book);

        List<Book> books = bookStoredbyAuthor.get(book.getAuthor().toLowerCase());
        if (books == null) {
            books = new ArrayList<>();
            bookStoredbyAuthor.put(book.getAuthor().toLowerCase(), books);
        }
        books.add(book);

        return book;
    }

    public Book findById(int bookId) {
        return bookStorebyId.get(bookId);
    }

    public Book findbyAuthorandTitle(String author, String title){
        return bookStorebyAuthorandTitle.get(author+"|"+title);
    }

    public List<Book> getAllBooks(){
        return books;
    }

    public void deletebyid(Book book) {
        books.remove(book);
        bookStorebyAuthorandTitle.remove(book.getAuthor()+"|"+book.getTitle());
        bookStorebyId.remove(book.getBookId());
    }

    public List<Book> getAllBooksbyAuthor(String author){
        return bookStoredbyAuthor.get(author);
    }
}
