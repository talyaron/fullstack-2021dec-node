import React, {FC} from "react";
import { Ticket } from "./Tickets";

interface TicketInfoProps {
    ticket : Ticket;
}

const TicketInfo : FC <TicketInfoProps> = (props) =>{
    const { ticket } = props;
    return (
<div className="card">
      <div className="card__info">
        <h3>{ticket.town}</h3>
        <p>{ticket.country}</p>
      </div>
      <div className="card__price">{ticket.price}</div>
    </div>
    );
};

export default TicketInfo;

