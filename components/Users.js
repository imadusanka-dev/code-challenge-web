import UserItem from "./UserItem";

const Users = ({ data }) => {
  return(
    <div>
      <p>{data.length} results found</p>
      {
        data?.map(user => <UserItem key={user?._id} user={user}/>)
      }
    </div>
  )
}

export default Users;