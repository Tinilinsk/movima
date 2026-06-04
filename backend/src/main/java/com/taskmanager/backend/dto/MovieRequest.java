package com.taskmanager.backend.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class MovieRequest {
    private String title;
    private Integer year;
    private List<String> genres;
    private String posterUrl;
    private String status;
    private Integer rating;
    private String note;
    private LocalDateTime watchedAt;
}
