package com.bookstore.productsevice;

import com.bookstore.productsevice.model.Book;
import com.bookstore.productsevice.repository.BookRepository;
import com.bookstore.productsevice.security.Secret;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.retry.annotation.Backoff;
import org.springframework.retry.annotation.EnableRetry;
import org.springframework.retry.annotation.Retryable;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.net.ConnectException;
import java.net.URI;
import java.util.List;


@SpringBootApplication
@EnableDiscoveryClient
@EnableRetry
@ServletComponentScan
public class BookServiceApplication {

    Logger logger = LoggerFactory.getLogger(BookServiceApplication.class);

    @Autowired
    private BookRepository repository;

    @Autowired
    Secret secret;


    RestTemplate restTemplate = new RestTemplate();

    @Autowired
    DiscoveryClient discoveryClient;


    public static void main(String[] args) {
        SpringApplication.run(BookServiceApplication.class, args);
    }


    @Bean
    @Retryable( value =  { ConnectException.class }, maxAttempts = 4, backoff = @Backoff(delay = 5000))
    public CommandLineRunner setSecretKey() {
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                logger.info("Consul Demo - Getting Secret Key");

                List<ServiceInstance> instances = discoveryClient.getInstances("authentication-service");

                if (instances != null && instances.size() > 0 ) {
                    URI uri = new URI(instances.get(0).getUri().toString() +  "/getSecretKey");
                    ResponseEntity<Secret> response  = restTemplate.getForEntity(uri,Secret.class);
                    logger.info("Response Received as " + response + " -  ");
                    secret.setKey(response.getBody().key);
                }

                return;
            }
        };
    }

    @Bean
    public CommandLineRunner createDatabase(){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                Book bookA = new Book.Builder().setName("Lord of the Rings")
                        .setAuthors(new String[]{"John Doo"})
                        .setPriceUsd(100)
                        .setDescription("Great adventures of little hobbit")
                        .setPicture("air-plant.jpg")
                        .setCategories(new String[]{"fiction"}).build();
                repository.findAllByName(bookA.getName()).forEach(
                        book -> {
                            repository.delete(book);
                        }
                );
                repository.save(bookA);
                Book bookB = new Book.Builder()
                        .setName("God Father")
                        .setAuthors(new String[]{"Mario Puzo"})
                        .setPriceUsd(150)
                        .setPicture("barista-kit.jpg")
                        .setDescription("The tragic life of the mafia bosses")
                        .setCategories(new String[]{"fiction"}).build();
                repository.findAllByName(bookB.getName()).forEach(
                        book -> {
                            repository.delete(book);
                        }
                );
                repository.save(bookB);
                Book bookC = new Book.Builder()
                        .setName("Art of Wars")
                        .setAuthors(new String[]{"Sun Zhu"})
                        .setDescription("How to create wars and win them")
                        .setPriceUsd(40.5)
                        .setPicture("camera-lens.jpg")
                        .setCategories(new String[]{"non-fiction"}).build();
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

