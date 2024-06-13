import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [ButtonComponent, LucideAngularModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  btnVariant: 'noStyle' = 'noStyle';
  arrPage: number[] = [];
  isBtnDisabled = {
    prev: true,
    next: false,
  };
  @Input() totalPage: number = 1;
  @Input() activePage: number = 1;
  @Output() pageBtn = new EventEmitter<number>();
  // @Output() pageBtn = new EventEmitter<number>();

  fillArrPage() {
    for (let i = 0; i < this.totalPage; i++) {
      this.arrPage.push(i + 1);
    }
  }

  onPageNextPrev(whatBtn: 'next' | 'prev') {
    if (whatBtn === 'next' && this.activePage < this.totalPage) {
      this.isBtnDisabled.prev = false;
      this.pageBtn.emit((this.activePage += 1));
    }
    if (whatBtn === 'next' && this.activePage === this.totalPage) {
      this.isBtnDisabled.next = true;
      this.isBtnDisabled.prev = false;
    }
    if (whatBtn === 'prev' && this.activePage > 1) {
      this.isBtnDisabled.next = false;
      this.pageBtn.emit((this.activePage -= 1));
    }
    if (whatBtn === 'prev' && this.activePage === 1) {
      this.isBtnDisabled.prev = true;
      this.isBtnDisabled.next = false;
    }
  }

  onPageClick(page: number) {
    if (page < this.totalPage) {
      this.isBtnDisabled.prev = false;
    }
    if (page > 1) {
      this.isBtnDisabled.next = false;
    }
    if (page === this.totalPage) {
      this.isBtnDisabled.next = true;
      this.isBtnDisabled.prev = false;
    }
    if (page === 1) {
      this.isBtnDisabled.prev = true;
      this.isBtnDisabled.next = false;
    }
    this.pageBtn.emit(page);
  }

  ngOnInit(): void {
    this.fillArrPage();
  }
}
