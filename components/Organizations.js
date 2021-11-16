import OrganizationItem from "./OrganizationItem";

const Organizations = ({ data }) => {
  return(
    <div>
      <p>{data.length} results found</p>
      {
        data?.map(organization => <OrganizationItem key={organization._id} organization={organization}/>)
      }
    </div>
  )
}

export default Organizations;