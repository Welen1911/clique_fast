export const Button = ({children}) => {
    return (
        <button className="btn btn-dark mb-3 mt-3">{children}</button>
    )
}

export const Link = ({children}) => {
    return (
        <a className="btn btn-dark mb-3 mt-3" href={`../App?pag=1&modality=${children}`}>{children}</a>
    )
}