import discord from "/discord.svg"
import twitter from "/twitter.svg"
export const Footer = () => {
    return (
        <>
       <div className=" mt-10 py-5 flex items-center justify-around text-sm px-2 lg:text-xl">
       <h1>KOMET</h1>    
       <p>made with <i className="text-red-500">❤️</i> from india for global  </p>
       <div className="flex">
        <img className="mx-3" src={discord} alt="" />
        <img src={twitter} alt="" />
       </div>
        </div> 
        <div className= "mb-12 text-center">
            <p>&copy; 2022 KOMET | all rights reserved 	</p>
        </div>
        </>
    )
}