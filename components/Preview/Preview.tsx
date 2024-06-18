import styles from "./Preview.module.scss";

const Preview = () => {
    return (
        <div className={styles.preview}>
            <div className={styles.info}>
                <h1 className={styles.title}>
                    Аренда авто в <wbr /> твоем городе
                </h1>
                <h2 className={styles.description}>
                    Прокат или аренда автомобиля с водителем и без
                </h2>
            </div>
        </div>
    );
};

export default Preview;
