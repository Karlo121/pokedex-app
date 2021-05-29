import { TypeBox } from "../styles/Pokedex.style";

export function Type(props) {
  if (props.type !== "undefined") {
    if (props.type === "Grass") {
      return <TypeBox color={"#7AC74C"}>{props.type}</TypeBox>;
    } else if (props.type === "Poison") {
      return <TypeBox color={"#A33EA1"}>{props.type}</TypeBox>;
    } else if (props.type === "Fire") {
      return <TypeBox color={"#EE8130"}>{props.type}</TypeBox>;
    } else if (props.type === "Flying") {
      return <TypeBox color={"#A98FF3"}>{props.type}</TypeBox>;
    } else if (props.type === "Water") {
      return <TypeBox color={"#6390F0"}>{props.type}</TypeBox>;
    } else if (props.type === "Normal") {
      return <TypeBox color={"#A8A77A"}>{props.type}</TypeBox>;
    } else if (props.type === "Electric") {
      return <TypeBox color={"#F7D02C"}>{props.type}</TypeBox>;
    } else if (props.type === "Bug") {
      return <TypeBox color={"#A6B91A"}>{props.type}</TypeBox>;
    } else if (props.type === "Ground") {
      return <TypeBox color={"#E2BF65 "}>{props.type}</TypeBox>;
    } else if (props.type === "Fairy") {
      return <TypeBox color={"#D685AD "}>{props.type}</TypeBox>;
    } else if (props.type === "Fighting") {
      return <TypeBox color={"#C22E28"}>{props.type}</TypeBox>;
    } else if (props.type === "Psychic") {
      return <TypeBox color={"#F95587"}>{props.type}</TypeBox>;
    } else if (props.type === "Rock") {
      return <TypeBox color={"#B6A136"}>{props.type}</TypeBox>;
    } else if (props.type === "Ghost") {
      return <TypeBox color={"#735797"}>{props.type}</TypeBox>;
    } else if (props.type === "Ice") {
      return <TypeBox color={"#96D9D6"}>{props.type}</TypeBox>;
    } else if (props.type === "Dragon") {
      return <TypeBox color={"#6F35FC"}>{props.type}</TypeBox>;
    }

    return <h1>{props.type}</h1>;
  } else {
    return <></>;
  }
}
