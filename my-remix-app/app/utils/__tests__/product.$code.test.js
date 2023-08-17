import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDetail from '../../routes/product.$code';

describe('ProductDetail Page', () => {
  it('renders product detail correctly', () => {
    const mockData = {
      result: {
        mkName: "Apple",
        productName: "iPhone 13 128 GB",
        badge: "En Populer Cep Telefonu",
        rating: 4.3,
        imageUrl: "https://cdn.akakce.com/z/apple/iphone-13.jpg",
        storageOptions: [
            "128 GB",
            "256 GB",
            "512 GB"
        ],
        countOfPrices: 132,
        price: 20567,
        freeShipping: true,
        lastUpdate: "Simdi"
    }
    };

    render(<ProductDetail productDetail={mockData} />);
    
    const productDetailElement = screen.getByTestId('product-detail');
    expect(productDetailElement).toBeInTheDocument();
  });
});
