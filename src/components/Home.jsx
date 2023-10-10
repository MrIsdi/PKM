import React from 'react'

function Home() {
    return (
        <React.Fragment>
            <section className='lg:container flex mx-auto mt-[138px] px-5 justify-between'>
                <div className='lg:basis-1/2 basis-full'>
                    <p className="text-4xl text-[#E8E8E8]">Selamat Datang di</p>
                    <p className="text-6xl font-bold text-white">PEMANFAATAN COMPUTER VISION SEBAGAI PEMANTAUAN DAN PENGENDALIAN BIBIT TANAMAN TOMAT BERBASIS IOT</p>
                    <a href="#" className="w-[214px] h-[49px] rounded-[18px] bg-[#EB7C16] text-white flex text-2xl justify-center items-center shadow-[0px_3px_13px_3px_#EB7C16] mt-11">See More</a>
                </div>
                <div className={`lg:block hidden basis-1/2  w-[520px] h-[491px] rounded-[48px] border border-[#ffffff69] bg-[#ffffff29] backdrop-blur-[10px]`}>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home
