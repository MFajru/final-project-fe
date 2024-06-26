import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
  @Input() variants: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() customStyle = '';
  variantStyle = '';

  variantFunc() {
    switch (this.variants) {
      case 'primary':
        this.variantStyle =
          'bg-gradient-to-br from-[#007DA0] to-[#0092BB] border-0 text-white';
        break;
      case 'secondary':
        this.variantStyle =
          'border-2 bg-transparent text-bluePrimary border-bluePrimary';
        break;
      case 'danger':
        this.variantStyle = 'border-0 bg-redDanger text-white';
        break;
      default:
        this.variantStyle = '';
    }
  }

  ngOnInit(): void {
    this.variantFunc();
  }
}
