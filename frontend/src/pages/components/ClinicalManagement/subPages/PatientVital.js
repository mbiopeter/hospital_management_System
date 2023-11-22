import "./PatientVital.css";
import {FaSave} from "react-icons/fa";
import { useState } from "react";
import PatientClinicalManagement from "./components/patientClinicalManagementNav";
const PatientVitals = ({expand}) => {
    const [vitalHeader,SetVitalHeader] = useState('Vitals');
    const Vitals = () => {
        SetVitalHeader('Vitals');
    }
    const immunization = () => {
        SetVitalHeader('Immunization');
    }
    return(
        <div className="PatientVitalsContainer" style={(expand === false) ? {minWidth: '95%'} :null}>
            <div className="PatientVitalsContainerHeader">
                <span>Patient Visit</span>
                <div className="PatientVitalsContainerHeaderIconContainer">
                    <FaSave className="PatientVitalsContainerHeaderIconContainerIcon"/>
                </div>
            </div>
            <div className="PatientVitalsContainerInner">
                <PatientClinicalManagement vitalHeader = {vitalHeader} Vitals = {Vitals} immunization = {immunization}/>
                <div className="PatientVitalsContainerVitalHeader">
                    <span>Vital Sign</span>
                </div>
                <div className="PatientVitalsContainerVitalBody">

                    <div className="PatientVitalsContainerVitalBodyCol">
                        <div className="PatientVitalsContainerVitalBodyColControl">
                            <label htmlFor="Systolic">Systolic B.P</label>
                            <input type="text" />
                        </div>
                        <div className="PatientVitalsContainerVitalBodyColControl">
                            <label htmlFor="Systolic">Weight(kg)</label>
                            <input type="text" />
                        </div>
                        <div className="PatientVitalsContainerVitalBodyColControl">
                            <label htmlFor="Systolic">Respiratory</label>
                            <input type="text" />
                        </div>
                        <div className="PatientVitalsContainerVitalBodyColControl">
                            <label htmlFor="Systolic">Blood Sugar(R)</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="PatientVitalsContainerVitalBodyCol">
                        <div className="PatientVitalsContainerVitalBodyColControl">
                            <label htmlFor="Systolic">Diastolic</label>
                            <input type="text" />
                        </div>
                        <div className="PatientVitalsContainerVitalBodyColControl">
                            <label htmlFor="Systolic">Height</label>
                            <input type="text" />
                        </div>
                        <div className="PatientVitalsContainerVitalBodyColControl">
                            <label htmlFor="Systolic">Heart Rate</label>
                            <input type="text" />
                        </div>
                        <div className="PatientVitalsContainerVitalBodyColControl">
                            <label htmlFor="Systolic">Blood Sugar(R)</label>
                            <input type="text" />
                        </div>
                        <div className="PatientVitalsContainerVitalBodyColControl">
                            <label htmlFor="Systolic">Trauma</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="PatientVitalsContainerVitalBodyCol">
                        <div className="PatientVitalsContainerVitalBodyColControl">
                            <label htmlFor="Systolic">Temperature</label>
                            <input type="text" />
                        </div>
                        <div className="PatientVitalsContainerVitalBodyColControl">
                            <label htmlFor="Systolic">BMI</label>
                            <input type="text" />
                        </div>
                        <div className="PatientVitalsContainerVitalBodyColControl">
                            <label htmlFor="Systolic">Mobility</label>
                            <input type="text" />
                        </div>
                        <div className="PatientVitalsContainerVitalBodyColControl">
                            <label htmlFor="Systolic">Systolic B.P</label>
                            <input type="text" />
                        </div>
                        <div className="PatientVitalsContainerVitalBodyColControl">
                            <label htmlFor="Systolic">Systolic B.P</label>
                            <input type="text" />
                        </div>
                        <div className="PatientVitalsContainerVitalBodyColControl">
                            <label htmlFor="Systolic">Systolic B.P</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className="PatientVitalsContainerDescription">
                    <label htmlFor="descrition">Description</label>
                    <input type="text" />
                </div>
                <div className="PatientVitalsContainerTableHeader">
                    <span>Current vital</span>
                    <div className="RageButton">
                        <span>Normal Range</span>
                    </div>
                </div>
                <div className="PatientVitalsContainerTableContainer">
                    <table>
                        <thead>
                            <tr>
                                <td>Visit Type</td>
                                <td>Score</td>
                                <td>Date</td>
                                <td>Time</td>
                                <td>SBP</td>
                                <td>DBP</td>
                                <td>Temp.</td>
                                <td>RR</td>
                                <td>HR</td>
                                <td>Urine OP</td>
                                <td>BS(F)</td>
                                <td>BS(R)</td>
                                <td>SPO2</td>
                                <td>AVPU</td>
                                <td>Trauma</td>
                                <td>Mobility</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Visit Type</td>
                                <td style={{backgroundColor:'yellow'}}>3</td>
                                <td>Date</td>
                                <td>Time</td>
                                <td>SBP</td>
                                <td>DBP</td>
                                <td>Temp.</td>
                                <td>RR</td>
                                <td>HR</td>
                                <td>Urine OP</td>
                                <td>BS(F)</td>
                                <td>BS(R)</td>
                                <td>SPO2</td>
                                <td>AVPU</td>
                                <td>Trauma</td>
                                <td>Mobility</td>
                            </tr>                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default PatientVitals;