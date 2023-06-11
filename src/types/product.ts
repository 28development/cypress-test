import { Product } from "@prisma/client";

interface ProductWithCalculatedPrice extends Product {
    calculatedPrice?: number;
}

export type { ProductWithCalculatedPrice }