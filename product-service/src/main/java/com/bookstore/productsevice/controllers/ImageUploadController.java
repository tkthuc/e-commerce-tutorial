package com.bookstore.productsevice.controllers;

import com.bookstore.productsevice.storage.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@RestController
public class ImageUploadController {

    @Autowired
    public StorageService storageService;

    @GetMapping("/products/image/{filename:.+}")
    public ResponseEntity<Resource> serveFile(@PathVariable String filename) {
        Resource file = storageService.loadAsResource(filename);
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,"attachment;filename=\""+file.getFilename()+"\"").body(file);
    }

    @PostMapping("/products/image")
    public ResponseEntity<String> handleFileUpdload(@RequestParam("file") MultipartFile file, RedirectAttributes redirectAttributes) {
        String filename = storageService.store(file);
        redirectAttributes.addFlashAttribute("message", String.join("You successfully uploaded "+file.getOriginalFilename()));
        return ResponseEntity.ok().body(filename);
    }
}
