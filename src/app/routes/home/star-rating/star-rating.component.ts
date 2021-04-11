import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: StarRatingComponent,
    },
  ],
})
export class StarRatingComponent
  implements OnInit, OnChanges, ControlValueAccessor {
  @Input() end: number;
  public rating = 0;
  public ratingArr = [];
  public starCount = 5;
  private calculatedRating = 0;
  private onChange = (quantity) => {};
  private onTouched = () => {};

  private touched = false;

  private disabled = false;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  ngOnInit(): void {}

  public onClick(rating: number) {
    this.markAsTouched();
    if (!this.disabled) {
      this.rating = rating;
      this.calculatedRating = this.calculateValue(rating);
      this.onChange(this.calculatedRating);
    }
  }

  public showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  public calculateTooltip(index: number) {
    const value = this.end / 5;
    return value * index;
  }

  private calculateValue(rating: number): number {
    const value = this.end / 5;
    return value * rating;
  }

  writeValue(obj: any): void {
    this.calculatedRating = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
}
