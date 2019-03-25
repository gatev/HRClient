import { Component, Input, ChangeDetectionStrategy  } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {

  @Input('data') meals: string[] = [];
  page: 1;

}
