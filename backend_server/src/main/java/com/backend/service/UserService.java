package com.backend.service;

import com.backend.dto.UserProfileDto;

public interface UserService {

    UserProfileDto getUserProfile(String email);

    UserProfileDto updateUserProfile(String email, UserProfileDto profileDto);
}
