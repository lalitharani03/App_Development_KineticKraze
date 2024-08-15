import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../Profile/Profile.css";
import defaultProfilePhoto from "../assets/images/profile.jpg";
import Left from "./Left";

export default function Profile() {
  const [registers, setRegisters] = useState([]);
  const [details, setDetails] = useState([]);
  const { userId } = useParams();
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState({});
  const [editedDetails, setEditedDetails] = useState({});
  const [dietPlan, setDietPlan] = useState(null);
  const navigate = useNavigate();

  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  useEffect(() => {
    if (userId) {
      fetchCustomersById(userId);
      fetchDetailsById(userId);
    }
  }, [userId]);

  const fetchDetailsById = (id) => {
    axios
      .get(`http://localhost:8080/api/v1/details/${id}`)
      .then((response) => {
        setDetails([response.data]);
        setEditedDetails(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the details!", error);
      });
  };

  const fetchCustomersById = (id) => {
    axios
      .get(`http://localhost:8080/api/registers/${id}`)
      .then((response) => {
        const customerData = response.data;
        setRegisters([customerData]);
        setEditedCustomer(customerData);
        setProfilePhoto(
          customerData.profilePhoto
            ? `data:image/jpeg;base64,${customerData.profilePhoto}`
            : null
        );
      })
      .catch((error) => {
        console.error("There was an error fetching the customers!", error);
      });
  };

  // const handleEdit = () => {
  //   setIsEditing(true);
  // };

  // const handleUpdate = () => {
  //   axios
  //     .put(`http://localhost:8080/api/registers/${userId}`, editedCustomer)
  //     .then((response) => {
  //       setRegisters([response.data]);
  //       setIsEditing(false);
  //     })
  //     .catch((error) => {
  //       console.error("There was an error updating the customer!", error);
  //     });

  //   axios
  //     .put(`http://localhost:8080/api/v1/details/${userId}`, editedDetails)
  //     .then((response) => {
  //       setDetails([response.data]);
  //       setIsEditing(false);
  //     })
  //     .catch((error) => {
  //       console.error("There was an error updating the details!", error);
  //     });

  //   if (profilePhoto) {
  //     axios
  //       .put(
  //         `http://localhost:8080/api/registers/${userId}/photo`,
  //         profilePhoto.split(",")[1],
  //         {
  //           headers: {
  //             "Content-Type": "text/plain",
  //           },
  //         }
  //       )
  //       .then((response) => {
  //         setRegisters([response.data]);
  //         setIsEditing(false);
  //       })
  //       .catch((error) => {
  //         console.error(
  //           "There was an error updating the profile photo!",
  //           error
  //         );
  //       });
  //   }
  // };
const handleEdit = () => {
  setIsEditing((prevIsEditing) => !prevIsEditing);
};
const handleUpdate = () => {
  // Update customer data
  axios
    .put(`http://localhost:8080/api/registers/${userId}`, editedCustomer)
    .then((response) => {
      setRegisters([response.data]);
    })
    .catch((error) => {
      console.error("There was an error updating the customer!", error);
    });

  // Update user details
  axios
    .put(`http://localhost:8080/api/v1/details/${userId}`, editedDetails)
    .then((response) => {
      setDetails([response.data]);
    })
    .catch((error) => {
      console.error("There was an error updating the details!", error);
    });

  // Update profile photo if changed
  if (profilePhoto && profilePhoto.startsWith("data:image")) {
    axios
      .put(
        `http://localhost:8080/api/registers/${userId}/photo`,
        profilePhoto.split(",")[1],
        {
          headers: {
            "Content-Type": "text/plain",
          },
        }
      )
      .then((response) => {
        setRegisters([response.data]);
      })
      .catch((error) => {
        console.error("There was an error updating the profile photo!", error);
      });
  }

  // Exit editing mode
  setIsEditing(false);
};

  const handleInputChange = (e, isCustomer) => {
    const { name, value } = e.target;
    if (isCustomer) {
      setEditedCustomer({ ...editedCustomer, [name]: value });
    } else {
      setEditedDetails({ ...editedDetails, [name]: value });
    }
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const deleteCustomer = (customerId) => {
    axios
      .delete(`http://localhost:8080/api/registers/${customerId}`)
      .then((response) => {
        setRegisters(
          registers.filter((customer) => customer.customerid !== customerId)
        );
      })
      .catch((error) => {
        console.error("There was an error deleting the customer!", error);
      });

    axios
      .delete(`http://localhost:8080/api/v1/details/${customerId}`)
      .then((response) => {
        setDetails(
          details.filter((detail) => detail.customerid !== customerId)
        );
      })
      .catch((error) => {
        console.error(
          "There was an error deleting the customer from details!",
          error
        );
      });
  };

  // return (
  //   <div>
  //     <Left
  //       userId={userId}
  //       height={editedDetails.height}
  //       weight={editedDetails.weight}
  //       fname={editedCustomer.fname}
  //     />
  //     <div className="photo-upload">
  //       <div className="profile-photo-container">
  //         <img
  //           src={profilePhoto || defaultProfilePhoto}
  //           alt="Profile"
  //           className="profile-photo"
  //         />
  //         <div className="upload-overlay">
  //           <label htmlFor="file-input">
  //             <span className="plus-icon">+</span>
  //           </label>
  //           <input
  //             id="file-input"
  //             type="file"
  //             accept="image/*"
  //             onChange={handlePhotoUpload}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //     <div className="main">
  //       {registers.map((customer) => (
  //         <div key={customer.customerid} className="customer-container">
  //           <div className="customer-section">
  //             <div className="customer-labels">
  //               {/* <p>Customer Id</p> */}
  //               <p>First Name</p>
  //               <p>Last Name</p>
  //               <p>Address</p>
  //               <p>Age</p>
  //               <p>Mobile</p>
  //               <p>Email</p>
  //             </div>
  //             <div className="customer-values">
  //               {isEditing ? (
  //                 <>
  //                   <p>{customer.customerid}</p>
  //                   <input
  //                     name="fname"
  //                     value={editedCustomer.fname}
  //                     onChange={(e) => handleInputChange(e, true)}
  //                   />
  //                   <input
  //                     name="lname"
  //                     value={editedCustomer.lname}
  //                     onChange={(e) => handleInputChange(e, true)}
  //                   />
  //                   <input
  //                     name="address"
  //                     value={editedCustomer.address}
  //                     onChange={(e) => handleInputChange(e, true)}
  //                   />
  //                   <input
  //                     name="age"
  //                     value={editedCustomer.age}
  //                     onChange={(e) => handleInputChange(e, true)}
  //                   />
  //                   <input
  //                     name="mobile"
  //                     value={editedCustomer.mobile}
  //                     onChange={(e) => handleInputChange(e, true)}
  //                   />
  //                   <input
  //                     name="email"
  //                     value={editedCustomer.email}
  //                     onChange={(e) => handleInputChange(e, true)}
  //                   />
  //                 </>
  //               ) : (
  //                 <>
  //                   {/* <p>{customer.customerid}</p> */}
  //                   <p>{customer.fname}</p>
  //                   <p>{customer.lname}</p>
  //                   <p>{customer.address}</p>
  //                   <p>{customer.age}</p>
  //                   <p>{customer.mobile}</p>
  //                   <p>{customer.email}</p>
  //                 </>
  //               )}
  //             </div>
  //           </div>
  //         </div>
  //       ))}

  //       {details.map((detail) => (
  //         <div key={detail.customerid} className="customer-container">
  //           <div className="customer-section">
  //             <div className="customer-labels">
  //               <p>Gender:</p>
  //               <p>Height:</p>
  //               <p>Weight:</p>
  //               <p>Fitness Goals:</p>
  //               <p>Timeframe:</p>
  //               <p>Activity Level:</p>
  //               <p>Workout Days:</p>
  //               <p>Workout Duration:</p>
  //               <p>Workout Types:</p>
  //               <p>Equipment:</p>
  //               <p>Workout Place:</p>
  //             </div>
  //             <div className="customer-values">
  //               {isEditing ? (
  //                 <>
  //                   <input
  //                     name="gender"
  //                     value={editedDetails.gender}
  //                     onChange={(e) => handleInputChange(e, false)}
  //                   />
  //                   <input
  //                     name="height"
  //                     value={editedDetails.height}
  //                     onChange={(e) => handleInputChange(e, false)}
  //                   />
  //                   <input
  //                     name="weight"
  //                     value={editedDetails.weight}
  //                     onChange={(e) => handleInputChange(e, false)}
  //                   />
  //                   <input
  //                     name="fitnessGoals"
  //                     value={editedDetails.fitnessGoals}
  //                     onChange={(e) => handleInputChange(e, false)}
  //                   />
  //                   <input
  //                     name="timeframe"
  //                     value={editedDetails.timeframe}
  //                     onChange={(e) => handleInputChange(e, false)}
  //                   />
  //                   <input
  //                     name="activityLevel"
  //                     value={editedDetails.activityLevel}
  //                     onChange={(e) => handleInputChange(e, false)}
  //                   />
  //                   <input
  //                     name="workoutDays"
  //                     value={editedDetails.workoutDays}
  //                     onChange={(e) => handleInputChange(e, false)}
  //                   />
  //                   <input
  //                     name="workoutDuration"
  //                     value={editedDetails.workoutDuration}
  //                     onChange={(e) => handleInputChange(e, false)}
  //                   />
  //                   <input
  //                     name="workoutTypes"
  //                     value={editedDetails.workoutTypes}
  //                     onChange={(e) => handleInputChange(e, false)}
  //                   />
  //                   <input
  //                     name="equipment"
  //                     value={editedDetails.equipment}
  //                     onChange={(e) => handleInputChange(e, false)}
  //                   />
  //                   <input
  //                     name="workoutPlace"
  //                     value={editedDetails.workoutPlace}
  //                     onChange={(e) => handleInputChange(e, false)}
  //                   />
  //                 </>
  //               ) : (
  //                 <>
  //                   <p>{detail.gender}</p>
  //                   <p>{detail.height}</p>
  //                   <p>{detail.weight}</p>
  //                   <p>{detail.fitnessGoals}</p>
  //                   <p>{detail.timeframe}</p>
  //                   <p>{detail.activityLevel}</p>
  //                   <p>{detail.workoutDays}</p>
  //                   <p>{detail.workoutDuration}</p>
  //                   <p>{detail.workoutTypes}</p>
  //                   <p>{detail.equipment}</p>
  //                   <p>{detail.workoutPlace}</p>
  //                 </>
  //               )}
  //             </div>
  //           </div>
  //         </div>
  //       ))}

  //       <div className="customer-actions">
  //         {isEditing ? (
  //           <button
  //             type="button"
  //             className="btn btn-success"
  //             onClick={handleUpdate}
  //           >
  //             Update
  //           </button>
  //         ) : (
  //           <button
  //             type="button"
  //             className="btn btn-warning"
  //             onClick={handleEdit}
  //           >
  //             Edit
  //           </button>
  //         )}
  //         <button
  //           type="button"
  //           className="btn btn-danger"
  //           onClick={() => deleteCustomer(registers[0].customerid)}
  //         >
  //           Delete
  //         </button>
  //         <button
  //           type="button"
  //           className="btn btn-secondary"
  //           onClick={() => navigate("/")}
  //         >
  //           Back
  //         </button>
  //       </div>
  //     </div>

  //     {/* <DietPlan details={details[0]} setDietPlan={setDietPlan} /> */}

  //     {/* {dietPlan && (
  //         <div className="diet-plan-container">
  //           <h2>Generated Diet Plan</h2>
  //           <div>
  //             <h3>Breakfast:</h3>
  //             <p>{dietPlan.breakfast}</p>
  //           </div>
  //           <div>
  //             <h3>Lunch:</h3>
  //             <p>{dietPlan.lunch}</p>
  //           </div>
  //           <div>
  //             <h3>Dinner:</h3>
  //             <p>{dietPlan.dinner}</p>
  //           </div>
  //           <div>
  //             <h3>Snacks:</h3>
  //             <p>{dietPlan.snacks}</p>
  //           </div>
  //         </div>
  //       )} */}
  //   </div>
  // );

  return (
    <div style={{ marginLeft: isSidebarOpen ? "250px" : "0", transition: "margin-left 0.3s ease" }}>
      <Left
        userId={userId}
        height={editedDetails.height}
        weight={editedDetails.weight}
        fname={editedCustomer.fname}
        onSidebarToggle={handleSidebarToggle}
      />
      <div className="photo-upload">
        <div className="profile-photo-container">
          <img
            src={profilePhoto || defaultProfilePhoto}
            alt="Profile"
            className="profile-photo"
          />
          <div className="upload-overlay">
            <label htmlFor="file-input">
              <span className="plus-icon">+</span>
            </label>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
            />
          </div>
        </div>
      </div>
      <div className="profile-page">
        <h2 className="gupiter-bold" style={{fontFamily: "Gupiter",
    fontWeight: "bold",
    fontStyle: "normal",
    fontSize: "28px"}}>USER INFORMATION</h2>
         <div className="profile-section">
    <div className="profile-group">
      <label className="gupter-medium"  style={{fontSize:'20px'}}>First Name</label>
      {isEditing ? (
        <input
          type="text"
          name="fname"  // Corrected
          value={editedCustomer.fname}
          onChange={(e) => handleInputChange(e, true)}
          style={{fontSize:'20px'}}
        />
      ) : (
        <p className="gupter-regular" style={{fontSize:'20px'}}>{editedCustomer.fname}</p>
      )}
    </div>
    <div className="profile-group">
      <label className="gupter-medium" style={{fontSize:'20px'}}>Last Name</label>
      {isEditing ? (
        <input
          style={{fontSize:'20px'}}
          type="text"
          name="lname"  // Corrected
          value={editedCustomer.lname}
          onChange={(e) => handleInputChange(e, true)}
        />
      ) : (
        <p className="gupter-regular" style={{fontSize:'20px'}}>{editedCustomer.lname}</p>
      )}
    </div>
    <div className="profile-group">
      <label className="gupter-medium" style={{fontSize:'20px'}}>Address</label>
      {isEditing ? (
        <input
        style={{fontSize:'20px'}}
          type="text"
          name="address"  // Corrected
          value={editedCustomer.address}
          onChange={(e) => handleInputChange(e, true)}
        />
      ) : (
        <p className="gupter-regular" style={{fontSize:'20px'}}>{editedCustomer.address}</p>
      )}
    </div>
    <div className="profile-group">
      <label className="gupter-medium" style={{fontSize:'20px'}}>Age</label>
      {isEditing ? (
        <input
        style={{fontSize:'20px'}}
          type="text"
          name="age"  // Corrected
          value={editedCustomer.age}
          onChange={(e) => handleInputChange(e, true)}
        />
      ) : (
        <p className="gupter-regular" style={{fontSize:'20px'}}>{editedCustomer.age}</p>
      )}
    </div>
    <div className="profile-group">
      <label className="gupter-medium" style={{fontSize:'20px'}}>Mobile</label>
      {isEditing ? (
        <input
        style={{fontSize:'20px'}}
          type="text"
          name="mobile"  // Corrected
          value={editedCustomer.mobile}
          onChange={(e) => handleInputChange(e, true)}
        />
      ) : (
        <p className="gupter-regular" style={{fontSize:'20px'}}>{editedCustomer.mobile}</p>
      )}
    </div>
    <div className="profile-group">
      <label className="gupter-medium" style={{fontSize:'20px'}}>Email</label>
      {isEditing ? (
        <input
        style={{fontSize:'20px'}}
          type="text"
          name="email"  // Corrected
          value={editedCustomer.email}
          onChange={(e) => handleInputChange(e, true)}
        />
      ) : (
        <p className="gupter-regular" style={{fontSize:'20px'}}>{editedCustomer.email}</p>
      )}
    </div>
  </div>
      
        <h2 className="gupiter-bold" style={{fontFamily: "Gupiter",
    fontWeight: "bold",
    fontStyle: "normal",
    fontSize: "28px"}}>DETAILS</h2>
      <div className="profile-section">
      <div className="profile-group">
          <label className="gupter-medium" style={{fontSize:'20px'}}>Gender</label>
          {isEditing ? (
            <input
            style={{fontSize:'20px'}}
              type="text"
              name="gender"
              value={editedDetails.gender}
              onChange={handleInputChange}
            />
          ) : (
            <p className="gupter-regular" style={{fontSize:'20px'}}>{editedDetails.gender}</p>
          )}
        </div>
        <div className="profile-group">
          <label className="gupter-medium" style={{fontSize:'20px'}}>Height</label>
          {isEditing ? (
            <input
            style={{fontSize:'20px'}}
              type="text"
              name="height"
              value={editedDetails.height}
              onChange={handleInputChange}
            />
          ) : (
            <p className="gupter-regular" style={{fontSize:'20px'}}>{editedDetails.height}</p>
          )}
        </div>
        <div className="profile-group">
          <label className="gupter-medium" style={{fontSize:'20px'}}>Weight</label>
          {isEditing ? (
            <input
            style={{fontSize:'20px'}}
              type="text"
              name="weight"
              value={editedDetails.weight}
              onChange={handleInputChange}
            />
          ) : (
            <p className="gupter-regular" style={{fontSize:'20px'}}>{editedDetails.weight}</p>
          )}
        </div>
        <div className="profile-group">
          <label className="gupter-medium" style={{fontSize:'20px'}}>Fitness Goals</label>
          {isEditing ? (
            <input
            style={{fontSize:'20px'}}
              type="text"
              name="fitnessGoals"
              value={editedDetails.fitnessGoals}
              onChange={handleInputChange}
            />
          ) : (
            <p className="gupter-regular" style={{fontSize:'20px'}}>{editedDetails.fitnessGoals}</p>
          )}
        </div>
        <div className="profile-group">
          <label className="gupter-medium" style={{fontSize:'20px'}}>Timeframe</label>
          {isEditing ? (
            <input
            style={{fontSize:'20px'}}
              type="text"
              name="timeframe"
              value={editedDetails.timeframe}
              onChange={handleInputChange}
            />
          ) : (
            <p className="gupter-regular" style={{fontSize:'20px'}}>{editedDetails.timeframe}</p>
          )}
        </div>
        <div className="profile-group">
          <label className="gupter-medium" style={{fontSize:'20px'}}>Activity Level</label>
          {isEditing ? (
            <input
            style={{fontSize:'20px'}}
              type="text"
              name="activityLevel"
              value={editedDetails.activityLevel}
              onChange={handleInputChange}
            />
          ) : (
            <p className="gupter-regular" style={{fontSize:'20px'}}>{editedDetails.activityLevel}</p>
          )}
        </div>
        <div className="profile-group">
          <label className="gupter-medium" style={{fontSize:'20px'}}>Workout Days</label>
          {isEditing ? (
            <input
            style={{fontSize:'20px'}}
              type="text"
              name="workoutDays"
              value={editedDetails.workoutDays}
              onChange={handleInputChange}
            />
          ) : (
            <p className="gupter-regular" style={{fontSize:'20px'}}>{editedDetails.workoutDays}</p>
          )}
        </div>
        <div className="profile-group">
          <label className="gupter-medium" style={{fontSize:'20px'}}>Workout Duration</label>
          {isEditing ? (
            <input
            style={{fontSize:'20px'}}
              type="text"
              name="workoutDuration"
              value={editedDetails.workoutDuration}
              onChange={handleInputChange}
            />
          ) : (
            <p className="gupter-regular" style={{fontSize:'20px'}}>{editedDetails.workoutDuration}</p>
          )}
        </div>
        <div className="profile-group">
          <label className="gupter-medium" style={{fontSize:'20px'}}>Workout Types</label>
          {isEditing ? (
            <input
            style={{fontSize:'20px'}}
              type="text"
              name="workoutTypes"
              value={editedDetails.workoutTypes}
              onChange={handleInputChange}
            />
          ) : (
            <p className="gupter-regular" style={{fontSize:'20px'}}>{editedDetails.workoutTypes}</p>
          )}
        </div>
        <div className="profile-group">
          <label className="gupter-medium" style={{fontSize:'20px'}}>Equipment</label>
          {isEditing ? (
            <input
            style={{fontSize:'20px'}}
              type="text"
              name="equipment"
              value={editedDetails.equipment}
              onChange={handleInputChange}
            />
          ) : (
            <p className="gupter-regular" style={{fontSize:'20px'}}>{editedDetails.equipment}</p>
          )}
        </div>
        <div className="profile-group">
          <label className="gupter-medium" style={{fontSize:'20px'}}>Workout Place</label>
          {isEditing ? (
            <input
            style={{fontSize:'20px'}}
              type="text"
              name="workoutPlace"
              value={editedDetails.workoutPlace}
              onChange={handleInputChange}
            />
          ) : (
            <p className="gupter-regular" style={{fontSize:'20px'}}>{editedDetails.workoutPlace}</p>
          )}
        </div>
      </div>
    </div>
         <div className="customer-actions">
         <button className="btn-edit" onClick={isEditing ? handleUpdate : handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteCustomer(registers[0].customerid)}
          >
            Delete
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
    </div>
  );
}
