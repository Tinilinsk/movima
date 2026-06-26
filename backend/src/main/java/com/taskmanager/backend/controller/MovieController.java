package com.taskmanager.backend.controller;

import com.taskmanager.backend.dto.MovieRequest;
import com.taskmanager.backend.model.Movie;
import com.taskmanager.backend.services.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
@RequiredArgsConstructor
public class MovieController {

    private final MovieService movieService;

    @GetMapping
    public List<Movie> getAll(
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String genre) {
        return movieService.getAll(status, genre);
    }

    @GetMapping("/{id}")
    public Movie getById(@PathVariable String id) {
        return movieService.getById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Movie create(@RequestBody MovieRequest request) {
        return movieService.create(request);
    }

    @PutMapping("/{id}")
    public Movie update(@PathVariable String id,
                        @RequestBody MovieRequest request) {
        return movieService.update(id, request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) {
        movieService.delete(id);
    }
}