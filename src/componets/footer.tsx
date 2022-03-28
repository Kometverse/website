import discord from "/discord.svg"
import twitter from "/twitter.svg"
import logo from "/log.svg"

export const Footer = () => {
    return (
        <>
            <div className="w-full mt-5 py-5 flex items-center justify-around text-sm  lg:text-">
                <img src={logo} className="w-20" alt="" />
                <p className="text-[12px]">Made with <i className="text-red-500">❤️</i> from india for global  </p>
                <div className="flex">
                    <img className="w-4 lg:w-7" src={discord} alt="" />
                    <img src={twitter} alt="" className="w-4 ml-4 lg:w-7" />
                </div>
            </div>
            <div className="text-center opacity-40 pb-8">
                <p className="text-[13px]">&copy; 2022 KOMET | all rights reserved 	</p>
            </div>
        </>
    )
}