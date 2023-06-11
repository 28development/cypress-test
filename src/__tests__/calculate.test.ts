import { describe, assert, it } from 'vitest';

import { Category, Product } from '@prisma/client';
import { calculateAllPrices } from '../utils/calculate';
import { ProductWithCalculatedPrice } from '@/types/product';

describe('calculateAllPrices', () => {
    const inputOneProducts: Product[] = [
        { id: "1", name: 'Book', category: Category.BOOK, isImported: false, price: 12.49 },
        { id: "2", name: 'Music CD', category: Category.OTHER, isImported: false, price: 14.99 },
        { id: "3", name: 'Chocolate Bar', category: Category.FOOD, isImported: false, price: 0.85 },
    ];

    const inputTwoProducts: Product[] = [
        { id: "1", name: 'Imported Box of Chocolates', category: Category.FOOD, isImported: true, price: 10.00 },
        { id: "2", name: 'Imported Bottle of Perfume', category: Category.OTHER, isImported: true, price: 47.50 },
    ];

    const inputThreeProducts: Product[] = [
        { id: "1", name: 'Imported Bottle of Perfume', category: Category.OTHER, isImported: true, price: 27.99 },
        { id: "2", name: 'Bottle of Perfume', category: Category.OTHER, isImported: false, price: 18.99 },
        { id: "3", name: 'Packet of Headache Pills', category: Category.MEDICAL, isImported: false, price: 9.75 },
        { id: "4", name: 'Box of Imported Chocolates', category: Category.FOOD, isImported: true, price: 11.25 },
    ];

    const allInputs = [inputOneProducts, inputTwoProducts, inputThreeProducts];

    it.concurrent('should return an array of products with calculated prices for the first input', () => {
        const expected: ProductWithCalculatedPrice[] = [
            {
                ...inputOneProducts[0] as Product,
                calculatedPrice: 12.49
            },
            {
                ...inputOneProducts[1] as Product,
                calculatedPrice: 16.49,
            },
            {
                ...inputOneProducts[2] as Product,
                calculatedPrice: 0.85,
            },
        ];

        const { updatedProducts, totalCost, totalSalesTaxes } = calculateAllPrices(inputOneProducts);
        assert.deepEqual(updatedProducts, expected);
        assert.deepEqual(totalCost, 29.83);
        assert.deepEqual(totalSalesTaxes, 1.5);
    });

    it.concurrent('should return an array of products with calculated prices for the second input', () => {
        const expected: ProductWithCalculatedPrice[] = [
            {
                ...inputTwoProducts[0] as Product,
                calculatedPrice: 10.5,
            },
            {
                ...inputTwoProducts[1] as Product,
                calculatedPrice: 54.65,
            },
        ];

        const { updatedProducts, totalCost, totalSalesTaxes } = calculateAllPrices(inputTwoProducts);
        assert.deepEqual(updatedProducts, expected);
        assert.deepEqual(totalCost, 65.15);
        assert.deepEqual(totalSalesTaxes, 7.65);
    });

    it.concurrent('should return an array of products with calculated prices for the third input', () => {
        const expected: ProductWithCalculatedPrice[] = [
            {
                ...inputThreeProducts[0] as Product,
                calculatedPrice: 32.19,
            },
            {
                ...inputThreeProducts[1] as Product,
                calculatedPrice: 20.89,
            },
            {
                ...inputThreeProducts[2] as Product,
                calculatedPrice: 9.75,
            },
            {
                ...inputThreeProducts[3] as Product,
                calculatedPrice: 11.85,
            },
        ];

        const { updatedProducts, totalCost, totalSalesTaxes } = calculateAllPrices(inputThreeProducts);
        assert.deepEqual(updatedProducts, expected);
        assert.deepEqual(totalCost, 74.68);
        assert.deepEqual(totalSalesTaxes, 6.7);
    });
});
