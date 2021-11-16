const TicketItem = ({ ticket }) => {
  return(
    <div>
      <p>Assignee Name: {ticket?.assignee}</p>
      <p>Submitter Name: {ticket?.submitter}</p>
      <p>Organization Name: {ticket?.organization}</p>
      <hr/>
    </div>
  )
}

export default TicketItem;