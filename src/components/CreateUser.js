import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
    const navigate = useNavigate()

        const [inputs, setInputs] = useState({
            name: "",
            email: "",
            mobile: ""
        })
    
        const handleChange = (event) => {
            const {name, value} = event.target
    
            setInputs({
                ...inputs,
                [name]: value
        })
        }
    
        const handleSubmit = (event) => {
            event.preventDefault()
            axios.post(`http://localhost:80/api/user/save`, inputs)
            .then(function(response) {
                console.log(response.data)
                navigate("/")
            })
        }

    return ( 
        <div>
        <h1>Create user</h1>
        <form onSubmit={handleSubmit}>
            <table cellSpacing="10">
                <tbody>
                    <tr>
                        <th>
                            <label>Name: </label>
                        </th>
                        <td>
                            <input type="text" name="name" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>Email: </label>
                        </th>
                        <td> 
                            <input type="text" name="email" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>Mobile: </label>
                        </th>
                        <td>
                            <input type="text" name="mobile" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" align ="right">
                            <button>Save</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
     );
}
 
export default CreateUser;