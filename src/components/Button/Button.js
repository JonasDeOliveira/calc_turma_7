import './Button.css'

function Button(props) {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple': ''

    return (
        <button className={classes} onClick={() => {
            props.click && props.click(props.label)
            props.clear && props.clear()
            } }>
            {props.label}
        </button>
    )
}

export default Button