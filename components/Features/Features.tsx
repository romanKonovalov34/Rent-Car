import { Link } from "react-router-dom";
import styles from "./Features.module.scss";

const Features = () => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.features}>
                <li className={styles.feature}>
                    <span className={styles.number}>1</span>
                    Большой парк автомобилей в наличии
                </li>
                <li className={styles.feature}>
                    <span className={styles.number}>2</span>
                    Доставка авто до вашей геолокации
                </li>
                <li className={styles.feature}>
                    <span className={styles.number}>3</span>
                    Частые скидки постоянным клиентам
                </li>
                <li className={styles.feature}>
                    <span className={styles.number}>5</span>
                    Самые низкие цены
                </li>
            </ul>
            <Link className={styles.button} to={'/cars'}>Заказать авто</Link>
        </div>
    );
};

export default Features;
