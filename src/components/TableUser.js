import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';


const TableUser = () => {

    const [ListUsers, setListUsers] = useState();

    const fetchAllUser = async () => {
        const res = await axios.get("http://localhost:8080/users/all");
        const data = res && res.data ? res.data : []
        console.log("data: ", data);
        setListUsers(data)

    }

    useEffect(() => {
        fetchAllUser();
    }, [])

    const handleDeleteUser = (user) => {
        console.log('delete user: ', user);
        
    }

    return (
        <Container>
            <hr />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ListUsers && ListUsers.length > 0 && ListUsers.map((item, index) => {
                        return (

                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.email}</td>
                                <td>{item.username}</td>
                                <td>
                                    
                                    <Button
                                        variant="danger"
                                        onClick={() => handleDeleteUser(item)}
                                    >
                                        Delete
                                    </Button>

                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        </Container>
    )
}

export default TableUser;
