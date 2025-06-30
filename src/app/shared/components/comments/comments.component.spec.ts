import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsComponent } from './comments.component';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('comments', [] as Comment[]);
    fixture.detectChanges();
    
  });

  it('El componente se ha creado', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario es inválido cuando esta vacio', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('Se agrega el comentario a la lista de comentarios cuando se envia el formulario', () => {    
    component.form.get('comment')?.setValue('Comentario');
    component.sendComment();

    expect(component.allComments().length).toBe(1);
  });
});
