import burgerMenue from "/b.svg"
import twitter from "/twitter.svg"
import discord from "/discord.svg"
import mail from "/mail.svg"
export const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between items-center px-12 py-3 mb-10 ">
                <div className="select-none xl:block blur-2xl w-40 h-40  top-12 -left-16 absolute bg-[#8146FF]/50 rounded-full"></div>
                <h1 className="text-xl sm:text-3xl font-bold ">KOMET</h1>
                <div className="hidden sm:flex items-center ">

                    <a href="#" className="icon w-6 mx-4"><img src={mail} alt="" /></a>
                    <a href="#" className="mx-4 icon"><img src={twitter} alt="" /></a>
                    <a href="#" className="mx-4 icon"><img src={discord} alt="" /></a>
                    <a href="#cta" className="mx-6 cta   font-bold py-2 px-4 text-sm rounded-md">join wishlist</a>
                </div>
                {/* only show on mobile view  */}


                <button data-tilt className=" sm:hidden w-8"><img src={burgerMenue} alt="" /></button>

            </nav>
        </>
    )
}