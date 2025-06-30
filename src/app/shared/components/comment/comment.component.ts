import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Comment } from '@core/interfaces/comment';

@Component({
  selector: 'app-comment',
  imports: [DatePipe],
  templateUrl: './comment.component.html'
})
export class CommentComponent {
  comment = input.required<Comment>();
}
