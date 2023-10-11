import React from 'react'
import alat from "../assets/alat.jpeg"

function Research() {
    return (
        <React.Fragment>
            <section className='mt-72 lg:container mx-auto'>
                <div>
                    <p className="text-5xl text-[#D9D9D9]">ABOUT<br/>RESEARCH</p>
                </div>
                <div className='flex mt-8 justify-between lg:gap-x-8 lg:flex-row flex-col-reverse'>
                    <div className="lg:basis-2/3 border border-[rgba(255, 255, 255, 0.62)] bg-[#2d2d2d73] backdrop-blur-[10px] rounded-[20px] p-10 text-justify flex items-center">
                        <p className='text-xl text-white'>
                            Sistem pemantauan perkembangan bibit tanaman tomat berbasis IoT memiliki parameter pengukur yang dilakukan. Parameter tersebut diantaranya: suhu, kelembapan udara, intensitas cahaya dan tumbuh/belum tumbuh bibit tanaman tomat. Pengukuran parameter suhu dan kelembapan udara diukur oleh sensor DHT11. Pengukuran parameter intensitas cahaya diukur oleh sensor LDR. Dan pengukuran parameter tumbuh/ belum tumbuh diukur oleh kamera yang diproses menggunakan algoritma YOLOV8.
                        </p>
                    </div>
                    <div className="lg:basis-1/3 border border-[rgba(255, 255, 255, 0.62)] bg-[#2d2d2d73] backdrop-blur-[10px] rounded-[20px] p-5 flex items-center">
                        <img src={alat} alt="" />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Research
