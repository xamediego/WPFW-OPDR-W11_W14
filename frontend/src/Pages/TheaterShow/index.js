import React, {useEffect, useState} from 'react';
import styles from './TheaterShow.module.scss';
import {DayPicker} from "react-day-picker";
import {addDays, format} from "date-fns";
import * as EmailValidator from "email-validator";
import FetchData from "../../Services/DataFetcher";
import {useNavigate} from "react-router-dom";


const Index = () => {

    const navigate = useNavigate();

    const today = new Date();
    const month = addDays(new Date(), 14)

    const [fullDates, setFullDates] = useState([]);
    const [date, setDate] = useState(new Date());
    const [count, setCount] = useState("");
    const [email, setEmail] = useState("");
    const [countError, setCountError] = useState("");
    const [emailError, setEmailError] = useState("");

    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p>You picked {format(date, 'PP')}.</p>;
    }

    useEffect(() => {

        //kino
        const s = `${today.getFullYear()}-${parseInt(today.getMonth() + 1)}-${today.getDate()}`
        const e = `${month.getFullYear()}-${parseInt(month.getMonth() + 1)}-${month.getDate()}`

        FetchData(`http://localhost:8000/GetFullDates/${s}to${e}`, "application/json", "GET").then(data => {
                if (data != null) {
                    setFullDates(Array.from(data, d => new Date(d)));
                }
            }
        );

    }, [])

    async function Bestel() {

        if (count < 1 || count > 10) {
            setCountError("Please enter a number below 10 and above 0")
            document.getElementById("aantal").style.borderColor = "red"
        } else {
            document.getElementById("aantal").style.borderColor = ""
            setCountError("")
        }

        if (!EmailValidator.validate(email)) {
            setEmailError("Please enter a valid email address")
            document.getElementById("email").style.borderColor = "red"
        } else {
            document.getElementById("email").style.borderColor = ""
            setEmailError("")
        }

        if (count > 0 && count < 11 && EmailValidator.validate(email) && (date >= new Date() || date <= addDays(new Date(), 14))) {
            document.getElementById("aantal").style.borderColor = ""
            document.getElementById("email").style.borderColor = ""

            const body = {
                email,
                count,
                date,
            }

            let link = 'http://localhost:8000/boek';

            await fetch(link, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(body)
            }).then((res) =>
                res.status === 201 ? res.json() :
                    res.status === 404 ? console.log("Source not available: " + res.status) : console.log("Forbidden: " + res.statusText)).then(data => data ? nav(data) : console.log("No data returned"));
        }

        function nav(data) {
            navigate('/reserveringinfo', {state: data})
        }
    }

    return (
        <div className={styles.RootDiv} id="RootDiv">

            <div className={styles.TitleDiv}>
                <h1 className={styles.Title}>Theatershow Sneed</h1>

                <hr style={{width: '60vw', color: "#2B1313"}}/>
            </div>

            <div className={styles.ContentDiv}>

                <div className={styles.CalenderContainer} id="CalenderDiv">
                    <DayPicker className={styles.Calender}
                               id="calender"

                               defaultMonth={new Date()}
                               footer={footer}
                               showOutsideDays

                               selected={date}
                               onSelect={setDate}

                               fromDate={today}
                               toDate={month}

                               disabled={fullDates}

                               mode="single"
                    />
                </div>

                <form id="ReservationForm" className={styles.InputFieldForm} onSubmit={(e) => {
                    e.preventDefault();
                    Bestel();
                }}>
                    <label
                        className={styles.InputField}
                        htmlFor="aantal">Aantal mensen
                        <input id="aantal" type="number" onChange={(e) => setCount(e.target.value)}/>
                        <p className={styles.errorMessage}>{countError}</p>
                    </label>

                    <label
                        className={styles.InputField}
                        htmlFor="email">Email
                        <input id="email" type="text" onChange={(e) => setEmail(e.target.value)}/>
                        <p className={styles.errorMessage}>{emailError}</p>
                    </label>

                    <button id="submitButton" type="submit" className="PrimaryButton"
                            style={{width: '230px', height: '40px'}}>
                        Boek
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Index;
