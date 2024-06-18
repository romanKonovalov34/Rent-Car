import { Link } from 'react-router-dom';
import styles from './Logo.module.scss'

const Logo = () => {
    return (
        <Link to={'/home'} className={styles.logo}>
            <span className={styles.text}>АРЕНДАВТО</span>
            <span className={styles['sub-text']}>сервис аренды автомобилей</span>
        </Link>
    );
};

export default Logo;
