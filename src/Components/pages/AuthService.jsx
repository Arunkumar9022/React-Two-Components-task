class AuthService {
    mockUserData = {
      userId: "user123",
      password: "password123"
    };
  
    async login(userId, password) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
  
      if (
        userId === this.mockUserData.userId &&
        password === this.mockUserData.password
      ) {
        console.log("Login successful Data is send successfully");
        return true;
      } else {
        console.log("Login failed");
        return false;
      }
    }
  }
  
  export default new AuthService();
  