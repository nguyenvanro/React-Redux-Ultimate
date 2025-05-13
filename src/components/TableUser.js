import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../action/actions';

const TableUser = (props) => {

    // const [ListUsers, setListUsers] = useState();

    const dispath = useDispatch();
    const ListUsers = useSelector((state) => state.user.ListUsers);
    const isLoading = useSelector((state) => state.user.isLoading);
    const isError = useSelector((state) => state.user.isError);

    useEffect(() => {
        dispath(fetchAllUsers())
    }, [])

    const handleDeleteUser = (user) => {
        console.log('delete user: ', user);

    }

    if (isError === false && isLoading === true) {
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
                        <div>Loading data...</div>
                    </tbody>
                </Table>
            </Container>
        )
    }

    if (isError === false && isLoading === false) {
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

    if (isError === true && isLoading === false) {
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
                        <div>Something wrongs, please try again...</div>
                    </tbody>
                </Table>
            </Container>
        )
    }

    // return (
    //     <Container>
    //         <hr />
    //         <Table striped bordered hover>
    //             <thead>
    //                 <tr>
    //                     <th>#</th>
    //                     <th>Email</th>
    //                     <th>Username</th>
    //                     <th>Action</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {
    //                     isError === true ?
    //                         <>
    //                             <div>Something wrongs, please try again...</div>
    //                         </>
    //                         :
    //                         <>
    //                             {isLoading === true ?
    //                                 <><div>Loading data...</div></>
    //                                 :
    //                                 <>
    //                                     {ListUsers && ListUsers.length > 0 && ListUsers.map((item, index) => {
    //                                         return (

    //                                             <tr key={index}>
    //                                                 <td>{index + 1}</td>
    //                                                 <td>{item.email}</td>
    //                                                 <td>{item.username}</td>
    //                                                 <td>

    //                                                     <Button
    //                                                         variant="danger"
    //                                                         onClick={() => handleDeleteUser(item)}
    //                                                     >
    //                                                         Delete
    //                                                     </Button>

    //                                                 </td>
    //                                             </tr>
    //                                         )
    //                                     })}
    //                                 </>
    //                             }
    //                         </>
    //                 }
    //             </tbody>
    //         </Table>
    //     </Container>
    // )
}

export default TableUser;
