import { Category, Product } from '@prisma/client';

const roundToNearest = (value: number, nearest = 0.05) => {
    return Math.ceil(value / nearest) * nearest;
};

const exemptedCategories: Category[] = [Category.BOOK, Category.FOOD, Category.MEDICAL];

const calculateAllPrices = (products: Product[]) => {
    let totalCost = 0;
    let totalSalesTaxes = 0;

    const updatedProducts = products.map((product) => {
        let price = product.price;
        let salesTax = 0;

        // Apply basic sales tax of 10% except for exempted categories
        if (!exemptedCategories.includes(product.category)) {
            salesTax += roundToNearest((10 / 100) * price);
        }

        // Apply import duty sales tax of 5% for imported products
        if (product.isImported) {
            salesTax += roundToNearest((5 / 100) * price);
        }

        // Calculate the final price including tax
        let finalPrice = price + salesTax;

        // Add the calculated price and sales tax to the total cost and total sales taxes
        totalCost += finalPrice;
        totalSalesTaxes += salesTax;

        // Return a new product object with the calculated price property
        return {
            ...product,
            calculatedPrice: Number(finalPrice.toFixed(2)),
        };
    });

    return {
        updatedProducts,
        totalCost: Number(totalCost.toFixed(2)),
        totalSalesTaxes: Number(totalSalesTaxes.toFixed(2)),
    };
};

export { calculateAllPrices }