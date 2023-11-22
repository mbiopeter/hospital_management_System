import { useState } from 'react';
import './OutPatientVisit.css';
import {FaTimes,FaSave } from "react-icons/fa";
const OutPatientVisit = ({OutPatientVisitState,toggleOutPatientVist}) => {
    const [OutPatientVisitTable,setOutPatientVisitTable] = useState(false);
    const toggleOutpatientVisit  = () => {
        setOutPatientVisitTable(!OutPatientVisitTable);
    }
    return((OutPatientVisitState === true) ? (
        <div>
            <div className="OutPatientVisitOverlayer" onClick={toggleOutPatientVist}>

            </div>
            <div className="OutPatientVisitContainer">
                <div className="OutPatientVisitContainerHeader">
                    <span>Out-Patient Visit</span>
                    <div className="CloseOutPatientVisitContainerHeader" onClick={toggleOutPatientVist}>
                        <FaTimes className='CloseOutPatientVisitContainer'/>
                    </div>
                </div>
                <div className="OutPatientVisitContainerBody">
                    <div className="OutPatientVisitContainerBodyHeader">
                        <span>Add Patient Visit</span>
                        <FaSave className='SaveOutPatientVisitIcon'/>
                    </div>
                    <div className="OutPatientVisitTypeContainer">
                        <div className="OutPatientVisitTypeContainerCol">
                            <div className="OutPatientVisitTypeContainerSubCol">
                                <label htmlFor='Type'>Visit Type</label>
                            </div>
                            <div className="OutPatientVisitTypeContainerSubCol">
                                <select id='Type' style={{width:'90%'}}>
                                    <option value="" selected>Select</option>
                                    <option value="General Visit">General Visit</option>
                                </select>
                            </div>
                        </div>
                        <div className="OutPatientVisitTypeContainerCol OutPatientVisitInput">
                            <div className="OutPatientVisitTypeContainerSubCol">
                                <label htmlFor='Description'>Description</label>
                            </div>
                            <div className="OutPatientVisitTypeContainerSubCol OutPatientVisitInput">
                                <input type="text" id='Description' style={{width:'90%'}}/>
                            </div>
                        </div>
                        <div className="OutPatientVisitTypeContainerCol OutPatientVisitInput">
                            <div className="OutPatientVisitTypeContainerSubCol">
                                <label htmlFor='Clinic'>Clinic/Depertment</label>
                            </div>
                            <div className="OutPatientVisitTypeContainerSubCol OutPatientVisitInput">
                                <select id='Clinic' style={{width:'90%'}}>
                                    <option value="" selected>Select</option>
                                    <option value="General OPD">General OPD</option>
                                </select>
                            </div>
                        </div>
                        <div className="OutPatientVisitTypeContainerCol OutPatientVisitInput">
                            <div className="OutPatientVisitTypeContainerSubCol">
                                <label htmlFor='Type'>Doctor/Nurse</label>
                            </div>
                            <div className="OutPatientVisitTypeContainerSubCol">
                                <select id='Type' style={{width:'90%'}}>
                                    <option value="" selected>Select</option>
                                    <option value="Peter">Peter</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="OutpatientLastVisitContainer">
                        <div className="OutpatientLastVisitContainerHeader">
                            <div className="AddExpandContainer" onClick={toggleOutpatientVisit}>
                                <span style={(OutPatientVisitTable === false) ? {display: 'flex',paddingBottom:'2px'}: {display: 'none'}}>+</span>
                                <span style={(OutPatientVisitTable === true) ? {display: 'flex',paddingBottom:'4px'}: {display: 'none'}}>-</span>
                            </div>
                            <span>Previous Visits</span>
                        </div>
                        <div className="OutPatientVisitTableContainer" style={(OutPatientVisitTable === false) ? {display: 'none'}: null}>
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
export default OutPatientVisit;