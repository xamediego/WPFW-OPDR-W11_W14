import React, {useEffect, useState} from 'react';
import styles from './TicketInfo.module.scss';
import {useTicketInfo} from "../TicketContext";
import * as EmailValidator from "email-validator";

const TicketInfo = () => {

    const datum = new Date();

    const ticketInfo = useTicketInfo();
    const [ticketDate, setTicketDate] = useState(datum.getUTCDate() + "/" + datum.getUTCMonth() + "/" + datum.getFullYear());
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (ticketInfo.selected !== undefined) {
            setTicketDate(ticketInfo.selected.getDate() + "/" + (parseInt(ticketInfo.selected.getMonth()) + 1) + "/" + ticketInfo.selected.getFullYear())
        }
    }, [ticketInfo])

    function Bestel() {
        if (!EmailValidator.validate(email)) {
            setError("Please enter a valid email address")
        } else {
            setError("")
            if (ticketInfo.adultCount < 1 && ticketInfo.minorCount < 1) {
                console.log("needs at least 1 living person")
            } else {
                if (ticketInfo.adultCount < 1) {
                    console.log("needs at least 1 adult")
                } else {
                    console.log("bestel")
                }
            }
        }
    }

    return (
        <div className={styles.RootDiv}>

            <div className={styles.titlediv}>
                <h2>
                    {ticketDate}
                </h2>
                <div className={styles.LineDiv}>
                    <hr style={{width: "300px"}}/>
                </div>
            </div>

            <label
                className={styles.InputField}
                htmlFor="email">Email*
                <input onChange={(e) => setEmail(e.target.value)} id="email" type="text"
                       className={styles.EmailInput} placeholder="someone@example.com"/>
                <p className={styles.errorMessage}>{error}</p>
            </label>

            <div className={styles.info}>
                <h4>Personen: {ticketInfo.minorCount + ticketInfo.adultCount}</h4>
                <h4>Prijs: € {ticketInfo.adultCount * 20}</h4>
            </div>

            <div className={styles.bottomDiv}>
                <button onClick={Bestel} className={styles.purchaseButton}>Tickets Bestellen</button>
            </div>

        </div>
    );
};

export default TicketInfo;
