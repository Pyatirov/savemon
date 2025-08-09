import { ReactNode } from "react";
import "../css/gridButton.css"

export default function GridButton( { text, icon } : { text: string; icon: ReactNode } ) {

    return(
        <div className="gridButton">
            <div className="iconWrapper">
                {icon}
            </div>
            <div className="buttonText">{text}</div>
        </div>
    )

}