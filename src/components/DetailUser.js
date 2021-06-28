import React,{useState, useEffect} from 'react' 
import axios from 'axios'
import {useParams} from 'react-router-dom'

function DetailUser() {
    let {id} = useParams();
    const [user, setUser] = useState({
        id: {
            name: "",
            value: "",
        },
        name: {
            title: "",
            first: "",
            last: ""
            },
        location: {
            city: "",
            state: "",
            country: "",
            postcode: 0,
            },
        email: "",
        picture: {
            large: ""
            },
        currentId: null
    }) 
    const [fetch, setFetch] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if(id) {
                const result = await axios.get (`https://randomuser.me/api/?registered=${id}`);
                const {name, location, email, picture} = result.data;
                setUser({
                    name,
                    location, email, picture
                });

                }
        };
             if (fetch) {
                fetchData();
                setFetch(false);
                }
    }, [fetch, id]);

    return (
        <div>
            <div>
                <div><p>{user.name}</p></div>
            </div>
        </div>
    )
}

export default DetailUser
