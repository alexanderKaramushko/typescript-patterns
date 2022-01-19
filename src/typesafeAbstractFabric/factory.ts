/**
 * @description Create overload for abstract fabric to make it more specific.
 */

import { BalletFlat, Boot, Sneaker } from '.';

type Shoe = {
  create(type: 'balletFlat'): BalletFlat | null;
  create(type: 'boot'): Boot | null;
  create(type: 'sneaker'): Sneaker | null;
}

const Shoe: Shoe = {
  create(type: 'balletFlat' | 'boot' | 'sneaker') {
    switch (type) {
      case 'balletFlat':
        return new BalletFlat();
      case 'boot':
        return new Boot();
      case 'sneaker':
        return new Sneaker();
      default:
        return null;
    }
  },
};
