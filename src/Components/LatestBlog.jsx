import clsx from "clsx";
import styles from "./LatestBlog.module.css";
import blogImage1 from "../assets/images/cocoa.jpg";
import blogImage2 from "../assets/images/eggs.jpg";

function LatestBlog() {
  return (
    <div className={clsx(styles.latestBlog)}>
      <div className={clsx(styles.blogTitle)}>
        <h3>Latest on Our Blog</h3>
      </div>
      <div className={clsx(styles.blogCardsContainer)}>
        <BlogCard image={blogImage1} />
        <BlogCard image={blogImage2} />
      </div>
    </div>
  );
}

function BlogCard({ image }) {
  return (
    <div className={clsx(styles.blogCard)}>
      <div className={styles.blogImage}>
        <img src={image} alt="blog-image" />
      </div>
      <div className={styles.blogContent}>
        <p className={styles.blogDate}>Jan 21, 2025</p>
        <p className={styles.blogTitle}>10-acre Maize Plantation Completed</p>
        <p className={styles.blogWriter}>Mr. Samuel Boakye</p>
      </div>
    </div>
  );
}

export default LatestBlog;
