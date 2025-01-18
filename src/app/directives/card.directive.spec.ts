import { Directive } from '@angular/core';
import { cardDirective  } from './card.directive';

describe('CardDirective', () => {
  it('should create an instance', () => {
    const directive = new Directive;
    expect(directive).toBeTruthy();
  });
});
