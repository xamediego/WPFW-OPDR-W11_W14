import React, {createContext, useContext, useState} from "react";

const TicketContext = createContext();

const TicketContextProvider = ({ children }) => {
    const [adultCount, setAdultCount] = useState(0);
    const [minorCount, setMinorCount] = useState(0);
    const [selected, setSelected] = useState(new Date());

    const value = {
        adultCount, setAdultCount,
        minorCount, setMinorCount,
        selected, setSelected
    };

    return <TicketContext.Provider value={value}>{children}</TicketContext.Provider>;
};

function useTicketInfo() {
    return useContext(TicketContext);
}

export { useTicketInfo, TicketContextProvider };
