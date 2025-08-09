import CurrencyLogo from "../component/CurrencyLogo"
import usaIcon from "../img/usa64.png"
import ukIcon from "../img/uk64.png"

export default function ExchangeRate(){

    return(
        <>
            <CurrencyLogo logo={usaIcon} />
            <CurrencyLogo logo={ukIcon} />
        </>
    )
}