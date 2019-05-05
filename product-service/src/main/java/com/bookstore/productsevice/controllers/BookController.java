package com.bookstore.productsevice.controllers;

import com.bookstore.productsevice.exception.ItemNotFoundException;
import com.bookstore.productsevice.model.Book;
import com.bookstore.productsevice.repository.BookRepository;
import com.bookstore.productsevice.storage.StorageService;
import com.bookstore.productsevice.validators.BookValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@RestController
public class BookController {

    @Autowired
    public BookRepository bookRepository;

    @Autowired
    public StorageService storageService;

    @GetMapping(value = "/products", params = "name")
    public ResponseEntity<List<Book>> getBooksByName(@RequestParam String name) {
        List<Book> books = bookRepository.findAllByName(name);
        if(books.isEmpty()) {
            throw new ItemNotFoundException(name);
        }
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @GetMapping("/products")
    public ResponseEntity<List<Book>> getBooks() {
        List<Book> books = bookRepository.findAll();
        return new ResponseEntity<>(books, HttpStatus.OK);
    }


    @PostMapping("/products")
    public ResponseEntity<Book> createBook(@RequestBody Book book) throws Exception {
        BookValidator.validate(book);
        Book response = bookRepository.save(book);
        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable String id) {
        Book book = bookRepository.findById(id).orElseThrow(() -> new ItemNotFoundException(id));
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

}
