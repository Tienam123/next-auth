"use client"

import {Button} from "@/components/ui/button";
import React from "react";
import Link from "next/link";

export interface BackButtonProps {
    href: string;
    label: string;
}

const BackButton = ({href, label}: BackButtonProps) => {
    return (
        <Button variant="link" className="font-normal w-full" size="sm" asChild>
            <Link href={href}>{label}</Link>
         </Button>
    );
};

BackButton.propTypes = {};

export default BackButton;