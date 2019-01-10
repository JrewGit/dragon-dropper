import React from "react";
import "./WarriorCard.css"

const WarriorCard = props => (
    <div className="card">

        <div className="img-container" onClick={() => {props.wasClicked(props.warrior.id)}}>
            <img src={props.warrior.image} alt={props.warrior.name}/>
        </div>

    </div>
)

export default WarriorCard;