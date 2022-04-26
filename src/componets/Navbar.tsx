import { VscLinkExternal } from "react-icons/vsc";
import { IoIosArrowDropdown } from "react-icons/io";
interface Item {
    name: string;
    link: string;
}

interface Props {
    open: boolean;
    setOpen: Function;
}

export const Navbar = ({ open, setOpen }: Props) => {
    const hover_items = [
        {
            name: "Twitter",
            link: "https://twitter.com/kometverse",
        },
        {
            name: "Discord",
            link: "https://discord.gg/zSgSEGjh2n",
        },
        {
            name: "Newsletter",
            link: "https://komet.substack.com/subscribe?utm_source=test&utm_medium=email&utm_source=subscribe-widget&utm_content=51176836",
        },
    ];

    return (
        <>
            <div className=" sticky top-0 z-40 bg-primary">
                <nav className="container m-auto flex justify-between items-center  p-4">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/komet.svg?alt=media&token=52edf4d2-e2a1-4205-87d4-5783f42e1196"
                        className="w-20"
                        alt=""
                    />
                    <div className="flex">
                        <div className="group  relative px-4 flex flex-col justify-center">
                            <div className="flex">
                                <p className="">Community</p>
                                <IoIosArrowDropdown className="mx-2" />
                            </div>
                            <div className="hidden group-hover:flex absolute  top-4  items-center py-4  flex-col ">
                                {hover_items.map((item: Item) => {
                                    return (
                                        <div className="w-full  flex items-center brightness-75 hover:brightness-100">
                                            <a className="p-2" href={item.link} target="_blank">
                                                {item.name}
                                            </a>
                                            <VscLinkExternal className=" w-3 hover:w-6" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <a href="#cta" className="" >
                            <button className="hidden lg:block cta-button btn-2  cta px-8 py-2 rounded text-lg  relative"><span className="btn-span">Join waitlist</span></button>
                        </a>
                    </div>
                </nav>
            </div>
        </>
    );
};
