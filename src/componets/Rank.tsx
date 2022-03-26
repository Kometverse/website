import backArrow from "/backarrow.svg"
import ast from "/ast.svg"
import future from "/future.svg"
import copyimg from "/copy.svg"
import { useEffect, useState } from "react"
import useCopyHook from "../useCopyClipBoard"
import { useNavigate } from "react-router-dom";

interface Props {
    user: any
}

export const Rank = ({ user }: Props) => {
    let navigate = useNavigate();
    const [rank, setRank] = useState(0);
    const [reflink, setrefLink] = useState("")
    const [value, copy] = useCopyHook()
    const [isCopied, setisCopied] = useState(false)

    useEffect(() => {
        setRank(user.points)
        console.log(user.points)
        setrefLink("?refID=" + user.refID)
    })

    return (
        <>
            <div className="h-screen text-white">
                <nav className="py-3 nav px-4">
                    <img src={backArrow} className="cursor-pointer w-8 lg:w-12" onClick={() => {
                        navigate('/')
                    }} alt="" />
                </nav>
                <div className="justify-center h-full overflow-hidden leading-10 flex flex-col items-center">
                    <img src={ast} className="w-44 lg:w-48" alt="" />
                    <h2 className="flex text-lg leading-6 lg:text-2xl">That's Cool <img src={future} className=" mx-2 w-6" alt="" /></h2>
                    <p className="rankjoin font-bold text-xl">Thanks for joining the waitlist!</p>
                    <p>Your Current Postion</p>
                    <div className="border w-[90%] text-center text-xl p-2 max-w-md">
                        #  {rank >= 0 ? rank : "on rank"}
                    </div>

                    <p className="text-sm my-4">Earn intergalactic rewards by inviting rewards</p>
                    <div className="flex p-3 justify-between border w-[90%] text-sm max-w-md ">
                        <div className="p-2">
                            <a href={reflink ? reflink : ""} target="_blank">  {reflink ? reflink : ""}</a>
                        </div>
                        <img src={copyimg} onClick={() => {
                            copy(reflink)
                            setisCopied(true)
                        }}
                            className="cursor-pointer w-5" alt="" />
                    </div>
                    <p className="text-green-500"> {isCopied ? value + "copied" : ''}</p>
                </div>

            </div>
        </>
    )
}
