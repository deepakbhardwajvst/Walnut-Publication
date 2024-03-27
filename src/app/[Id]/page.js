import { useRouter } from "next/router";
import axios from "axios";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full mb-4"
          />
          <p className="text-gray-600">{product.description}</p>
        </div>
        <div>
          <p className="text-gray-800 text-lg font-semibold">
            ${product.price}
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
