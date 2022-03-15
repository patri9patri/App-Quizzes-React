import { useContext } from "react";
import { LangContext } from "./App";
import {Link} from "react-router-dom";


export default function Navbar(props) {
    const lang = useContext(LangContext);

  return (
    <div>
      <h1>{lang.dictionary["mygames"]}</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/">{lang.dictionary["mygames"]}</Link> |{" "}
        <Link to="/tictactoe">{lang.dictionary["tictactoe"]}</Link> | <Link to="/Quiz">{lang.dictionary["quiz"]}</Link>
      </nav>
    </div>
  );
}
