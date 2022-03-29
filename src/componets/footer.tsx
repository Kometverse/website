import discord from "/discord.svg"
import twitter from "/twitter.svg"
import logo from "/log.svg"
import mail from "/mail.svg"

export const Footer = () => {
    return (
        <>
            <div className="w-full mt-5 py-5 flex items-center justify-around text-sm  lg:text-">
                <img src={logo} className="lg:w-20 w-12 " alt="" />
                <p className="text-[12px]">Made with <i className="text-red-500">❤️</i> from india for global  </p>
                <div className="flex items-center">
                    <a href="https://discord.gg/zSgSEGjh2n" target="_blank">
                        <img className="w-4 lg:w-7" src={discord} alt="" />
                    </a>
                    <a href="https://twitter.com/kometverse" target="_blank" >
                        <img src={twitter} alt="" className="w-4 ml-4 lg:w-7" />
                    </a>

                    <a href="https://komet.substack.com/subscribe?utm_source=test&utm_medium=email&utm_source=subscribe-widget&utm_content=51176836" target="_blank" >
                        <img src={mail} alt="" className="w-4 ml-4 lg:w-7" />
                    </a>

                </div>
            </div>
            <div className="text-center opacity-40 pb-8">
                <p className="text-[13px]">&copy; 2022 KOMET | all rights reserved 	</p>
            </div>
        </>
    )
}