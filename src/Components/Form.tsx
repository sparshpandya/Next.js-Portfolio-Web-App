"use client";

import React, { LegacyRef, useRef, useState } from "react";

export default function Form({ children, action }: { children: React.ReactNode, action: Function }) {
    const ref = useRef<HTMLFormElement>(null);

    return (
        <form ref={ref} className="space-y-4" action={(e) => { action(e) }}>{children}</form>
    )
}