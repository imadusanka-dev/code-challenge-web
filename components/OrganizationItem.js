const OrganizationItem = ({ organization }) => {
  return(
    <div>
      Ticket Subject
      <ul>
        {
          organization?.tickets?.map(ticket => <li key={ticket?._id}>{ticket?.subject}</li>)
        }
      </ul>
      User Name
      <ul>
        {
          organization?.users?.map(user => <li key={user?._id}>{user?.name}</li>)
        }
      </ul>
      <hr/>
    </div>
  )
}

export default OrganizationItem;