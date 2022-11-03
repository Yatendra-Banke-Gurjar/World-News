
import React, { useState } from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
// import './firebase-form.css';

export default function FirebaseForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  })
  const getUserData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value })
  }

  const postDataOnFirebase = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://storedata-f6c9e-default-rtdb.firebaseio.com/reactFormData.json",
      {
        method: "POST",
        header: "content-Type:application/json",
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
          message: user.message
        })

      }

    )
    if (res) {
      setUser({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: ""
      })
      alert("Data store successfully")
    }
  }

  return (
    <>
      {/* <div className="for-contact-main-border">
        <div className="cnctbackimg">
        <img src="contactus3.jpg" alt="backimage" />
        </div>
        <div className="cnct2img">
        <img src="contactus.jpg" className="cnct2img" alt="backimage" />
        </div>
      </div> */}
      <form method="post">
        <div className="formcard">
          <div className="cnct-background-img">
            <img src="Flatlay.jpg" className="cnct-background-img" alt="" />
          </div>

          <div className="cnct-background2-img">
            <img src="contactus.jpg" className="cnct-background2-img" alt="" />
          </div>

          

          <h2>Contact Us</h2>
          <div className="row">
            <div className="col">
              <div className="form-group">
              <input type="text"  name="name" className="form-group" placeholder="Enter your name :" value={user.name} onChange={getUserData} required />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
              <input type="text" name="email" className="form-group" placeholder="Enter your email  "  value={user.email} onChange={getUserData} required />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <input type="tel" name="phone" className="form-group" placeholder="Enter your contact no." value={user.phone} onChange={getUserData} required />
              </div>
            </div>
            {/* <div className="col">
              <div className="form-group">
                Address:<input type="text" name="address" placeholder="enter your Address" value={user.address} onChange={getUserData} required />
              </div>
            </div> */}
            <div className="col">
              <div className="form-group">
                <textarea name="message" className="form-group2" placeholder="Type Something:" value={user.message} onChange={getUserData} required></textarea>
              </div>
            </div>
            <div className="col">
              <input type="submit" className="form-groupbtn" value="Submit" onClick={postDataOnFirebase} />
              {/* <input type="reset" value={"Reset"}  /> */}
            </div>
          </div>
          <div className="followus">
            <big className="followusheading" ><b>Follow Us On :</b></big> <br />

          <div> < FiFacebook />  Facebook:<br /></div> <hr /> <br />
          <div> < FiTwitter />  Twitter:<br /></div> <hr /> <br />
          <div> < FiInstagram />  Instagram:<br /></div> <hr /> <br />
          <div> < FiYoutube />  Youtube:<br /></div> <hr /> <br />
          </div>
          <div className="cupimg">
          <img src="preview-324.jpg" className="cupimg" alt="" />
          <input type="reset" value={"Reset"} />
          </div>
        </div>
      </form>

    </>

  )
}







































































// import React from 'react'
// import { useState } from 'react'
// // import './firebase-form.css';

// export default function Form () {
//     function FirebaseForm(){
// const [user,setuser]=useState({
// name:"",
// email:"",
// phone:"",
// address:"",
// messsage:""

// })
// let name,value;
// const getUserdata   =(event)=>{
// name=event.target.name;
// value=event.target.value;
// setuser({...user ,[name]:value})
// }

//     }
//   return (
//     <div>
//     <form>
// Name:<input type="text" name="name" value=""></input>
// Email:<input type="email" name="name" value=""></input>
// phone:<input type="text" name="name" value=""></input>
// message:<input type="text" name="name" value=""></input>
//     </form>
//     </div>
//   )
// }













































































































































// import React, { Component } from 'react'

// export default class Contact extends Component {
//   render() {
//     return (
//       <div className='mainback' >
//         <div className='contact' >
//           <div className='contact1'><big> <b><h2> Register now</h2></b></big>
//             <form className='contactform' >
//               <div className='formelements'>
//                 First Name: <input type="text" name='firstname' placeholder='First Name' required /><br />
//                 Last Name:<input type="text" name='lastname' placeholder='Last Name' required /> <br />
//                 Email-i'd: <input type="email" name='email' placeholder='Enter Email' required /> <br />
//                 Mobile No.: <input type="tel" name='mobilenumber' placeholder='Enter Contact Number' required />

//                 <input type="submit" value={"Submit"} className='cnctbutton' />
//                 <input type="reset" value={"Reset"} className='cnctbutton2' />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
