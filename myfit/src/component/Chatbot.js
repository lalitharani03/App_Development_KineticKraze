// import React, { useState } from "react";
// import image from "../assets/images/chatlogo.png";
// import { Button } from "@mui/material";
// import "../css/Chatbot.css";
// import MessagesChat from "./MessagesChat";
// import { analyze } from "./utils";

// export default function Chatbot() {
//   const [message, setMessages] = useState([
//     {
//       message: "Hi, May I know ur name?",
//     },
//   ]);
//   const [text, setText] = useState("");

//   const onSend = () => {
//     let list = [...message, { message: text, user: true }];
//     if (list.length > 2) {
//       const reply = analyze(text);
//       list = [...list, { message: reply }];
//     } else {
//       list = [
//         ...list,
//         {
//           message: `Hi, ${text}`,
//         },
//         {
//           message: "How can i help you?",
//         },
//       ];
//     }
//     setMessages(list);
//     setText("");
//     setTimeout(() => {
//       document.querySelector("#copyright").scrollIntoView();
//     });
//   };

//   return (
//     <div className="Chatbot">
//       <div className="d-flex align-items-center justify-content-center" >
//         <img src={image} alt="logo" height={200} width={200} />
//       </div>
//       <div className="chat-message">
//         {message.length > 0 &&
//           message.map((data) => <MessagesChat {...data} />)}
//         <div className="d-flex mt-2">
//           <input
//             type="text"
//             className="form-control"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//           <Button
//             sx={{ backgroundColor: "skyblue", color: "black" }}
//             className="ms-2"
//             onClick={onSend}
//           >
//             SEND
//           </Button>
//         </div>
//         <div id="copyright" className="mt-3">
//           Copyrights reserved Kinetic Kraze
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Button, IconButton, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Chatbot() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const navigate = useNavigate();


  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/query', { query });
      setResponse(res.data.response);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div style={{marginTop:"3cm"}}>
       <IconButton onClick={() => navigate(-1)} style={{ position: 'absolute', top: '1cm', left: '1cm' }}>
        <ArrowBackIcon />
      </IconButton>
      <h4 style={{textAlign:'center',fontSize:"3rem",fontFamily:'cursive'}}>FitBuddy!!!</h4>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"1cm"}}>
        <input type="text" value={query} onChange={handleInputChange} placeholder="Ask your doubts" style={{width:"50%",color:"black"}}/>
        <Button onClick={handleSubmit} style={{backgroundColor:'#6A1B1A',color:"white",width:'10%'}}>Submit</Button>
        {response && <Typography>{response}</Typography>}
      </div>
    </div>
  );
}
