import React from "react";

interface ExcerptProps {
    text: string;
    maxLength: number;
}

export default function Excerpt ({ text, maxLength }: ExcerptProps) {
    return (
        <span>
            {text.length > maxLength ? `${text.substring(0, maxLength)}...` : text}
        </span>
    );
};