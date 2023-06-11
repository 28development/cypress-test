import { type NextPage } from "next";
import Head from "next/head";

import { api } from "@/utils/api";
import { ProductTable } from "@/components/ui/table";

const Home: NextPage = () => {
  const { isLoading, data: products } = api.product.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>Sales Tax</title>
        <meta name="description" content="Sales Tax" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full flex-col">
        {products && products.length > 0 && (
          <ProductTable products={products} />
        )}
      </main>
    </>
  );
};

export default Home;
