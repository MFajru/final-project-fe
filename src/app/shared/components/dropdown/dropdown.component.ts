import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ClickOutsideDirective } from '../../directives/click-outside/click-outside.directive';
import { ToTitleCasePipe } from '../../pipes/to-title-case/to-title-case.pipe';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    LucideAngularModule,
    NgClass,
    ClickOutsideDirective,
    ToTitleCasePipe,
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input({ required: true }) placeholder = '';
  @Input() size: 'small' | 'medium' = 'small';
  text = '';
  @Input({ required: true }) dropdownItems: string[] = [];

  isOpen: boolean = false;

  ngClassStyle = '';
  prevNgClassStyle = '';

  checkNgClass() {
    switch (this.size) {
      case 'small':
        this.ngClassStyle = 'h-8';
        this.prevNgClassStyle = this.ngClassStyle;
        break;
      case 'medium':
        this.ngClassStyle = 'h-11';
        this.prevNgClassStyle = this.ngClassStyle;
        break;
    }
  }

  onClickOutside() {
    this.isOpen = false;
    this.ngClassStyle = this.prevNgClassStyle;
  }

  onClick() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.ngClassStyle += ' dropdown-opened';
      return;
    }
    if (!this.isOpen) {
      this.ngClassStyle = this.prevNgClassStyle;
      return;
    }
  }

  ngOnInit(): void {
    this.checkNgClass();
  }
}
