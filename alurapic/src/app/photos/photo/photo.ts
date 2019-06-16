export interface Photo{
  id: number;
  postDate: Date;
  url: string;
  description: string;
  allowComents: Boolean;
  likes: number;
  comments: number;
  userId: number;
}
