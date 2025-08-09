import { Link } from "react-router";

const styles = {
  container: {
    textAlign: "center",
    justifyContent: "center",
    padding: "80px 20px",
    minHeight: "85vh",
  },
  heading: {
    fontSize: "6rem",
    fontWeight: "bold",
    color: "#f1f1f1",
    marginBottom: "20px",
  },
  message: {
    fontSize: "1.5rem",
    color: "#b0b3b8",
    marginBottom: "30px",
  },
  link: {
    display: "inline-block",
    padding: "12px 32px",
    background: "#007bff",
    color: "#fff",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "1rem",
    transition: "background 0.2s",
  },
};

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.message}>
        Oops! The page you're looking for does not exist
      </p>
      <Link to={"/"} style={styles.link}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
