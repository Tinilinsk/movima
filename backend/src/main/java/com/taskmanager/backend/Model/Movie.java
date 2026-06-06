package com.taskmanager.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "movies")
public class Movie {

    @Id
    private String id;
    
    private String userId;
    private String title;
    private Integer year;
    private List<String> genres;
    private String posterUrl;
    private String status; // watchlist | watching | watched
    private String priority;
    private String type; // movie, series
    private String platform; // netflix, prime
    private Integer rating;
    private String note;
    private LocalDateTime watchedAt;
    private LocalDateTime createdAt;
}
