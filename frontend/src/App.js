import './App.scss';
import Header from "./Menu/Header";
import Homepage from "./Pages/Homepage";
import Footer from "./Menu/Footer";
import TicketPurchase from "./Pages/TicketPurchase";
import OverOns from "./Pages/OverOns";
import {Navigate, Route, Routes} from "react-router-dom";
import TheaterShow from "./Pages/TheaterShow";
import ReserveringsInfo from "./Pages/ReserveringsInfo";

function App() {

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/ticket" element={<TicketPurchase/>}/>
                <Route path="/overons" element={<OverOns/>}/>

                <Route path="/sneed" element={<TheaterShow/>}/>
                
                <Route path="/componentB" element={<ReserveringsInfo/>}/>

                {/*Link back to main menu*/}
                <Route path="*" element={<Navigate to="/"/>} />

            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
