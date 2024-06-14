import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [NgClass, TitleCasePipe, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
})
export class InputFieldComponent implements OnInit {
  @Input({ required: true }) inputType:
    | 'text'
    | 'password'
    | 'radio'
    | 'checkbox'
    | 'date'
    | '' = '';
  @Input({ required: true }) inputName: string = '';
  @Input() inputId: string | undefined;
  @Input() customStyle: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() inputLabel: string | undefined;
  @Input() choices: string[] | undefined;
  @Input() errText: string | undefined;
  @Input() fGroup!: FormGroup;
  @Input() fcName: string | number | null = null;
  @Input() inputVariants: 'noIcons' | 'icons' | 'iconsRight' = 'icons';
  @Input() inputSize: 'medium' | 'small' = 'medium';
  @Input() isDisabled: boolean | undefined = false;
  @Output() onMouseEnter = new EventEmitter();
  @Output() onReset = new EventEmitter();
  inputSizeStyle = '';
  placeholderIcon: string = '';
  inputStyle: string = 'input input-bordered w-full text-sm';

  strFcName: string = this.fcName as string;

  onResetFilter() {
    const fGroupGet = this.fGroup.get(this.strFcName);
    if (fGroupGet) {
      fGroupGet.reset('');
      this.onReset.emit();
    }
  }

  checkInputType() {
    if (this.inputType === 'radio' || this.inputType === 'checkbox') {
      this.inputStyle = this.inputType;
      return;
    }
  }

  checkInputSize() {
    switch (this.inputSize) {
      case 'small':
        this.inputSizeStyle = 'input-sm';
        break;
    }
  }

  checkPlaceholderIcon() {
    switch (this.inputName) {
      case 'username':
        this.placeholderIcon = 'user';
        break;
      case 'password':
        this.placeholderIcon = 'lock-keyhole';
        break;
      case 'search':
        this.placeholderIcon = 'search';
        break;
      case 'startDate':
        this.placeholderIcon = 'calendar';
        break;
      case 'endDate':
        this.placeholderIcon = 'calendar';
        break;
      default:
        this.placeholderIcon = '';
        break;
    }
  }

  ngOnInit(): void {
    this.checkInputType();
    this.checkPlaceholderIcon();
    this.checkInputSize();
  }

  ngOnChanges(): void {
    this.strFcName = this.fcName as string;
  }
}
