import GridButton from "../component/GridButton";
import { ReactComponent as CurrencyIcon } from "../svg/dollar.svg";

export default function Actions(){

    return(
        <>
            <GridButton text="Курсы валют" icon={<CurrencyIcon />} />
            <GridButton text="Курсы валют" icon={<CurrencyIcon />} />
            <GridButton text="Курсы валют" icon={<CurrencyIcon />} />
            <GridButton text="Курсы валют" icon={<CurrencyIcon />} />
            <GridButton text="Курсы валют" icon={<CurrencyIcon />} />
            {/* <GridButton text="Курсы валют" icon={<CurrencyIcon />} /> */}
        </>
    )

}