import "./ErrorMessage.css"

import { CgDanger } from "react-icons/cg"

interface PropType {
    message: string
}
export const ErrorMessage = (props: PropType) => {
    return (
        <div className="error__wrapper">
            <CgDanger className="error__icon" />
            <div className="message__container">
                <span className="error__header">ERROR:</span>
                <span className="error__message">{props.message}</span>
            </div>
        </div>
    )
}
