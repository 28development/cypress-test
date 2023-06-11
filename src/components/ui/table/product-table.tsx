import { ProductWithCalculatedPrice } from "@/types/product";
import { calculateAllPrices } from "@/utils/calculate";
import { Product } from "@prisma/client";
import { useState } from "react";

interface ProductTableProps {
  products: Product[];
}

const ProductTable = ({ products }: ProductTableProps) => {
  const [productsState, setProducts] =
    useState<ProductWithCalculatedPrice[]>(products);
  const [totalCost, setTotalCost] = useState(0);
  const [totalSalesTaxes, setTotalSalesTaxes] = useState(0);

  const handleCalculateAll = () => {
    const { updatedProducts, totalCost, totalSalesTaxes } =
      calculateAllPrices(productsState);

    setProducts(updatedProducts);
    setTotalCost(totalCost);
    setTotalSalesTaxes(totalSalesTaxes);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="w-full py-8 text-center text-4xl underline">
        <a href="/task" target="_blank">
          Cypress Test
        </a>
      </h1>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Products
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the products in your store.
          </p>
        </div>
        <div className="mt-4 gap-x-2 sm:ml-16 sm:mt-0 sm:flex">
          <button
            data-cy="calculate-all-button"
            type="button"
            onClick={handleCalculateAll}
            className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Calculate all
          </button>
          <button
            data-cy="reset-button"
            onClick={() => setProducts(products)}
            type="button"
            className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Reset
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table
              data-cy="product-table"
              className="min-w-full divide-y divide-gray-300"
            >
              <thead>
                <tr className="divide-x divide-gray-200">
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Imported
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0"
                  >
                    Calculated Price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {productsState.map((product) => (
                  <tr key={product.id} className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                      {product.name}
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                      {product.category}
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                      {product.isImported ? "Imported" : "Not Imported"}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                      {product.price}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                      {product.calculatedPrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-4 flex justify-end">
              Total Cost: {totalCost.toFixed(2)}
            </div>
            <div className="mt-4 flex justify-end">
              Total Sales Taxes: {totalSalesTaxes.toFixed(2)} %
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductTable };
