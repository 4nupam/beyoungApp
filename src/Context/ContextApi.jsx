import React, { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();

function ContextApi({ children }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetching() {
            try {
                let res = await fetch("https://fakestoreapi.com/products");
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                let ans = await res.json();
                setData(ans);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Optionally set an error state to inform the user
            } finally {
                setLoading(false);
            }
        }
        fetching();
    }, []);

    return (
        <DataContext.Provider value={{ data, loading }}>
            {children}
        </DataContext.Provider>
    );
}

// Custom hook to use the DataContext
export const useData = () => useContext(DataContext);

export default ContextApi;
