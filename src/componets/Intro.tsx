import { NftImage } from "./NFTimg"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const Intro = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>

            {/* <div className="lg:h-[80vh] flex items-center bg-primary ">
                <div data-aos="fade-up" className="intro-gradient  w-full m-auto rounded-3xl lg:flex items-center relative lg:h-[400px] lg:p-6">
                    <div className=" flex flex-col items-center text-center lg:items-start px-4  lg:ml-6">
                        <h1 data-aos="fade-up"
                            data-aos-offset="100"
                            data-aos-delay="10"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            className="max-w-[20ch] sm:text-6xl mb-5 text-4xl leading font-bold  text-center leading-relaxed lg:text-left lg:text-5xl lg:w-[15ch] xl:text-6xl line ">Unlocking your digital world</h1>
                        <p data-aos="fade-right"
                            // data-aos-offset="100"
                            data-aos-delay="10"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            className="sm:text-2xl  text-lg max-w-[40ch] lg:max-w-[25ch]  mb-8 text-center lg:text-left">A simplified wallet  for web3 games and NFTs</p>
                    </div>
                    <div className="lg:hidden flex w-[80%] m-auto flex-wrap items-center  justify-center ">
                        <NftImage img="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/game2.svg?alt=media&token=49abd78d-d3a7-4062-b8cf-878c727a3e54" />
                        <NftImage img="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/game1.svg?alt=media&token=27e0919d-eb39-4e4e-ad7e-5ddeaf7a0922" />
                        <NftImage img="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/game3.svg?alt=media&token=9f2a9138-e1aa-42c9-a3aa-227bcc597f62" />
                        <NftImage img="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/game4.svg?alt=media&token=4b0a3573-118e-4044-9458-5d874cec518a" />
                        <NftImage img="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/game5.svg?alt=media&token=10365504-e771-4b32-91ed-04f18add8e80" />
                        <NftImage img="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/game6.svg?alt=media&token=63b2a09e-f991-4423-bad6-ba2640e6dcc3" />
                    </div>

                    <div className="hidden lg:block">
                        <img className="w-[40%]  max-w-[100px] absolute -top-16 right-12  sm:max-w-[210px] rounded-full sm:mx-5 mx-3  my-4" src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/game4.svg?alt=media&token=4b0a3573-118e-4044-9458-5d874cec518a" alt="" />
                        <img className="w-[40%]  max-w-[100px] absolute bottom-0 right-16  sm:max-w-[190px]  rounded-full sm:mx-5 mx-3  my-4" src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/game6.svg?alt=media&token=63b2a09e-f991-4423-bad6-ba2640e6dcc3" alt="" />
                        <img className="w-[40%]  max-w-[100px] absolute  -right-[60px] top-24 sm:max-w-[130px]  rounded-full sm:mx-5 mx-3  my-4" src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/game1.svg?alt=media&token=27e0919d-eb39-4e4e-ad7e-5ddeaf7a0922" alt="" />
                        <img className="w-[40%]  max-w-[100px] absolute -bottom-10 -right-8 sm:max-w-[100px]  rounded-full  sm:ml-7 mx-3  my-4" src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/game3.svg?alt=media&token=9f2a9138-e1aa-42c9-a3aa-227bcc597f62" alt="" />
                        <img className="w-[40%]  max-w-[100px] absolute  right-[240px] top-20 sm:max-w-[150px] lg:w-[190px] rounded-full sm:mx-5 mx-3  my-4" src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/game5.svg?alt=media&token=10365504-e771-4b32-91ed-04f18add8e80" alt="" />
                    </div>
                </div>
            </div> */}
        </>
    )
}