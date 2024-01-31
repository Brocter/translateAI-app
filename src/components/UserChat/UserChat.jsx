

const UserChat = ({content})=>{
    return(
        <>
        {content ? <div className="bg-[#65DA65]  rounded-tl-[0.125rem] rounded-xl mb-6">
        <p className="font-[600] text-[#333] text-[1.25rem] py-2 px-4">{content}</p>
        </div> : null}
        </>
    )
}

export default UserChat;