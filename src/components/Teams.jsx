import React from "react"
import dosen from "../assets/dosen.png"
import user1 from "../assets/user1.png"
import user2 from "../assets/user2.png"
import user3 from "../assets/user3.png"
import user4 from "../assets/user4.png"

function Teams() {
  const nama = ["Muhammad Ridho Isdi", "Abi Syaibah "]
  return (
    <React.Fragment>
      <section
        className="mt-72 lg:container mx-auto rounded-[108px] border border-[rgba(255, 255, 255, 0.62)] bg-[#2d2d2d73] backdrop-blur-[10px] py-14"
        id="Teams"
      >
        <div>
          <p className="text-4xl text-[#D9D9D9] text-center">MEET OUR</p>
          <p className="text-5xl font-[700] text-white text-center tracking-[8.801px]">
            TEAMS PROFILE
          </p>
        </div>
        <div>
          <div className="w-[225px] h-[225px] mx-auto mt-20 bg-[#D9D9D9] rounded-3xl relative">
            <img
              src={dosen}
              alt="Dosen"
              className="max-w-fit absolute top-[25%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            />
            <div className=" block bg-[#EB7C16] text-white text-center absolute bottom-0 w-full rounded-b-3xl p-1.5">
              <p className="text-2xl">Dr. Harmadi</p>
              <p className="text-sm">Dosen Pembimbing</p>
            </div>
          </div>
          <div className="flex gap-x-10 px-8 lg:flex-row flex-col">
            <div className="w-[225px] h-[225px] mx-auto mt-20 bg-[#D9D9D9] rounded-3xl relative">
              <img
                src={user1}
                alt="Dosen"
                className="max-w-fit absolute top-[25%] left-[50%] translate-x-[-50%] translate-y-[-40%]"
              />
              <div className="text-xl block bg-[#EB7C16] text-white text-center absolute bottom-0 w-full rounded-b-3xl">
                <p className="text-[17px] pb-0 pt-0.5">Muhammad Ridho Isdi</p>
                <p className="text-sm pb-1">Ketua Tim</p>
              </div>
            </div>
            <div className="w-[225px] h-[225px] mx-auto mt-20 bg-[#D9D9D9] rounded-3xl relative">
              <img
                src={user2}
                alt="Dosen"
                className="max-w-fit absolute top-[25%] left-[50%] translate-x-[-50%] translate-y-[-40%]"
              />
              <div className="text-xl block bg-[#EB7C16] text-white text-center absolute bottom-0 w-full rounded-b-3xl">
                <p className="text-[20px] pb-0 pt-0.5">Abi Syaibah</p>
                <p className="text-sm pb-1">Anggota 1</p>
              </div>
            </div>
            <div className="w-[225px] h-[225px] mx-auto mt-20 bg-[#D9D9D9] rounded-3xl relative">
              <img
                src={user3}
                alt="Dosen"
                className="max-w-fit absolute top-[25%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              />
              <div className="text-xl block bg-[#EB7C16] text-white text-center absolute bottom-0 w-full rounded-b-3xl">
                <p className="text-[20px] pt-0.5">Tuti Alawiya</p>
                <p className="text-sm pb-0.5">Anggota 2</p>
              </div>
            </div>
            <div className="w-[225px] h-[225px] mx-auto mt-20 bg-[#D9D9D9] rounded-3xl relative">
              <img
                src={user4}
                alt="Dosen"
                className="max-w-fit absolute top-[25%] left-[50%] translate-x-[-49.7%] translate-y-[-45%]"
              />
              <div className="text-xl block bg-[#EB7C16] text-white text-center absolute bottom-0 w-full rounded-b-3xl">
                <p className="text-[20px] pt-0.5">M. Farhan Ramadhan</p>
                <p className="text-sm pb-1">Anggota 3</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Teams
