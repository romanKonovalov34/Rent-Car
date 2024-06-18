import { IRentStepProps } from "@/types/types";
import RentStep from "../RentStep/RentStep";
import styles from "./RentSteps.module.scss";
import { RENT_STEPS } from "@/constants/rentSteps";

const RentSteps = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.steps}>
                {RENT_STEPS.map((step) => {
                    return (
                        <li className={styles["step-wrapper"]} key={step.title}>
                            <RentStep
                                title={step.title}
                                description={step.description}
                            >
                                {step.children}
                            </RentStep>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default RentSteps;
