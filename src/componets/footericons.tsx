interface Props {
    imgurl: string
    alt: string
    link: string
    title: string
}


export const SocialIcon = ({ imgurl, alt, link, title }: Props) => {
    return (
        <>
            <a href={link} target="_blank" title={"Komet" + title} >
                <img src={imgurl} alt={alt} className="w-4 ml-4 lg:w-7" />
            </a>
        </>
    )
}