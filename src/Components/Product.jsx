import styles from "./Product.module.css";

function Product({ name, image }) {
  return (
    <div className={styles.product}>
      <p className={styles.productName}>{name}</p>
      <img src={image} alt={name} />
    </div>
  );
}

export default Product;
