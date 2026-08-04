package com.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponseDto {

    private String token;
    private UserProfileDto user;
    private String tokenType = "Bearer";

    public AuthResponseDto(String token, UserProfileDto user) {
        this.token = token;
        this.user = user;
    }
}
