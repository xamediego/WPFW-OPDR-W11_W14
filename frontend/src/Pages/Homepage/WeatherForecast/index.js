import React, {useEffect, useState} from 'react';
import styles from './WeatherForecast.module.scss';
import FetchData from "../../../Services/DataFetcher";

const Index = () => {
    const [averageTemp, setAverageTemp] = useState(0);
    const [maxTemp, setMaxTemp] = useState(0);

    useEffect(() => {
        FetchData("https://api.open-meteo.com/v1/forecast?latitude=52.3738&longitude=4.8910&hourly=temperature_2m", "application/x-www-form-urlencoded" , "GET").then(data => {
            const temps = [];

            for(let i = 9; i < 21; i++){
                temps[i-9] = data.hourly.temperature_2m[i];
            }

            let addTemp = 0;

            for(let i = 0; i < temps.length; i++){
                if(temps[i] > maxTemp){
                    setMaxTemp(temps[i])
                }
                addTemp += temps[i];
            }

            setAverageTemp(parseFloat(addTemp / temps.length).toFixed(1))
        });
    }, [])

    return (
        <div className={styles.RootDiv} >
            <div className={styles.ContentDiv}>
                <div className={styles.ForeCastDiv}>
                    <h3>Todays Average weather!: {averageTemp}°C</h3>
                    <h3>With a high of {maxTemp}°C !</h3>
                </div>
            </div>
        </div>
    );
};

export default Index;


