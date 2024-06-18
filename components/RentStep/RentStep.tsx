import { IRentStepProps } from "@/types/types";
import styles from "./RentStep.module.scss";

const RentStep = ({children, title, description}: IRentStepProps) => {
    return (
        <div className={styles.step}>
            <div className={styles.wrapper}>
                {children}
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default RentStep;
