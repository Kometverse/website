

export const Footer = () => {
    return (
        <>
            <>
                <div className="w-full mt-5 py-5 flex items-center justify-around text-sm  lg:text-">
                    <img src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/log.svg?alt=media&token=fb81cef9-bac7-42f1-b638-432a5824450e" className="lg:w-20 w-12 " alt="" />
                    <p className="text-[12px]">Made with <i className="text-red-500">❤️</i> from india for global  </p>
                    <div className="flex items-center">
                        <a href="https://discord.gg/zSgSEGjh2n" target="_blank">
                            <img className="w-4 lg:w-7" src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/discord.svg?alt=media&token=45a1f48f-1c7d-410d-a114-b408182b98cc" alt="" />
                        </a>
                        <a href="https://twitter.com/kometverse" target="_blank" >
                            <img src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/twitter.svg?alt=media&token=83cfaa21-c7bc-455a-9276-d8ec6bc6b33f" alt="" className="w-4 ml-4 lg:w-7" />
                        </a>

                        <a href="https://komet.substack.com/subscribe?utm_source=test&utm_medium=email&utm_source=subscribe-widget&utm_content=51176836" target="_blank" >
                            <img src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/mail.svg?alt=media&token=f7c87d34-6909-456c-9238-4ce914b51da7" alt="" className="w-4 ml-4 lg:w-7" />
                        </a>

                    </div>
                </div>
                <div className="text-center opacity-40 pb-8">
                    <p className="text-[13px]">&copy; 2022 KOMET | All rights reserved	</p>
                </div>
            </>
        </>
    )
}