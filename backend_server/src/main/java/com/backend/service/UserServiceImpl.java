package com.backend.service;

import com.backend.dto.UserProfileDto;
import com.backend.entity.User;
import com.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserProfileDto getUserProfile(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found with email: " + email));

        return mapToProfileDto(user);
    }

    @Override
    public UserProfileDto updateUserProfile(String email, UserProfileDto profileDto) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found with email: " + email));

        if (profileDto.getFullName() != null && !profileDto.getFullName().trim().isEmpty()) {
            user.setFullName(profileDto.getFullName());
        } else if (profileDto.getName() != null && !profileDto.getName().trim().isEmpty()) {
            user.setFullName(profileDto.getName());
        }

        if (profileDto.getPhone() != null && !profileDto.getPhone().trim().isEmpty()) {
            user.setPhone(profileDto.getPhone());
        } else if (profileDto.getMobile() != null && !profileDto.getMobile().trim().isEmpty()) {
            user.setPhone(profileDto.getMobile());
        }

        User updatedUser = userRepository.save(user);
        return mapToProfileDto(updatedUser);
    }

    private UserProfileDto mapToProfileDto(User user) {
        UserProfileDto dto = new UserProfileDto();
        dto.setId(user.getId());
        dto.setFullName(user.getFullName());
        dto.setName(user.getFullName());
        dto.setEmail(user.getEmail());
        dto.setPhone(user.getPhone());
        dto.setMobile(user.getPhone());
        dto.setRole(user.getRole().name().equals("ROLE_ADMIN") ? "admin" : "user");
        return dto;
    }
}
