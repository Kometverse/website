import burgerMenue from "/b.svg"
import twitter from "/twitter.svg"
import discord from "/discord.svg"
export const Navbar = () => {
    return (
        <>
            <nav className=" p-4 sm:p-10 flex justify-between items-center">
                <h1 className="text-xl sm:text-3xl font-bold py-2 px-2">KOMET</h1>
                <div className="hidden sm:flex items-center ">
                    <a href="#" className="mx-2"><img src={twitter} alt="" /></a>
                    <a href="#" className="mx-2"><img src={discord} alt="" /></a>
                    <a href="#" className="mx-6 bg-white text-[#290B68] py-2 px-4 text-sm rounded-md">join wishlist</a>
                </div>
                {/* only show on mobile view  */}
                <button className="sm:hidden w-8"><img src={burgerMenue} alt="" /></button>
            </nav>
        </>
    )
}