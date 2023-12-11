'use client';

import { useEffect, useState } from "react";

interface ClientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {
    const [hasMOunted, setHasMoounted] = useState(false);

    useEffect(() => {
        setHasMoounted(true);
    }, [])

    if (!hasMOunted){
        return null;
    }

    return (
        <>
            {children}
        </>
    );
}

export default ClientOnly;