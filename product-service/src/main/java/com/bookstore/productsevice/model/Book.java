package com.bookstore.productsevice.model;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.annotation.Generated;

@Document
@Data
public class Book {
    @Id
    private String id;

    private String name;
    private String description;
    private double priceUsd;
    private String picture;
    private String[] categories;
    private String[] authors;

    public Book(){};

    public Book(String name, String description, double priceUsd, String picture, String[] categories, String[] authors) {
        this.name = name;
        this.description = description;
        this.priceUsd = priceUsd;
        this.picture = picture;
        this.categories = categories;
        this.authors = authors;
    }

    public static class Builder {

        private String name;
        private String description;
        private double priceUsd;
        private String picture;
        private String[] categories;
        private String[] authors;

        public Builder setName(String name) {
            this.name = name;
            return this;
        }

        public Builder setDescription(String description) {
            this.description = description;
            return this;
        }

        public Builder setAuthors(String[] authors) {
            this.authors = authors;
            return this;
        }

        public Builder setPicture(String picture) {
            this.picture = picture;
            return this;
        }

        public Builder setPriceUsd(double priceUsd) {
            this.priceUsd = priceUsd;
            return this;
        }

        public Builder setCategories(String[] categories) {
            this.categories = categories;
            return this;
        }

        public Builder() {

        }

        public Book build() {
            return new Book(name, description, priceUsd, picture, categories, authors);
        }
    }

}
