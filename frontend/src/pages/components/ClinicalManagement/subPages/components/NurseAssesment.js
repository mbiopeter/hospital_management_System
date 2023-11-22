import { useState } from 'react';
import '../ClinicalOthers.css';
import './NurseAssesment.css';
import PatientClinicalManagement from './patientClinicalManagementNav';
import RightOtherNav from './RightOtherNav';
import {FaRegHandPointUp,FaSave} from "react-icons/fa";
const NurseAssesment = ({expand}) => {
    const [Textarea,SetTeatarea] = useState(false);
    const HandleDisplayNurseAssesmentTextarea = () => {
        SetTeatarea(true);
    }
    return(
        <div className="ClinicalOthersContainer" style={(expand === false) ? {minWidth: '95%'} :null}>
            <div className="ClinicalOthersContainerHeader">
                <div className="ClinicalOthersContainerHeaderOne">
                    <span>Patient Visits</span>
                </div>
                <div className="ClinicalOthersContainerHeaderTwo">
                    <span className='ClinicalOthersContainerHeaderTwoHeaders'>RegNo:</span>
                    <span className='ClinicalOthersContainerHeaderTwoLabel'>166</span>
                    <span className='ClinicalOthersContainerHeaderTwoHeaders'>Name:</span>
                    <span className='ClinicalOthersContainerHeaderTwoLabel'>Mbio Peter</span>
                    <span className='ClinicalOthersContainerHeaderTwoHeaders'>Gender/Age:</span>
                    <span className='ClinicalOthersContainerHeaderTwoLabel'>Male/22Y</span>
                </div>
            </div>
            <div className="ClinicalOthersContainerInner">
                <PatientClinicalManagement  />
                <div className="ClinicalOthersContainerInnerMainContainer">
                    <RightOtherNav/>
                    <div className="NurseAssesmentDisplay">
                        <div className="NurseAssesmentDisplayContainer">
                            <label htmlFor="NurseForm">Nurse Form</label>
                            <select id="NurseForm">
                                <option value="" selected>Select</option>
                            </select>
                            <div className="NurseAssesmentDisplayContainerIconsContainer" onClick={HandleDisplayNurseAssesmentTextarea}>
                                <FaRegHandPointUp className='NurseAssesmentDisplayContainerIcons' />
                            </div>
                            <div className="NurseAssesmentDisplayContainerIconsContainer">
                                <FaSave className='NurseAssesmentDisplayContainerIcons' />
                            </div>
                        </div>
                        <div className="NurseAssesmentDisplayTextarea" style={(Textarea === false) ? {display:'none'} : null}>
                            <textarea></textarea>
                        </div>
                    </div>                       
                </div>

            </div>
        </div>
    )
}
export default NurseAssesment;