import { useState } from 'react';
import './InPatientVisit.css';
import {FaTimes,FaSave } from "react-icons/fa";
const InPatientVisit = ({InPatientVisitState,toggleInPatientVist}) => {
    const [InPatientVisitTable,setInPatientVisitTable] = useState(false);
    const toggleInpatientVisit  = () => {
        setInPatientVisitTable(!InPatientVisitTable);
    }
    return((InPatientVisitState === true) ? (
        <div>
            <div className="InPatientVisitOverlayer" onClick={toggleInPatientVist}>

            </div>
            <div className="InPatientVisitContainer">
                <div className="InPatientVisitContainerHeader">
                    <span>In-Patient Visit</span>
                    <div className="CloseInPatientVisitContainerHeader" onClick={toggleInPatientVist}>
                        <FaTimes className='CloseInPatientVisitContainer'/>
                    </div>
                </div>
                <div className="InPatientVisitContainerBody">
                    <div className="InPatientVisitContainerBodyHeader">
                        <span>Add Patient Visit</span>
                        <FaSave className='SaveInPatientVisitIcon'/>
                    </div>
                    <div className="InPatientVisitTypeContainer">
                        <div className="InPatientVisitTypeContainerCol">
                            <div className="InPatientVisitTypeContainerSubCol">
                                <label htmlFor='Type'>Visit Type</label>
                            </div>
                            <div className="InPatientVisitTypeContainerSubCol">
                                <select id='Type' style={{width:'90%'}}>
                                    <option value="" selected>Select</option>
                                    <option value="General Visit">General Visit</option>
                                </select>
                            </div>
                        </div>
                        <div className="InPatientVisitTypeContainerCol InPatientVisitInput">
                            <div className="InPatientVisitTypeContainerSubCol">
                                <label htmlFor='Description'>Description</label>
                            </div>
                            <div className="InPatientVisitTypeContainerSubCol InPatientVisitInput">
                                <input type="text" id='Description' style={{width:'90%'}}/>
                            </div>
                        </div>
                        <div className="InPatientVisitTypeContainerCol InPatientVisitInput">
                            <div className="InPatientVisitTypeContainerSubCol">
                                <label htmlFor='Clinic'>Word</label>
                            </div>
                            <div className="InPatientVisitTypeContainerSubCol InPatientVisitInput">
                                <select id='Clinic' style={{width:'90%'}}>
                                    <option value="" selected>Select</option>
                                    <option value="General OPD">Word One</option>
                                    <option value="General OPD">Word Two</option>
                                    <option value="General OPD">Word Three</option>
                                    <option value="General OPD">Word Four</option>
                                </select>
                            </div>
                        </div>
                        <div className="InPatientVisitTypeContainerCol InPatientVisitInput">
                            <div className="InPatientVisitTypeContainerSubCol">
                                <label htmlFor='Type'>Bed Number</label>
                            </div>
                            <div className="InPatientVisitTypeContainerSubCol">
                                <select id='Type' style={{width:'90%'}}>
                                    <option value="" selected>Select</option>
                                    <option value="1">1</option>
                                    <option value="1">2</option>
                                    <option value="1">3</option>
                                    <option value="1">4</option>
                                    <option value="1">5</option>
                                    <option value="1">6</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="InpatientLastVisitContainer">
                        <div className="InpatientLastVisitContainerHeader">
                            <div className="AddExpandContainer" onClick={toggleInpatientVisit}>
                                <span style={(InPatientVisitTable === false) ? {display: 'flex',paddingBottom:'2px'}: {display: 'none'}}>+</span>
                                <span style={(InPatientVisitTable === true) ? {display: 'flex',paddingBottom:'4px'}: {display: 'none'}}>-</span>
                            </div>
                            <span>Previous Visits</span>
                        </div>
                        <div className="InPatientVisitTableContainer" style={(InPatientVisitTable === false) ? {display: 'none'}: null}>
                            <table>
                                <thead>
                                    <tr>
                                        <td>SN</td>
                                        <td>Reg. No</td>
                                        <td>VisitDate</td>
                                        <td>Patient Name</td>
                                        <td>Clinic</td>
                                        <td>Nurse/Doctor</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>134</td>
                                        <td>30/09/2023</td>
                                        <td>Mbio Peter</td>
                                        <td>Dental</td>
                                        <td>Chege</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ):null)
}
export default InPatientVisit;