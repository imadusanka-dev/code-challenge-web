import TicketItem from "./TicketItem";

const Tickets = ({ data }) => {
  return(
    <div>
      <p>{data.length} results found</p>
      {
        data?.map(ticket => <TicketItem key={ticket?._id} ticket={ticket}/>)
      }
    </div>
  )
}

export default Tickets;