// Helper utilities for auth session management

export const getToken = () => localStorage.getItem("token");

export const getUser = () => {
  try {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  } catch (error) {
    console.error("Failed to parse user session", error);
    return null;
  }
};
  
export const setUserSession = (token, user) => {
  if (token) localStorage.setItem("token", token);
  if (user) localStorage.setItem("user", JSON.stringify(user));
};

export const clearUserSession = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const isAuthenticated = () => {
  return !!getToken();
};

export const getUserRole = () => {
  const user = getUser();
  return user?.role || "user";
};

export const hasRole = (allowedRoles = []) => {
  if (!allowedRoles || allowedRoles.length === 0) return true;
  const role = getUserRole();
  return allowedRoles.includes(role);
};
