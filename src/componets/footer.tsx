import discord from "/discord.svg"
import twitter from "/twitter.svg"
export const Footer = () => {
    return (
        <>
            <div className="w-full py-5 flex items-center justify-around text-sm  lg:text-xl">
                <h1>KOMET</h1>
                <p>Made with <i className="text-red-500">❤️</i> from india for global  </p>
                <div className="flex">
                    <img className="w-4 lg:w-7" src={discord} alt="" />
                    <img src={twitter} alt="" className="w-4 ml-1 lg:w-7" />
                </div>
            </div>
            <div className="text-center opacity-40">
                <p>&copy; 2022 KOMET | all rights reserved 	</p>
            </div>
        </>
    )
}