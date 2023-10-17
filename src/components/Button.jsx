import React from 'react'
import { Link } from 'react-router-dom';

class Button extends React.Component {
    render(){
        const buttonText = this.props.text;
        const buttonLink = this.props.link;
        const buttonClass = this.props.style;
        const buttonIcon = this.props.icon;

        return (
            <Link to={buttonLink} className={`${buttonClass} url bg-[#EB7C16] rounded-[15px] uppercase font-bold text-white text-center hover:shadow-[-1px_-1px_28px_0px_rgb(235,124,22)] px-4 py-2 mt-8 transition delay-100`}>{buttonText} {buttonIcon}</Link>
          ); 


        //   return (
        //     <Link to={buttonLink} className={`${buttonClass} bg-[#EB7C16] w-[168px] rounded-[15px] uppercase font-bold text-white text-center hover:shadow-[-1px_-1px_28px_0px_rgb(235,124,22)] px-4 py-2 mt-8 transition delay-100`}>{buttonText}</Link>
        //   );
    }
}


export default Button