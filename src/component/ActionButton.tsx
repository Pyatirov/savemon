import "../css/actionButton.css"
import { MouseEventHandler, ReactNode, useCallback } from "react";

interface IBtnProps{
    size?: string
    children: ReactNode
    theme: string
    onClick?: () => void
}

export default function ActionButton({ size="35", children, theme, onClick } : IBtnProps){

    const clickHandler = useCallback<MouseEventHandler>(e => {
        e.preventDefault()
        if(onClick !== undefined) onClick()
    }, [onClick])

    return <button className={`btn size-${size ?? ""} btnTheme__${theme}`} onClick={clickHandler}>{children}</button>
}