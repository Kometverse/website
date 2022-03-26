import backArrow from "/backarrow.svg"
import ast from "/ast.svg"
import future from "/future.svg"
import copy from "/copy.svg"
import { useState } from "react"
export const Rank = () => {
    const [rank, setRank] = useState();
    const [reflink, setrefLink] = useState()
    return (
        <>
            <div className="h-screen ">
                <nav className="py-3 nav px-4">
                    <img src={backArrow} className="w-8 lg:w-12" alt="" />
                </nav>
                <div className="justify-center h-full overflow-hidden leading-10 flex flex-col items-center">
                    <img src={ast} className="w-44 lg:w-48" alt="" />
                    <h2 className="flex text-lg leading-6 lg:text-2xl">That's Cool <img src={future} className=" mx-4 w-6" alt="" /></h2>
                    <p className="rankjoin font-bold text-xl">Thanks for joining the waitlist!</p>
                    <p>Your Current Postion</p>
                    <div className="border w-[90%] text-center text-xl p-2 max-w-md">
                        #  {rank ? rank : rank}
                    </div>

                    <p className="text-sm my-4">Earn intergalactic rewards by inviting rewards</p>
                    <div className="flex p-3 justify-between border w-[90%] text-sm max-w-md ">
                        <div className="p-2">
                            {reflink ? reflink : reflink}
                        </div>
                        <img src={copy} className="cursor-pointer w-5" alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}