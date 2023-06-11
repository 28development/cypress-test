export default function Task() {
  return (
    <article className="prose prose-slate mx-auto py-4 lg:prose-xl">
      <h1>## Problem 1: SALES TAXES</h1>
      <p>
        Basic sales tax is applicable at a rate of 10% on all goods, except
        books, food, and medical products that are exempt. Import duty is an
        additional sales tax applicable on all imported goods at a rate of 5%,
        with no exemptions. When I purchase items I receive a receipt which
        lists the name of all the items and their price (including tax),
        finishing with the total cost of the items, and the total amounts of
        sales taxes paid. The rounding rules for sales tax are that for a tax
        rate of n%, a shelf price of p contains (np/100 rounded up to the
        nearest 0.05) amount of sales tax.
      </p>
      <p>
        Write an application that prints out the receipt details for these
        shopping baskets…
      </p>
      <p className="prose-sm pt-4">
        Input 1:
        <br />
        &gt; 1 book at 12.49
        <br />
        &gt; 1 music CD at 14.99
        <br />
        &gt; 1 chocolate bar at 0.85
      </p>
      <hr />

      <p className="prose-sm pt-4">
        Input 2:
        <br />
        &gt; 1 imported box of chocolates at 10.00
        <br />
        &gt; 1 imported bottle of perfume at 47.50
      </p>
      <hr />

      <p className="prose-sm pt-4">
        Input 3:
        <br />
        &gt; 1 imported bottle of perfume at 27.99
        <br />
        &gt; 1 bottle of perfume at 18.99
        <br />
        &gt; 1 packet of headache pills at 9.75
        <br />
        &gt; 1 box of imported chocolates at 11.25
      </p>
      <hr />
      <p className="prose-sm pt-4">
        Output 1:
        <br />
        &gt; 1 book: 12.49
        <br />
        &gt; 1 music CD: 16.49
        <br />
        &gt; 1 chocolate bar: 0.85
        <br />
        &gt; Sales Taxes: 1.50
        <br />
        &gt; Total: 29.83
      </p>
      <hr />

      <p className="prose-sm pt-4">
        Output 2:
        <br />
        &gt; 1 imported box of chocolates: 10.50
        <br />
        &gt; 1 imported bottle of perfume: 54.65
        <br />
        &gt; Sales Taxes: 7.65
        <br />
        &gt; Total: 65.15
      </p>
      <hr />

      <p className="prose-sm pt-4">
        Output 3:
        <br />
        &gt; 1 imported bottle of perfume: 32.19
        <br />
        &gt; 1 bottle of perfume: 20.89
        <br />
        &gt; 1 packet of headache pills: 9.75
        <br />
        &gt; 1 imported box of chocolates: 11.85
      </p>
      <hr />
      <p className="prose-sm pt-4">
        &gt; Sales Taxes: 6.70
        <br />
        &gt; Total: 74.68
      </p>
    </article>
  );
}
