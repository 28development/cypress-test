import { prisma } from "../src/server/db";
import { Category } from "@prisma/client";

/**
 * This script is used to seed the database with some initial data.
 */
async function main() {
    const products = [
        { name: "book", price: 12.49, isImported: false, category: Category.BOOK },
        { name: "music CD", price: 14.99, isImported: false, category: Category.OTHER },
        { name: "chocolate bar", price: 0.85, isImported: false, category: Category.FOOD },
        { name: "imported box of chocolates", price: 10.0, isImported: true, category: Category.FOOD },
        { name: "imported bottle of perfume", price: 47.50, isImported: true, category: Category.OTHER },
        { name: "imported bottle of perfume (small)", price: 27.99, isImported: true, category: Category.OTHER },
        { name: "bottle of perfume", price: 18.99, isImported: false, category: Category.OTHER },
        { name: "packet of headache pills", price: 9.75, isImported: false, category: Category.MEDICAL },
        { name: "box of imported chocolates", price: 11.25, isImported: true, category: Category.FOOD },
    ];

    for (const product of products) {
        await prisma.product.create({
            data: product,
        });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });