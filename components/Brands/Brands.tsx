import styles from "./Brands.module.scss";
import LadaSVG from "/src/assets/SVG/brands/LadaSVG.svg";
import RenaultSVG from "/src/assets/SVG/brands/RenaultSVG.svg";
import SkodaSVG from "/src/assets/SVG/brands/SkodaSVG.svg";
import VolkswagenSVG from "/src/assets/SVG/brands/VolkswagenSVG.svg";

const Brands = () => {
    return (
        <div>
            <ul className={styles.brands}>
                <li className={styles.brand}>
                    <LadaSVG />
                </li>
                <li className={styles.brand}>
                    <RenaultSVG />
                </li>
                <li className={styles.brand}>
                    <SkodaSVG />
                </li>
                <li className={styles.brand}>
                    <VolkswagenSVG />
                </li>
            </ul>
        </div>
    );
};

export default Brands;
