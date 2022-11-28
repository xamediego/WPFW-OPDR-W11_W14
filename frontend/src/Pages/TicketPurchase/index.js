import React from 'react';
import styles from './TicketPurchase.module.scss'
import Top from "./Top";
import DatePicker from "./DatePicker";
import TicketInfo from "./TicketInfo";
import {TicketContextProvider} from "./TicketContext";


const TicketPurchase = () => {
    return (
        <TicketContextProvider>
            <div className={styles.MainBody}>
                <div>
                    <div>
                        <h1 className={styles.Title}>
                            Reserveer je bezoek
                        </h1>
                    </div>
                    <div className={styles.LineDiv}>
                        <hr style={{color: "#2B1313"}}/>
                    </div>
                </div>

                <div>
                    <Top/>
                </div>
                <div className={styles.LowerDiv}>
                    <DatePicker/>
                    <TicketInfo/>
                </div>
            </div>
        </TicketContextProvider>
    );
};

export default TicketPurchase;
