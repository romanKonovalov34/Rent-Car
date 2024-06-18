import styles from "./Loader.module.scss";

const Loader = ({text}: {text: string}) => {
    return (
    <div className={styles.component}>
        <span className={styles.loader}></span>
        <p className={styles.text}>{text}</p>
    </div>
    )
};

export default Loader;
