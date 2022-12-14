import React from 'react';
import { render } from 'test-utils';
import {StarRating} from '../StarRating';

describe('StarRating', () => {
  describe('Rating has been provided', () => {
    it('show the average', () => {
      const {getByText} = render(<StarRating rating={{average: 7}} />);

      expect(getByText('7')).toBeTruthy();
    });

    it('show the star icon', () => {
      const {getByTestId} = render(<StarRating rating={{average: 7}} />);

      expect(getByTestId('starIcon')).toBeTruthy();
    });
  });

  describe('Rating not provided', () => {
    it('return nothing', () => {
      const {container} = render(<StarRating />, { wrapper: undefined});

      expect(container.children.length).toEqual(0);
    });
  });
});
