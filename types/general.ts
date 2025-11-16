export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  authorId: string;
  tags: string[];
  coverUrl: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  categories: string[],
  author: {firstName: string, lastName: string}
}

export interface Posts {
  items: BlogPost[];
}
