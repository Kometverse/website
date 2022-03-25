interface Props {
    img: string
    text: string
    order: string

}


export const Feature = (props: Props) => {
    const orderclass = `order-${props.order}`
    return (
        <>
            <div className=" m-auto mb-10 py-8 text-center flex flex-col lg:flex-row  lg:justify-center items-center ">
                <img className={`sm:w-[300px] w-[80%] mb-5 ${orderclass} mx-5`} src={props.img} alt="" />
                <div className="flex flex-col  lg:items-start items-center  p-4">
                    <h1 className="font-bold text-2xl sm:text-3xl lg:w-[23ch] lg:text-left mb-6">{props.text}</h1>
                    <div className="bg-gray-300 h-[30px] sm:h-[40px]  w-full max-w-md ">
                    </div>
                </div>
            </div>
        </>
    )
}