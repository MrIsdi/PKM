import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({text, link, style, icon}) => {
    return (
        <Link to={link} className={`${style} url bg-[#EB7C16] rounded-[15px] uppercase font-bold text-white text-center hover:shadow-[-1px_-1px_28px_0px_rgb(235,124,22)] px-4 py-2 mt-8 transition delay-100`}> {icon}{text}</Link>
    );
}

export default Button