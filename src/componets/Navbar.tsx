import { VscLinkExternal } from "react-icons/vsc";
import { IoIosArrowDropdown } from "react-icons/io";






interface Item {
    name: string;
    link: string;
}

interface Props {
    open: boolean
    setOpen: Function
}


export const Navbar = ({ open, setOpen }: Props) => {
    const hover_items = [
        {
            name: "Twitter",
            link: "#",
        },
        {
            name: "Discord",
            link: "#",
        },
        {
            name: "Newsletter",
            link: "#",
        },
    ];




    return (
        <>
            <div className=" sticky top-0 z-40 bg-primary">
                <nav className="flex justify-between items-center  p-3   ">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/log.svg?alt=media&token=fb81cef9-bac7-42f1-b638-432a5824450e"
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
                                            <a className="p-2" href={item.link}>
                                                {item.name}
                                            </a>
                                            <VscLinkExternal className=" w-3 hover:w-6" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <a className="mx-3 hidden lg:block cta px-6 py-2 rounded">join waitlist</a>
                    </div>
                </nav>

            </div>
        </>
    );
};
