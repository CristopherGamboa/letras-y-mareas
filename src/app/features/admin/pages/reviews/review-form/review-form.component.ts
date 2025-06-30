import { Dialog, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Review } from '@core/interfaces/review';
import { FormControlErrorsComponent } from '@shared/components/form-control-errors/form-control-errors.component';

@Component({
  selector: 'app-review-form',
  imports: [ReactiveFormsModule, FormControlErrorsComponent],
  templateUrl: './review-form.component.html'
})

/**
 * @description 
 * Componente para crear o editar una reseña
 * 
 * @usageNotes
 * El componente está pensado como un formulario tipo modal que permite crear o editar una reseña. Está 
 * pensado para llamarse con el CDK dialog de Angular CDK.  
 */

export class ReviewFormComponent {
  data = inject(DIALOG_DATA);
  dialog = inject(Dialog);
  formBuilder = inject(FormBuilder);

  review = signal<Review | null>(this.data.review);
  message = signal<string>('');

  form = this.formBuilder.group({
    bookTitle: [this.review()?.book.title || '', [Validators.required]],
    bookAuthor: [this.review()?.book.author || '', [Validators.required]],
    bookYear: [this.review()?.book.year || '', [Validators.required]],
    rating: [this.review()?.rating || '', [Validators.required]],
    review: [this.review()?.comment || '', [Validators.required]],
    image: ['', [Validators.required]],
  });

  /**
   * @description
   * Crea una reseña
   */
  createReview() {
    if (this.form.invalid)
      return;

    this.message.set('¡Reseña creado con exito!');

    setTimeout(() => {
      this.dialog.closeAll();
    }, 1000);
  }
}
