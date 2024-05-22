import { useRouter } from "next/router";
import React from "react";

const ProductIdPage: React.FC = () => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div className="text-center">
      <h2>Product Id Details {productId}</h2>
    </div>
  );
};

export default ProductIdPage;
