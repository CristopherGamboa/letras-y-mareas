import { Component, computed, inject, input, linkedSignal, signal } from '@angular/core';
import { Comment } from '@core/interfaces/comment';
import { CommentComponent } from "../comment/comment.component";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';
import { Session } from '@core/interfaces/session';

@Component({
  selector: 'app-comments',
  imports: [CommentComponent, ReactiveFormsModule],
  templateUrl: './comments.component.html'
})
export class CommentsComponent {
  formBuilder = inject(FormBuilder)
  authService = inject(AuthService)
  
  comments = input.required<Comment[]>();
  allComments = linkedSignal(() => this.comments());

  form = this.formBuilder.group({
    comment: ['', [Validators.required]]
  })


  session = signal<Session | null>(this.authService.getSession())
  user = computed(() => this.session()?.name ?? 'Anónimo')

  sendComment(): void {
    if (this.form.invalid)
      return;
    
    let newComment: Comment = {
      user: this.user(),
      comment: this.form.value.comment as string,
      date: new Date()
    }

    this.allComments.update(comments => [...comments, newComment]);

    this.form.reset();
  }
}
