import "../css/currencyLogo.css"

export default function CurrencyLogo({logo} : {logo: string}){
    return(
        <div className="currencyLogo">
            <img src={logo}/>
        </div>
    )
}