import { Link } from "react-router-dom";
import { useWishlist } from "../components/context/useWishlist";
import { useCart } from "../components/context/useCart";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart, cartItems, increaseQuantity } = useCart();

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      increaseQuantity(item.id);
    } else {
      addToCart(item);
    }
  };

  return (
    <div className="wishlist-page-container container my-5" style={{ minHeight: "60vh" }}>
      <h2 className="mb-4 fw-bold text-center" style={{ color: "#24335b" }}>My Wishlist</h2>
      
      {wishlistItems.length === 0 ? (
        <div className="text-center empty-wishlist py-5">
          <p className="fs-4 text-muted">Your wishlist is empty.</p>
          <Link to="/" className="btn mt-3 shadow-sm" style={{ background: "#f58d9e", color: "white", borderRadius: "30px", padding: "10px 30px", fontWeight: "bold" }}>
            Explore Products
          </Link>
        </div>
      ) : (
        <div className="row g-4">
          {wishlistItems.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card wishlist-card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative">
                
                {/* Remove from wishlist button */}
                <button 
                  onClick={() => removeFromWishlist(item.id)} 
                  className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle d-flex align-items-center justify-content-center shadow-sm text-danger" 
                  style={{ width: "35px", height: "35px", zIndex: 10 }}
                  aria-label="Remove from wishlist"
                >
                  <FaTrash size={14} />
                </button>

                <div className="wishlist-img-wrapper" style={{ height: "200px", background: "#f9f9f9", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
                  <img src={item.image} className="card-img-top" alt={item.name} style={{ maxHeight: "100%", objectFit: "contain" }} />
                </div>
                
                <div className="card-body text-center d-flex flex-column">
                  <h5 className="card-title fw-bold" style={{ fontSize: "16px", color: "#222", flexGrow: 1 }}>{item.name}</h5>
                  <p className="card-text fw-bold mb-3" style={{ fontSize: "18px", color: "#ec4899" }}>₹{item.price}</p>
                  
                  <button 
                    onClick={() => handleAddToCart(item)} 
                    className="btn w-100 rounded-pill fw-bold text-white shadow-sm mt-auto d-flex align-items-center justify-content-center"
                    style={{ background: "#f58d9e", padding: "10px" }}
                  >
                    <FaShoppingCart className="me-2" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
