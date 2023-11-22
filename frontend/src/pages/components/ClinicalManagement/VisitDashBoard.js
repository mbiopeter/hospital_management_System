import { useState } from "react";
import "./VisitDashBoard.css";
import { Link } from "react-router-dom";
import {FaRegHandPointUp,FaSave} from "react-icons/fa";
const VisitDashBoard = ({expand}) => {
    const [visitAcknowlegement,setAcknowlegement] = useState(false);

    const HandleAcknowledgement = () => {
        setAcknowlegement(true);
    }
    return(
        <div style={(expand === false) ? {minWidth: '95%'} :null} className="VisitDashBoardContainer">
            <div className="VisitDashBoardContainerHeader">
                <span>Visit DashBoard</span>
                <div className="VisitDashBoardContainerHeaderIconContainer">
                    <FaSave className="VisitDashBoardContainerHeaderIconContainerIcon"/>
                </div>
            </div>
            <div className="VisitDashBoardContainerInner">
                <div className="VisitDashBoardContainerInnerInputsHeader">
                    <div className="VisitDashBoardContainerInnerInputsHeaderControl">
                        <select >
                            <option value="" selected>Select By</option>
                            <option value="Patient Name">Patient Name</option>
                            <option value="Reg. No">Reg. No</option>
                            <option value="Visit Number">Visit Number</option>
                            <option value="Mobile Number">Mobile Number</option>
                            <option value="ID Number">ID Number</option>
                        </select>
                        <input type="text" className="VisitDashboradInput"/>
                    </div>
                    <div className="VisitDashBoardContainerInnerInputsHeaderControl">
                        <label htmlFor="doctor">Doctor</label>
                        <select id="doctor">
                            <option value="All" selected>All</option>
                            <option value="Patient Name">Patient Name</option>
                            <option value="Reg. No">Reg. No</option>
                            <option value="Visit Number">Visit Number</option>
                            <option value="Mobile Number">Mobile Number</option>
                            <option value="ID Number">ID Number</option>
                        </select>
                    </div>
                    <div className="VisitDashBoardContainerInnerInputsHeaderControl">
                        <label htmlFor="doctor">Patient Type</label>
                        <select id="doctor">
                            <option value="All" selected>All</option>
                            <option value="Patient Name">Patient Name</option>
                            <option value="Reg. No">Reg. No</option>
                            <option value="Visit Number">Visit Number</option>
                            <option value="Mobile Number">Mobile Number</option>
                            <option value="ID Number">ID Number</option>
                        </select>
                    </div>
                
                </div>
                <div className="VisitDashBoardContainerInnerVisitAnalysis">
                    <div className="VisitDashBoardContainerInnerVisitAnalysisContainers" style={{backgroundColor:'#15c668'}}>
                        <span>New Patient (1)</span>
                    </div>
                    <div className="VisitDashBoardContainerInnerVisitAnalysisContainers">
                        <span>Nurse Seen (0)</span>
                    </div>
                    <div className="VisitDashBoardContainerInnerVisitAnalysisContainers">
                        <span>Doctor Seen (0)</span>
                    </div>
                    <div className="VisitDashBoardContainerInnerVisitAnalysisContainers">
                        <span>Visit Complete (0)</span>
                    </div>
                </div>
                <div className="VisitDashBoardContainerInnerTablecontainer">
                    <table>
                        <thead>
                            <tr>
                                <td>SN</td>
                                <td>Reg. No</td>
                                <td>Patient Name</td>
                                <td>Age/Gender</td>
                                <td>Visit No</td>
                                <td>Clicic</td>
                                <td>Status</td>
                                <td>Aknowledge</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>324</td>
                                <td>Mbio Peter</td>
                                <td>22Y/M</td>
                                <td>543</td>
                                <td>General Opd</td>
                                <td>Billed</td>
                                <td>
                                    <button onClick={HandleAcknowledgement}>acknowledge</button>
                                </td>
                                <td className="NavColVistDash">
                                    <Link to="/PatientVitals" style={{ textDecoration: 'none' }}>  
                                        <FaRegHandPointUp className="VisitacknowlegeIcon" style={(visitAcknowlegement === false) ? {display:'none'}:null}/>
                                    </Link>
                                </td>
                            </tr>                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default VisitDashBoard;