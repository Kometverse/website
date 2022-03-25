import avtar from "/avtar.png"
interface Props {
    img: string
}
export const NftImage = (props: Props) => {
    return (
        <>
            <img className="w-[40%]  max-w-[150px] sm:max-w-[150px] rounded-full sm:mx-5 mx-3  my-4" src={props.img} alt="" />
        </>
    )
}