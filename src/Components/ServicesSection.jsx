import Service from "./Service";
import styles from "./ServicesSection.module.css";
import serviceImage1 from "../assets/images/service-1.jpg";
import serviceImage2 from "../assets/images/service-2.jpg";
import serviceImage3 from "../assets/images/service-3.jpg";
import serviceImage4 from "../assets/images/service-4.jpg";

const services = [
  {
    image: serviceImage1,
    name: "Sustainable Crop Cultivation",
    description:
      "We use advanced farming techniques and eco-friendly practices to grow high-quality, nutrient-rich crops while preserving soil health and biodiversity.",
  },
  {
    image: serviceImage2,
    name: "Quality Processing & Packaging",
    description:
      "Our crops undergo strict quality control, processing, and hygienic packaging to meet international standards, ensuring freshness and safety from farm to market.",
  },
  {
    image: serviceImage3,
    name: "Export & Global Distribution",
    description:
      "With a strong supply chain and logistics network, we export premium agricultural products worldwide, delivering fresh, high-quality produce to global markets.",
  },
  {
    image: serviceImage4,
    name: "Agricultural Consultancy & Support",
    description:
      "We provide expert guidance on modern farming techniques, crop management, and sustainable agriculture to help farmers increase productivity and profitability.",
  },
];

function ServicesSection({ servicesRef }) {
  return (
    <div ref={servicesRef} id="services" className={styles.servicesSection}>
      <p className={styles.serviceTitle}>Services We Provide</p>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <Service service={service} index={index} key={service.name} />
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
