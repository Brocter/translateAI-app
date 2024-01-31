

const AiResponse = ({content})=>{
    return(
        <>
        {content ? <div className="bg-[#035A9D]  rounded-tr-[0.125rem] rounded-xl mb-6">
        <p className="font-[600] text-white text-[1.25rem] py-2 px-4">{content}</p>
        </div> : null}
        </>
    )
}

export default AiResponse;