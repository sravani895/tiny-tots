import { Link } from "react-router-dom";
import { useCart } from "../components/context/useCart";
import { FaTrash, FaArrowLeft } from "react-icons/fa";
import "./Cart.css";

const Cart = () => {
  const { cartItems, cartTotal, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart();

  return (
    <div className="cart-page-container container my-5" style={{ minHeight: "60vh" }}>
      <h2 className="mb-4 fw-bold" style={{ color: "#24335b" }}>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center empty-cart py-5">
          <p className="fs-4 text-muted">Your cart is currently empty.</p>
          <Link to="/" className="btn mt-3" style={{ background: "#f58d9e", color: "white", borderRadius: "30px", padding: "10px 30px", fontWeight: "bold" }}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item d-flex align-items-center mb-4 p-3 border rounded shadow-sm bg-white">
                  <img src={item.image} alt={item.name} className="cart-item-image me-4" style={{ width: "100px", height: "100px", objectFit: "contain", borderRadius: "8px" }} />
                  <div className="cart-item-details flex-grow-1">
                    <h5 className="mb-1 fw-bold" style={{ color: "#222" }}>{item.name}</h5>
                    <p className="text-muted mb-2">₹{item.price}</p>
                    <div className="cart-item-controls d-flex align-items-center">
                      <div className="btn-group me-4" role="group" style={{ background: "#f8f9fa", borderRadius: "20px", overflow: "hidden", border: "1px solid #dee2e6" }}>
                        <button type="button" className="btn btn-light btn-sm px-3" onClick={() => decreaseQuantity(item.id)}>-</button>
                        <span className="btn btn-light btn-sm disabled px-3 text-dark fw-bold" style={{ opacity: 1 }}>{item.quantity}</span>
                        <button type="button" className="btn btn-light btn-sm px-3" onClick={() => increaseQuantity(item.id)}>+</button>
                      </div>
                      <button className="btn btn-link text-danger p-0 text-decoration-none d-flex align-items-center" onClick={() => removeFromCart(item.id)}>
                        <FaTrash className="me-1" /> Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-total ms-3 text-end" style={{ minWidth: "100px" }}>
                    <h5 className="mb-0 fw-bold" style={{ color: "#ec4899" }}>₹{item.price * item.quantity}</h5>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-between mt-4">
              <Link to="/" className="btn btn-outline-secondary d-flex align-items-center" style={{ borderRadius: "30px", padding: "10px 20px" }}>
                <FaArrowLeft className="me-2" /> Continue Shopping
              </Link>
              <button className="btn btn-outline-danger" onClick={clearCart} style={{ borderRadius: "30px", padding: "10px 20px" }}>
                Clear Cart
              </button>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="cart-summary p-4 border rounded shadow-sm bg-light">
              <h4 className="mb-4 fw-bold" style={{ color: "#24335b" }}>Order Summary</h4>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Subtotal</span>
                <span className="fw-medium">₹{cartTotal}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Shipping</span>
                <span className="text-success fw-medium">Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold fs-5">Total</span>
                <span className="fw-bold fs-5" style={{ color: "#ec4899" }}>₹{cartTotal}</span>
              </div>
              <button className="btn w-100 py-3 fw-bold" style={{ background: "#ec4899", color: "white", borderRadius: "30px", fontSize: "16px", transition: "0.3s" }} onMouseOver={(e) => e.currentTarget.style.background = "#d9468c"} onMouseOut={(e) => e.currentTarget.style.background = "#ec4899"}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
