package com.bookstore.productsevice.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.annotation.Generated;

@Document
@Data
public class Book {
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPriceUsd() {
        return priceUsd;
    }

    public void setPriceUsd(double priceUsd) {
        this.priceUsd = priceUsd;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String[] getCategories() {
        return categories;
    }

    public void setCategories(String[] categories) {
        this.categories = categories;
    }

    public String[] getAuthors() {
        return authors;
    }

    public void setAuthors(String[] authors) {
        this.authors = authors;
    }


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
