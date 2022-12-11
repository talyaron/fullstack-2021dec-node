export default interface CommentInterface {
  id: number | null;
  userId: number | null;
  postId: number | null;
  name: string;
  description: string;
  profilePic: string;
  createdAt?: Date;
}
