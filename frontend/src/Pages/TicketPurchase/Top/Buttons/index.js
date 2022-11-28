import styles from './Buttons.module.scss';
import {Icon} from "@iconify/react/dist/iconify";

export default function Buttons(props) {


    return (
        <div className={styles.buttons}>

            <button onClick={() => props.count > 0 ? props.setCount(props.count - 1) : props.count} className={styles.circle}><Icon icon="mdi:minus" className={styles.logo}/></button>

            <div className={styles.block}><p id="amount">{props.count}</p></div>

            <button onClick={() => props.setCount(props.count + 1)} className={styles.circle}><Icon icon="mdi:plus" className={styles.logo}/></button>

        </div>
    );
};


