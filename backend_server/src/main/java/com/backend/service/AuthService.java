package com.backend.service;

import com.backend.dto.AuthResponseDto;
import com.backend.dto.LoginRequestDto;
import com.backend.dto.SignupRequestDto;

public interface AuthService {

    AuthResponseDto registerUser(SignupRequestDto signupRequest);

    AuthResponseDto loginUser(LoginRequestDto loginRequest);

    void resetPassword(String email, String newPassword);
}
