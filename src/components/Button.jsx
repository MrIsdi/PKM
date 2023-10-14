import React from 'react'

class Button extends React.Component {
    render(){
        const buttonText = this.props.text;
        return (
            <button className='bg-[#EB7C16] rounded-[15px] uppercase font-bold text-white hover:shadow-[-1px_-1px_28px_0px_rgb(235,124,22)] px-4 py-2 mt-8 transition delay-100'>{buttonText}</button>
          );
    }
}


export default Button