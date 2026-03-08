"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { salonData } from "../../data/salon";

type SalonData = typeof salonData;

interface SalonContextType {
    salon: SalonData;
}

const SalonContext = createContext<SalonContextType | undefined>(undefined);

export function SalonProvider({ children }: { children: React.ReactNode }) {
    const [salon, setSalon] = useState<SalonData>(salonData);

    useEffect(() => {
        // Check for "name" query parameter in URL
        const params = new URLSearchParams(window.location.search);
        const nameOverride = params.get("name");

        if (nameOverride) {
            setSalon((prev) => ({
                ...prev,
                name: decodeURIComponent(nameOverride),
            }));
        }
    }, []);

    return (
        <SalonContext.Provider value= {{ salon }
}>
    { children }
    </SalonContext.Provider>
    );
}

export function useSalon() {
    const context = useContext(SalonContext);
    if (context === undefined) {
        throw new Error("useSalon must be used within a SalonProvider");
    }
    return context;
}
