import { SocialIcon } from "./footericons"


export const Footer = () => {
    return (
        <>
            <>
                <footer>
                    <div className=" m-auto mt-5 py-5 w-full p-2  lg:w-[80%] pb-6 text-lg">
                        <div className="flex justify-between items-center border-b pb-5 p-2">
                            <img src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/log.svg?alt=media&token=fb81cef9-bac7-42f1-b638-432a5824450e" className="lg:w-20 w-12 " alt="Komet Logo" />
                            <div className="text-center opacity-40">
                                <p className="text-[13px]">&copy; 2022 KOMET | All rights reserved	</p>
                            </div>
                        </div>
                        <div className="py-4">
                            <h2 className="pb-4">Contact us</h2>
                            <div className="flex items-center ">
                                <SocialIcon imgurl="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/discord.svg?alt=media&token=45a1f48f-1c7d-410d-a114-b408182b98cc" alt="Komet discord" title="discord" link="https://discord.gg/zSgSEGjh2n" />
                                <SocialIcon imgurl="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/twitter.svg?alt=media&token=83cfaa21-c7bc-455a-9276-d8ec6bc6b33f" alt="Komet twitter " title="twitter" link="https://twitter.com/kometverse" />
                                <SocialIcon imgurl="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/mail.svg?alt=media&token=f7c87d34-6909-456c-9238-4ce914b51da7" alt="Komet Newsletter" title="Newsleter" link="https://komet.substack.com/subscribe?utm_source=test&utm_medium=email&utm_source=subscribe-widget&utm_content=51176836" />
                            </div>
                        </div>
                        <div>
                            <p className=" text-center my-2  text-[12px]">Made with <i className="text-red-500">❤️</i> from india for global  </p>
                        </div>
                    </div>



                </footer>
            </>
        </>
    )
}