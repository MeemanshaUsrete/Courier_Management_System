package com.backend.dto;

import lombok.*;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserProfileDto {

    private Long id;
    private String fullName;
    private String name; 
    private String email;
    private String phone;
    private String mobile; 
    private String role;
}
