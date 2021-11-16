const UserItem = ({ user }) => {
  return(
    <div>
      <p>Organization Name: {user?.organization}</p>
      <p>Assignee Tickets</p>
      <ul>
        {
          user?.assigneeTickets?.map(ticket => <li key={ticket?._id}>{ticket?.subject}</li>)
        }
      </ul>
      <p>Submitter Tickets</p>
      <ul>
        {
          user?.submittedTickets?.map(ticket => <li key={ticket?._id}>{ticket?.subject}</li>)
        }
      </ul>
      <hr/>
    </div>
  )
}

export default UserItem;