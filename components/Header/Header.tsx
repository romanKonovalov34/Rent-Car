import Logo from "../Logo/Logo";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import styles from "./Header.module.scss";
import ProfileButton from "../ProfileButton/ProfileButton";
import { Link } from "react-router-dom";
import { LS_AUTH_KEY } from "@/constants/accessToken";

const Header = () => {

    const identitySourceRedirect = () => {
        if (localStorage.getItem(LS_AUTH_KEY)) return '/user';
        else return '/login';
    }

    return (
        <header className={styles.header}>
            <div className={styles["container-large"]}>
                <div className={styles.wrapper}>
                    <Logo />
                    <NavigationMenu />
                    <span className={styles.number}>+7 (960) 871-64-99</span>
                    <Link to={identitySourceRedirect()}>
                        <ProfileButton />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
