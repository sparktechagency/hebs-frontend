import CartProducts from "@/app/component/cart/cartProducts";
import FeatureBook from "@/app/component/Home/FeatureBook";

const CartPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center p-4 mb:p-12">
      <CartProducts />
      </div>
      <div className="mb:relative mb:top-28 lg:relative lg:top-28">
        <FeatureBook />
      </div>
    </div>
  );
};

export default CartPage;
