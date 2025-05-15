import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function OrderSuccess() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            backgroundColor: "#00ffff", // Aqua background for a cool, fresh look
            padding: "20px",
            fontFamily: "'Segoe UI', sans-serif",
            color: "#2b2b3d" // Dark text color for contrast with the bright background
        },
        title: {
            fontSize: "3rem",
            color: "#ff0080", // Neon Pink
            marginBottom: "20px",
            textShadow: "0 0 15px #ff0080, 0 0 30px #ff00ff" // Pink glow effect
        },
        message: {
            fontSize: "1.5rem",
            color: "#2b2b3d", // Dark color for message text
            marginBottom: "30px",
            textShadow: "0 0 10px #00ffff, 0 0 20px #ff4500" // Cyan and Neon Orange glow
        },
        button: {
            padding: "14px 30px",
            fontSize: "1.2rem",
            backgroundColor: "#ff4500", // Neon Orange for button background
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textDecoration: "none",
            boxShadow: "0 0 20px #ff4500, 0 0 30px #ff4500", // Neon Orange glow
            textAlign: "center"
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🎉 Order Placed Successfully!</h1>
            <p style={styles.message}>Thank you for shopping with us.</p>
            <a href="/" style={styles.button}>Go to Home</a>
        </div>
    );
}
