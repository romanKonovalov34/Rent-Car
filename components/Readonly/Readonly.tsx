import { IPendingComponentProps } from '@/types/types';
import styles from './Readonly.module.scss';
import Plate from '../Plate/Plate';

const Readonly = ({proposal, status}: IPendingComponentProps) => {
  return (
    <div className={styles.component}>
        <div className={styles['container-large']}>
                <Plate status={status} />
                <div className={styles.wrapper}>
                        <form className={styles.form}>
                            <div className={styles.inner}>
                                <h1 className={`${styles.title}`}>Данные отправленной заявки</h1>
                                <div className={styles.name}>
                                    <div className={styles.input}>
                                        <label className={styles.label} htmlFor="firstName">
                                            Имя:
                                        </label>
                                        <input className={styles.field} readOnly value={proposal.person.firstName} />
                                    </div>
                                    <div className={styles.input}>
                                        <label className={styles.label} htmlFor="lastName">
                                            Фамилия:
                                        </label>
                                        <input className={styles.field} readOnly value={proposal.person.lastName} />
                                    </div>
                                </div>
                                <div className={styles.input}>
                                    <label className={styles.label} htmlFor="driverLicense">
                                        Водительское удостоверение:
                                    </label>
                                    <input className={styles.field} readOnly value={proposal.person.driverLicense}/>
                                </div>
                                <div className={styles.input}>
                                    <label className={styles.label} htmlFor="Email">
                                        Email:
                                    </label>
                                    <input className={styles.field} readOnly value={proposal.person.email} />
                                </div>
                                <div className={`${styles["select-wrapper"]} ${styles.city}`}>
                                    <label className={styles.label}>
                                        Город:
                                    </label>
                                    <input className={styles.field} readOnly value={proposal.city.name}/>
                                </div>
                                <div className={styles.selects}>
                                    <div className={styles["select-wrapper"]}>
                                        <label className={styles.label}>
                                            Марка:
                                        </label>
                                        <input className={styles.field} readOnly value={proposal.autoCategory.name}/>
                                    </div>
                                    <div className={styles["select-wrapper"]}>
                                        <label className={styles.label}>
                                            Модель:
                                        </label>
                                        <input className={styles.field} readOnly value={proposal.model.name}/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
  )
}

export default Readonly;