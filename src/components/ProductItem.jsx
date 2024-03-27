import Link from "next/link";

const ProductItem = ({ product }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <img src={product.image} alt={product.title} className="w-full mb-4" />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <Link href={`/${product.id}`}>
        <p className="mt-2 block text-blue-500 hover:underline">View Details</p>
      </Link>
    </div>
  );
};

export default ProductItem;
