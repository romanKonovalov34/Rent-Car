import { ICarProps } from "@/types/types";
import styles from "./CarCard.module.scss";
import CheckEngineSVG from "/src/assets/SVG/carParameters/CheckEngineSVG.svg";
import WheelSVG from "/src/assets/SVG/carParameters/WheelSVG.svg";
import { Link } from "react-router-dom";
import { initProposalSlice } from "@/constants/initProposalSlice";
import { initAutoCategoryCurrentOption } from "@/constants/initProposalSelectOptions";

const CarCard = ({car}: ICarProps) => {

    const newProposal = {...initProposalSlice.newProposal};
    newProposal.autoCategory = initAutoCategoryCurrentOption(car.autoCategoryName, car.autoCategoryCode);
    newProposal.model = initAutoCategoryCurrentOption(car.modelName, car.modelCode);

    return (
        <article className={styles.card}>
            <img
                className={styles.image}
                src={car.url}
                alt={`Автомобиль ${car.autoCategoryName} ${car.modelName}`}
            />
            <div className={styles.info}>
                <span className={styles.name}>{`${car.autoCategoryName} ${car.modelName}`}</span>
                <div className={styles.parameters}>
                    <span className={styles.parameter}>
                        <CheckEngineSVG />
                        <span>{car.engineCapacity} л/бензин</span>
                    </span>
                    <span className={styles.parameter}>
                        <WheelSVG />
                        <span>{car.enginePower} л.с.</span>
                    </span>
                </div>
                <div className={styles.bottom}>
                    <Link className={styles.button} to={'/proposal'} state={{proposal: newProposal, isNewProposal: true, carData: true}}>Забронировать</Link>
                    <span className={styles.price}>
                        от <span>{car.price}</span> руб/сут.
                    </span>
                </div>
            </div>
        </article>
    );
};

export default CarCard;
