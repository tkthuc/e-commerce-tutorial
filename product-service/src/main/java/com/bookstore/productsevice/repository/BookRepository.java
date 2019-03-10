package com.bookstore.productsevice.repository;

import com.bookstore.productsevice.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface BookRepository extends MongoRepository<Book, String> {
    public List<Book> findAllByName(String name);
    public List<Book> findAllByAuthors(String[] authors);
}
