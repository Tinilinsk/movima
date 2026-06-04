package com.taskmanager.backend.services;

import com.taskmanager.backend.dto.MovieRequest;
import com.taskmanager.backend.model.Movie;
import com.taskmanager.backend.model.User;
import com.taskmanager.backend.repository.MovieRepository;
import com.taskmanager.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MovieService {

    private final MovieRepository movieRepository;
    private final UserRepository userRepository;

    private User getCurrentUser() {
        String email = SecurityContextHolder.getContext()
                .getAuthentication().getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.UNAUTHORIZED, "User not found"));
    }

    public List<Movie> getAll(String status, String genre) {
        String userId = getCurrentUser().getId();

        if (status != null) {
            return movieRepository.findByUserIdAndStatus(userId, status);
        }
        if (genre != null) {
            return movieRepository.findByUserIdAndGenresContaining(userId, genre);
        }
        return movieRepository.findByUserId(userId);
    }

    public Movie getById(String id) {
        String userId = getCurrentUser().getId();
        return movieRepository.findByIdAndUserId(id, userId)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Movie not found"));
    }

    public Movie create(MovieRequest request) {
        String userId = getCurrentUser().getId();

        Movie movie = Movie.builder()
                .userId(userId)
                .title(request.getTitle())
                .year(request.getYear())
                .genres(request.getGenres())
                .posterUrl(request.getPosterUrl())
                .status(request.getStatus() != null ? request.getStatus() : "watchlist")
                .rating(request.getRating())
                .note(request.getNote())
                .watchedAt(request.getWatchedAt())
                .createdAt(LocalDateTime.now())
                .build();

        return movieRepository.save(movie);
    }

    public Movie update(String id, MovieRequest request) {
        Movie movie = getById(id);

        movie.setTitle(request.getTitle());
        movie.setYear(request.getYear());
        movie.setGenres(request.getGenres());
        movie.setPosterUrl(request.getPosterUrl());
        movie.setStatus(request.getStatus());
        movie.setRating(request.getRating());
        movie.setNote(request.getNote());
        movie.setWatchedAt(request.getWatchedAt());

        return movieRepository.save(movie);
    }

    public void delete(String id) {
        String userId = getCurrentUser().getId();
        movieRepository.deleteByIdAndUserId(id, userId);
    }
}