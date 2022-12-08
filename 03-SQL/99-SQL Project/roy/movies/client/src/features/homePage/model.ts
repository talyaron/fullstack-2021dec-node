export function getData(): string | false {
    try {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const data = urlParams.get("data");
      console.log(queryString, urlParams, data)
      return data;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  export function getUserId(): string | false {
    try {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const data = urlParams.get("userId");
      console.log(queryString, urlParams, data)
      return data;
    } catch (error) {
      console.error(error);
      return false;
    }
  }