import React from 'react';
import {Card} from 'react-bootstrap';
import { useContext } from "react";
import { LangContext } from "../../App";


export default function Header(props) {

  const lang = useContext(LangContext);

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{lang.dictionary["turn"]}</Card.Title>
          <Card.Text>
            {lang.dictionary["turn"] + " " + lang.dictionary["of"] + " " + props.turn}
          </Card.Text>
        </Card.Body>
      </Card>
    );
    }