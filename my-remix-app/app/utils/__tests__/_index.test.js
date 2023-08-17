import React from 'react';
import { render, screen } from '@testing-library/react';
import Index from '../../routes/_index';

describe('Index Page', () => {
  it('renders horizontal products', () => {
    const mockData = {
      result: {
        horizontalProducts: [
            {
                code: 123,
                imageUrl: "https://cdn.akakce.com/x/apple/iphone-13.jpg",
                name: "iPhone 13 128 GB",
                dropRatio: 8.3,
                price: 20137,
                countOfPrices: 121,
                followCount: 3123
            },
        ],
      },
    };

    render(<Index allProducts={mockData} />);
    
    const horizontalProductElements = screen.getAllByTestId('horizontal-product');
    expect(horizontalProductElements).toHaveLength(mockData.result.horizontalProducts.length);
  });

  it('renders vertical products', () => {
    const mockData = {
      result: {
        products: [
            {
                code: 123,
                imageUrl: "https://cdn.akakce.com/x/apple/iphone-13.jpg",
                name: "iPhone 13 128 GB",
                dropRatio: 8.3,
                price: 20137,
                countOfPrices: 121,
                followCount: 3123
            },
        ],
      },
    };

    render(<Index allProducts={mockData} />);
    
    const verticalProductElements = screen.getAllByTestId('vertical-product');
    expect(verticalProductElements).toHaveLength(mockData.result.products.length);
  });
});
