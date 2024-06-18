import styles from "./Achievements.module.scss";

const Achievements = () => {
    return (
        <div className={styles.achievements}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <img
                        src={require("/src/assets/images/achievementsOctavia.jpg")}
                        alt=""
                    />
                    <div className={styles["info-wrapper"]}>
                        <div className={styles.info}>
                            <h3 className={styles.title}>
                                Доверьтесь нашей работе
                            </h3>
                            <p className={styles.text}>
                                Для получения более подробной информации о
                                прокате авто можно посетить наш офис, оставить
                                заявку на сайте или позвонить по телефону
                                <span> +7 (960) 871-64-99</span>
                            </p>
                            <p className={styles.text}>
                                Мы всегда рады помочь Вам по любым вопросам и
                                обеспечить качественным автомобилем
                            </p>
                        </div>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <span>8</span>
                                Более 8 лет на рынке проката авто
                            </li>
                            <li className={styles.item}>
                                <span>$</span>
                                Премиальные и эксклюзивные модели
                            </li>
                            <li className={styles.item}>
                                <span>100</span>
                                Автопарк стоимостью более 100 млн. рублей
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
