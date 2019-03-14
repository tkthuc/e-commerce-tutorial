package com.bookstore.productsevice;

import com.bookstore.productsevice.model.Book;
import com.bookstore.productsevice.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableDiscoveryClient
public class BookServiceApplication {


    @Autowired
    private BookRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(BookServiceApplication.class, args);
    }

    @Bean
    public CommandLineRunner createDatabase(){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                Book bookA = new Book.Builder().setName("Lord of the Rings").setAuthors(new String[]{"John Doo"}).setPriceUsd(100).setCategories(new String[]{"fiction"}).build();
                repository.findAllByName(bookA.getName()).forEach(
                        book -> {
                            repository.delete(book);
                        }
                );
                repository.save(bookA);
                Book bookB = new Book.Builder().setName("God Father").setAuthors(new String[]{"Mario Puzo"}).setPriceUsd(150).setCategories(new String[]{"fiction"}).build();
                repository.findAllByName(bookB.getName()).forEach(
                        book -> {
                            repository.delete(book);
                        }
                );
                repository.save(bookB);
                Book bookC = new Book.Builder().setName("Art of Wars").setAuthors(new String[]{"Sun Zhu"}).setPriceUsd(40.5).setCategories(new String[]{"non-fiction"}).build();
                repository.findAllByName(bookC.getName()).forEach(
                        book -> {
                            repository.delete(book);
                        }
                );
                repository.save(bookC);
            }
        };

    };

}

