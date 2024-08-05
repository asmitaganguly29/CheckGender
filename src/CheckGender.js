//Check Gender of a person by fetching API

import { useState } from "react";

function CheckGender()
{
    const [name, setName] = useState('')
    const [display, setDisplay] = useState('')

    const check = async () =>
        {
           
           // setDisplay("Name is "+ name)

           //when we are fetching the api url after hitting the line below it will take some time but the next line will also get hit and 
           //start working immediately, so it will not get the proper value because fetching takes some time.So, we will add await and when we
           //are adding await we need to write 'async' in the function
            const response = await fetch("https://api.genderize.io?name="+name)
            const data = await response.json();
            setDisplay(data.gender)
        }
    return(
         <table>
        <tr>
            <td><b>Enter Name :</b></td>
            <td><input type="text"  onChange={(e) => setName(e.target.value)}></input></td>
        </tr>
        <tr>
            <td><button onClick={check}>Check</button></td>
          </tr>

          {display}
          </table>
 
    )
}
export default CheckGender