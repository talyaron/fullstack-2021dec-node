function getUserId(): string | false {
    try {
      const queryString = window.location.search;
      console.log(queryString);
  
      const urlParams = new URLSearchParams(queryString);
      const userId = urlParams.get("userId");
  
      console.log(userId);
  
      return userId;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  