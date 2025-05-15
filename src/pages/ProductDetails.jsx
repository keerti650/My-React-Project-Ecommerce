import { useParams, useNavigate } from "react-router-dom";
import { products } from "../date/product.js";
import { useCart } from "../context/cartContext.jsx";

export default function ProductsDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const styles = {
        container: {
            maxWidth: "800px",
            margin: "50px auto",
            padding: "30px",
            boxShadow: "0 0 20px rgba(138, 43, 226, 0.7)", // Neon violet glow
            borderRadius: "12px",
            backgroundColor: "#1a1a2e", // Dark cyber background
            fontFamily: "'Segoe UI', sans-serif",
            textAlign: "center",
            color: "#e0b3ff" // Light violet text
        },
        image: {
            maxWidth: "100%",
            height: "auto",
            borderRadius: "12px",
            marginBottom: "20px",
            boxShadow: "0 0 15px #8a2be2" // Violet glow
        },
        name: {
            fontSize: "2.5rem",
            marginBottom: "15px",
            color: "#d580ff", // Light violet
            textShadow: "0 0 5px #bf00ff"
        },
        description: {
            fontSize: "1.2rem",
            marginBottom: "20px",
            color: "#dcdcff"
        },
        price: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#39ff14", // Neon green
            textShadow: "0 0 5px #39ff14",
            marginBottom: "25px"
        },
        button: {
            padding: "14px 30px",
            fontSize: "1rem",
            backgroundColor: "#8a2be2", // Violet
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 0 10px #8a2be2, 0 0 20px #8a2be2"
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.name}>{product.name}</h2>
            <img src={product.image} alt={product.name} style={styles.image} />
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>₹{product.price}</p>
            <button
                style={styles.button}
                onClick={() => {
                    addToCart(product);
                    navigate("/cart");
                }}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#bf00ff";
                    e.target.style.boxShadow = "0 0 20px #bf00ff";
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#8a2be2";
                    e.target.style.boxShadow = "0 0 10px #8a2be2, 0 0 20px #8a2be2";
                }}
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}
