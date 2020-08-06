import React, { useContext } from 'react';
import StyledParagraph from './StyledParagraph';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import {
   ListGroup,
   ListGroupItem,
   Button
} from 'reactstrap'

export const UserList = () => {
   const { users, removeUser } = useContext(GlobalContext);
   return (
      <ListGroup className="mt-4">
         {users.length > 0 ? (
            <React.Fragment>
               {users.map(user => (
                  <ListGroupItem className="d-flex" key={user.id}>
                     <StyledParagraph><strong>{user.name}</strong></StyledParagraph>
                     <div className="ml-auto">
                        <Link className="btn btn-warning mr-1" to={`edit/${user.id}`}>Edit</Link>
                        <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
                     </div>
                  </ListGroupItem>
               ))}
            </React.Fragment>
         ) : (
               <h4 className="text-center">Sorry, No User!</h4>
            )}
      </ListGroup>
   )
}