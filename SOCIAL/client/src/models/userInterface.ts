export default interface User {
  id: number | null;
  username: string;
  email: string;
  password: string;
  name: string;
  coverPic: string;
  profilePic: string;
  city: string;
  website: string;
}

export interface UserRegister {
  username: string;
  email: string;
  password: string;
  name: string;
}

export interface UserLogin {
  username: string;
  email: string;
  password: string;
}

