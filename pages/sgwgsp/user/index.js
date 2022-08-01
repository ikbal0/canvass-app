import Navbar from "../../../component/nav"

export default function UserList({users}){
    return(
        <div>
            <Navbar/>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return(
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })
                    }
            
                </tbody>
            </table>
        </div>
    )
}

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return{
        props: {
            users: data,
        },
    }
}