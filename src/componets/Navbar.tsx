import twitter from "/twitter.svg"
import discord from "/discord.svg"
import mail from "/mail.svg"
import logo from "/log.svg"
export const Navbar = () => {
    return (
        <>
            <div className="select-none z-0 xl:block blur-2xl lg:w-40 w-16 h-16 lg:h-40  top-28 left-0 lg:-left-16 lg:top-22 absolute bg-[#8146FF]/50 rounded-full"></div>
            <nav className="flex relative  z-10 justify-between items-center px-8 py-3 mb-10 ">
                <img src={logo} className="w-20" alt="" />
                <div className="hidden sm:flex items-center ">

                    <a href="https://twitter.com/kometverse" target="_blank" className="mx-4 icon"><img src={twitter} alt="" /></a>
                    <a href="https://discord.gg/zSgSEGjh2n" target="_blank" className="mx-4 icon"><img src={discord} alt="" /></a>

                    <a href="https://komet.substack.com/subscribe?utm_source=test&utm_medium=email&utm_source=subscribe-widget&utm_content=51176836" target="_blank" className="icon w-6 mx-4"><img src={mail} alt="" /></a>
                    <a href="#cta" className="mx-6 cta   font-bold py-2 px-4 text-sm rounded-md">Join Waitlist</a>
                </div>
            </nav>
        </>
    )
}

