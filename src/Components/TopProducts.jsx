import Product from "./Product";
import styles from "./TopProducts.module.css";
import cocoaImage from "../assets/images-new/cocoa.jpg";
import cornImage from "../assets/images-new/corn.jpg";
import eggsImage from "../assets/images-new/eggs.jpg";
// import fruitsImage from "../assets/images/fruits.jpg";
import riceImage from "../assets/images-new/rice.jpg";
import wheatImage from "../assets/images-new/wheat.jpg";

const productImages = [
  { image: cocoaImage, name: "Cocoa" },
  { image: cornImage, name: "Corn" },
  { image: eggsImage, name: "Eggs" },
  // { image: fruitsImage, name: "Fruits" },
  { image: riceImage, name: "Rice" },
  { image: wheatImage, name: "Wheat" },
];

function TopProducts() {
  return (
    <div className={styles.topProductsSection}>
      <div className={styles.subContainer}>
        <p className={styles.topTitle}>Our Top Products</p>
        <div className={styles.productsContainer}>
          {productImages.map((product, index) => (
            <Product
              image={product.image}
              name={product.name}
              key={product.name}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
