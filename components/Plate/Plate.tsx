import StatusesCodes from "@/constants/StatusesCodes";
import styles from "./Plate.module.scss";
import { IPlateProps } from "@/types/types";

const Plate = ({ status }: IPlateProps) => {
    return (
        <div className={`${styles.component} ${styles[status]}`}>
            <div className={styles.container}>
                {status === StatusesCodes.PENDING && (
                    <p className={styles.text}>Заявка находится на рассмотрении</p>
                )}
                {status === StatusesCodes.SUCCESS && (
                    <p className={styles.text}>Вы успешно зарегистрировали заявку</p>
                )}
                {status === StatusesCodes.REJECTED && (
                    <p className={styles.text}>Ваша заявка отклонена</p>
                )}
            </div>
        </div>
    );
};

export default Plate;
