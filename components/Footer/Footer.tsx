import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <Logo />
                        <div className={styles["work-info"]}>
                            <span className={styles.number}>
                                +7 (960) 871-64-99
                            </span>
                            <span className={styles.time}>
                                Рабочие часы: с 10:00 до 20:00
                            </span>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <NavigationMenu />
                        <div className={styles["sub-footer"]}>
                            <span className={styles.copyright}>© 2024 АРЕНДАВТО</span>
                            <Link to={'/home'} className={styles.policy}>Политика конфиденциальности</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
