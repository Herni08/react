import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Profile() {
  const [users, setUsers] = useState([]);
  const [fetch, setFetch] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://randomuser.me/api/?results=8`
      );
      setUsers(
        result.data.results.map((item) => {
          const {id, name, location, picture, registered} = item;
          return {
            id, name, location, picture, registered
          };
        })
      );
    };
    if (fetch) {
      fetchData();
      setFetch(false);
    }
  }, [fetch]);

  return (
    <>
    <div>
      <h1 className="text-center">Random Profile</h1>
      {users.map((item, index) => {
        return (
          <div style={{display:"inline-block", verticalAlign:"top", width:"300px", height:"300px"}} 
           key={index} className="ms-4 p-5 text-center">
           <Link to={`/DetailUser/${item.registered}`}>
           <img src={item.picture.large} alt={item.name.title} className="circle"/></Link><br></br>
           {item.name.title} {item.name.first} {item.name.last}<br />
           {item.location.state} {item.location.country}
           <br></br>
           </div>
        )
      })}
    </div>
    </>
  )
}

export default Profile

  