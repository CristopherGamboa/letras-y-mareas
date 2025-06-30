import { Book } from "./book";
import { Comment } from "./comment";

export interface Review {
    id: string;
    book: Book;
    rating: number;
    comment: string;
    comments: Comment[];
}
