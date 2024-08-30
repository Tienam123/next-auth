import React from "react";

export interface PageProps {
    children: React.ReactNode
}

const AuthLayout = ({children}: PageProps) => {
    return (
        <>
            {children}
        </>
    );
};


export default AuthLayout;