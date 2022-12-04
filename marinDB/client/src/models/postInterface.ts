export default interface PostInterface {
  id: number | null;
  userId: number | null;
  name: string;
  img: string;
  profilePic: string;
  description: string;
  createdAt?: Date;
}