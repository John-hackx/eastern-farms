import styles from "./Service.module.css";

function Service({ service }) {
  return (
    <div className={styles.service}>
      <div className={styles.left}>
        <img src={service.image} alt={service.name} />
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          <p>{service.name}</p>
        </div>
        <div className={styles.description}>
          <p>{service.description}</p>
        </div>
        <div className={styles.button}>
          <button className={styles.button}>More Info</button>
        </div>
      </div>
    </div>
  );
}

export default Service;
