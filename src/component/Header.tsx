import "../css/header.css"
import { ReactComponent as HomeSvg} from "../svg/home.svg"
import { ReactComponent as UserSvg} from "../svg/user.svg"
import ActionButton from "./ActionButton"

export default function Header() {
    return(
        <div className="headerBody">
            <div className="leftButtons">
                
            </div>
            <div className="headerTitle">SAVEMON</div>
            <div className="rightButtons">
                <div className="svgWrapper">
                    <HomeSvg />
                </div>
                {/* <div className="svgWrapper">
                    <UserSvg />
                </div> */}
                <ActionButton theme="brassAndWhite">ВОЙТИ</ActionButton>
            </div>
        </div>
    )
}