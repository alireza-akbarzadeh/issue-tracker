import React from "react";

interface ProductPage {
  params: { slug: string };
  searchParams: { sortOrder: string };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: ProductPage) => {
  return (
    <div>
      <h1>Product Page</h1>
      {slug}
      {sortOrder}
    </div>
  );
};

export default ProductPage;
