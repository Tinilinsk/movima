package com.taskmanager.backend.Model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class User {

    @Id
    private String id;

    @Indexed(unique = true)
    private String email;

    private String name;
    private String password;
    private LocalDateTime createdAt;
}
