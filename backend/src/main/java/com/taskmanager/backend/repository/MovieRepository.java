package com.taskmanager.backend.repository;

import com.taskmanager.backend.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface MovieRepository extends MongoRepository<Movie, String> {
    List<Movie> findByUserId(String userId);
    List<Movie> findByUserIdAndStatus(String userId, String status);
    List<Movie> findByUserIdAndGenresContaining(String userId, String genre);
    Optional<Movie> findByIdAndUserId(String id, String userId);
    void deleteByIdAndUserId(String id, String userId);
}