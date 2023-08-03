export const Button = ({children, onClick}) => {
    if (children === 0) {
        return (
            <button className="btn btn-dark mb-3 mt-3" onClick={onClick}
                disabled={true}
            >{children}</button>
        )    
    } else {
        return (
            <button className="btn btn-dark mb-3 mt-3" onClick={onClick}
                
            >{children}</button>
        )
    }
    
}

export const Link = ({children}) => {
    return (
        <a className="btn btn-dark mb-3 mt-3" href={`../App?pag=1&modality=${children}`}>{children}</a>
    )
}