import avtar from "/avtar.png"
export const NftImage = ({ img }) => {
    return (
        <>
            <img className="w-[40%]  max-w-[150px] sm:max-w-[150px] rounded-full sm:mx-5 mx-3  my-4" src={img} alt="" />
        </>
    )
}