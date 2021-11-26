import React, { useState, useEffect, useRef } from "react";
import io  from 'socket.io-client';
import '../styles/Logs.css'
import { MDBCard, MDBCardBody, MDBCardFooter, MDBCardText, MDBIcon } from 'mdbreact';

const ENDPOINT = "https://tour-app-sudan.herokuapp.com/";

var socket =  io.connect(ENDPOINT ,
     {
      
        transports: ['websocket'],
        forceNew: true
    }
)


// const sock = io(ENDPOINT, {
//     transports: ['websocket'],
//     forceNew: true
// });
function Logs() {


    const [logs, setLogs] = useState([]);

    useEffect(() => {
        console.log("INDIDE USE effect");
        //       const socket = socketIOClient(ENDPOINT);
       
        console.log(socket.connected);
        socket.emit('fetch-logs', {
            name: "ADMIN",
            location: "JBRA  , Khartoum"
        })


        socket.on('log', (data) => {
            console.log(data);
            setLogs(data);
        })


        //         socketRef.current.emit('admin' ,  ()=>{})
        //         socketRef.current.on("log", data => {

        //             console.log(data);
        //         });
        //         socketRef.current.on("log", data => {
        //    console.log('SOCKET DATA');
        //    console.log(data);

        //             setLogs(data);
        //         });
    }, []);


    //    useEffect(() => {
    //        socket.emit('fetch-logs' ,{})
    //       socket.on('log' , (data) =>{
    //           console.log(data);
    //           setLogs(data);
    //       })
    //    }, []);






    // render(){
    return (
        <div className="logs">
            {/* gajdk;gjdgj;🧩 
            dgkgljsdl */}
          
            {
                logs.map((log) => <LogData log={log}/>)
            }
        </div>
    );
    // }
}

function LogData({log}){

    return (<div>

<MDBCard className="card">
    <MDBCardBody className="body">
      
        <MDBCardText>
           { log.event}
        </MDBCardText>
    </MDBCardBody>

    <MDBCardFooter className="footer">
                <MDBIcon  icon="time" >
                </MDBIcon>
                <MDBCardText>
                    {log.event_time}
                </MDBCardText>
    </MDBCardFooter>
</MDBCard>
    </div>);
}


export default Logs;