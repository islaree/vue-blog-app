type Comment = {
  id: number;
  text: string;
};

export type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
  comment: Comment[];
};

export type Posts = Post[];
