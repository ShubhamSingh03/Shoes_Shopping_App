import "./Cart.css";
import logo from "../assets/logov2.png";
import {
  MdOutlineRemoveShoppingCart,
  MdOutlineAddShoppingCart,
} from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { toast } from "react-toastify";

const Cart = ({ cartItem, buyNow, removeItem }) => {
  let amount = 0;
  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.shoePrice);
  });
  return (
    <>
      <section className="cartSection" id="cartSection">
        <span className="cartShoesHead">
          <img src={logo} alt="" className="logoShoes" />
          <h1>Shopping Cart</h1>
        </span>
        <div className="cartBody">
          <div class="cartContainer">
            {/* header section starts here */}
            <div class="headerSection">
              <h3 class="heading">Shopping Cart</h3>
              <img src={logo} alt="logo-cart" className="header-image" />
            </div>
            {/* header section ends here */}

            {/* cart items cards here */}
            {cartItem.map((item) => (
              <div class="cartItems">
                <div class="imageBox">
                  <img src={item.shoeImg} id="cartShoeImg" />
                </div>
                <div class="about">
                  <h6>Product: </h6>
                  <h1 class="title">{item.shoeName}</h1>
                  <h6 className="subtitle">{item.shoeCategory}</h6>
                </div>
                <div class="price">
                  <div class="amount"> ₹{item.shoePrice}</div>
                  <button className="remove" onClick={() => removeItem(item)}>
                    Remove Item <MdOutlineRemoveShoppingCart />
                  </button>
                </div>
              </div>
              // cart items cards ends here
            ))}
            <hr />
            {cartItem.length >= 1 ? (
              // Checkout section here
              <div class="checkout">
                <div class="total">
                  <h2 class="totalAmount">Total: ₹{amount}</h2>
                  <button class="button" onClick={buyNow}>
                    Checkout
                  </button>
                </div>
              </div>
            ) : (
              // Checkout section ends here
              <div id="cartEmptyTitle">
                <GiShoppingCart size={"8rem"} />
                <h1>Your Cart is empty!</h1>
                <p>Add items to it now.</p>
                <button
                  className="buyBtn"
                  onClick={() => {
                    console.log("he");
                    toast("🛒 Cart is Empty BUY NOW !", {
                      position: "top-right",
                      autoClose: 1500,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    });
                  }}
                >
                  BUY NOW <MdOutlineAddShoppingCart size={"1.2rem"} />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
