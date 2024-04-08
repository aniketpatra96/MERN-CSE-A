// function UserCard(name, email){
// function UserCard(data){
// function UserCard({ name, email }) {
function UserCard({ user }) {
    // console.log(data);
    const { name, email, phone } = user;
    return (
        <div className="user-card">
            {/* <h1>{data.name}</h1>
              <p>{data.email}</p> */}
            <h1>{name}</h1>
            <p>{email}, {phone}</p>
        </div>
    )
}

export default UserCard
