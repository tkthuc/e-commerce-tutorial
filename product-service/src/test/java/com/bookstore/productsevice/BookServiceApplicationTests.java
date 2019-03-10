package com.bookstore.productsevice;

import com.bookstore.productsevice.model.Book;
import com.jayway.jsonpath.JsonPath;
import org.junit.Assert;
import org.junit.ClassRule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.testcontainers.containers.DockerComposeContainer;
import org.testcontainers.shaded.com.fasterxml.jackson.core.type.TypeReference;
import org.testcontainers.shaded.com.fasterxml.jackson.databind.ObjectMapper;
import org.testcontainers.shaded.org.apache.http.HttpStatus;

import java.util.List;
import java.util.Locale;

import static org.junit.Assert.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class BookServiceApplicationTests {


    @ClassRule
    public static DockerComposeContainer compose = StartStopContainers.startExternalServices();

    @Autowired
    private MockMvc mockMvc;
    public ObjectMapper objectMapper = new ObjectMapper();



    @Test
    public void shouldReturnListOfBooks() throws Exception {
        MvcResult mockMvcResult = this.mockMvc.perform(get("/products")).andExpect(status().isOk())
                                    .andReturn();
        List<Book> list = objectMapper.readValue(mockMvcResult.getResponse().getContentAsString(), new TypeReference<List<Book>>(){});
        Assert.assertTrue(list.stream().anyMatch(book -> book.getName().equalsIgnoreCase("God Father")));
    }


    @Test
    public void shouldReturnCorrectBook() throws Exception {
        MvcResult mockMvcResult = this.mockMvc.perform(get("/products")).andExpect(status().isOk())
                .andReturn();
        List<Book> list = objectMapper.readValue(mockMvcResult.getResponse().getContentAsString(), new TypeReference<List<Book>>(){});
        String id = list.get(0).getId();

        mockMvcResult = this.mockMvc.perform(get("/product/"+id)).andExpect(status().isOk()).andReturn();
        Book book = objectMapper.readValue(mockMvcResult.getResponse().getContentAsString(), new TypeReference<Book>(){});

        Assert.assertTrue(book.getName().equals(list.get(0).getName()));
    }

    @Test
    public void shouldReturnCorrectErrorMessage() throws Exception {
        MvcResult mockMvcResult = this.mockMvc.perform(get("/products/noname").header(HttpHeaders.ACCEPT_LANGUAGE, new Locale("zz"))).andExpect(status().is(HttpStatus.SC_BAD_REQUEST))
                .andReturn();
        String localizedErrorSummary = JsonPath.read(mockMvcResult.getResponse().getContentAsString(), "$.localizedErrorSummary.value");
        assertEquals(localizedErrorSummary, "zz:Validation failed");
    }
}

