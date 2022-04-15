
export const Navbar = () => {
    return (
        <>
            <div className="select-none z-0 xl:block blur-2xl lg:w-40 w-16 h-16 lg:h-40  top-28 left-0 lg:-left-16 lg:top-22 absolute bg-[#8146FF]/50 rounded-full"></div>
            <nav className="flex relative  z-10 justify-between items-center px-8 py-3 mb-10 ">
                <img src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/log.svg?alt=media&token=fb81cef9-bac7-42f1-b638-432a5824450e" className="w-20" alt="" />
                <div className="hidden sm:flex items-center ">
                    <a href="https://twitter.com/kometverse" target="_blank" className="mx-4 icon"><img src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/twitter.svg?alt=media&token=83cfaa21-c7bc-455a-9276-d8ec6bc6b33f" alt="" /></a>
                    <a href="https://discord.gg/zSgSEGjh2n" target="_blank" className="mx-4 icon"><img src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/discord.svg?alt=media&token=45a1f48f-1c7d-410d-a114-b408182b98cc" alt="" /></a>
                    <a href="https://komet.substack.com/subscribe?utm_source=test&utm_medium=email&utm_source=subscribe-widget&utm_content=51176836" target="_blank" className="icon w-6 mx-4"><img src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/mail.svg?alt=media&token=f7c87d34-6909-456c-9238-4ce914b51da7" alt="" /></a>
                    <a href="#cta" className="mx-6 cta   font-bold py-2 px-4 text-sm rounded-md">Join Waitlist</a>

                </div>
            </nav>
        </>
    )
}

