function customButton(type, onClick){
 
    const classN=`btn btn-${type.type}`
    const onClickfun = ()=>{
        onClick()
    }
    
    return(
        <div>

<button className={classN} onClick={onClickfun}>play
        </button>
        </div>
    )
}

export default customButton;