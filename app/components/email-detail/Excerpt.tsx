import React from "react";

interface ExcerptProps {
    text: string;
    maxLength: number;
}

const Excerpt: React.FC<ExcerptProps> = ({ text, maxLength }) => {
    return (
        <span>
            {text.length > maxLength ? `${text.substring(0, maxLength)}...` : text}
        </span>
    );
};

export default Excerpt;