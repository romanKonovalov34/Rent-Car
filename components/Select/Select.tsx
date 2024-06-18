import { ISelectProps } from "../../types/types";
import styles from "./Select.module.scss";
import SelectArrow from "/src/assets/SVG/SelectArrow.svg";

const Select = ({ options, value, setCurrentOption }: ISelectProps) => {

    const findOptionByValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        const option = options.find(option => option.code === value)
        if (option) {
            setCurrentOption({...option});
        }
        else {
            throw new Error('Не найдено нужной опции')
        }
    }

    return (
        <div className={styles.wrapper}>
            <select
                className={styles.component}
                value={value.name}
                onChange={findOptionByValue}
            >
                <option disabled>{value.name}</option>
                {options.map((option) => {
                    if (value.id !== option.id) {
                        return (
                            <option key={option.code} value={option.code}>
                                {option.name}
                            </option>
                        );
                    }
                })}
            </select>
            <div className={styles["arrow-wrapper"]}>
                <SelectArrow />
            </div>
        </div>
    );
};

export default Select;
