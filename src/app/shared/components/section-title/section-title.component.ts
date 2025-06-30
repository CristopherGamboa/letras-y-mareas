import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  imports: [],
  templateUrl: './section-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionTitleComponent {
  title = input.required<string>();
}
