import Axios from "axios";
import { useEffect, useState } from "react";

export default function Users(){
    const [users, setUsers] = useState([])
    useEffect(()=>{
       Axios.get("https://dummyjson.com/users")
       .then((res)=>{
        if (res.status == 200){
            setUsers(res.data.users)
        }else{
            Promise.reject();
        }
       }) 
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Profile Pic</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>E-mail</th>
                        <th>Username</th>
                        <th>Domain</th>
                        <th>IP</th>
                        <th>University</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((data)=>{
                        return (
                            <tr>
                                <td>{data.id}</td>
                                <td><img src={data.image}/></td>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.gender}</td>
                                <td>{data.email}</td>
                                <td>{data.username}</td>
                                <td>{data.domain}</td>
                                <td>{data.ip}</td>
                                <td>{data.university}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}