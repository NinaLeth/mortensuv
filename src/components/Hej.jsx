import billede from "../assets/180.jpg"
export default function Hej(props) {
    return(
        <>
        <h2>Hej {props.navn}, du er {props.alder} år gammel 🫶</h2>
        <img src={billede} alt="Nina på 180 cm" />
        </>
    )
}
