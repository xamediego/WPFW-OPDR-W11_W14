import React from 'react';
import styles from './Date.module.scss';
import {addMonths, format} from 'date-fns';
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import {useTicketInfo} from "../TicketContext";

export default function DatePicker() {

    const ticketInfo = useTicketInfo();
    const today = new Date();
    const month = addMonths(new Date(), 6)

    let footer = <p>Please pick a day.</p>;
    if (ticketInfo.selected) {
        footer = <p>You picked {format(ticketInfo.selected, 'PP')}.</p>;
    }

    return (
        <div className={styles.DateDivContainer}>
            <div className={styles.TitleDiv}>
                <h2>
                    Selecteer een datum
                </h2>
            </div>
            <div className={styles.CalenderContainer}>
                <DayPicker className={styles.Calender}

                           defaultMonth={new Date()}
                           footer={footer}
                           showOutsideDays

                           selected={ticketInfo.selected}
                           onSelect={ticketInfo.setSelected}

                           fromDate={today}
                           toDate={month}

                           mode="single"
                />
            </div>
        </div>
    );
}

