import '../ClinicalOthers.css';
import './Advice.css';
import {FaTimes,FaSave} from "react-icons/fa";
import PatientClinicalManagement from './patientClinicalManagementNav';
import RightOtherNav from './RightOtherNav';
import { useState } from 'react';
const Advice = ({expand}) => {
    const [Emergency,SetEmergency] = useState(false);
    const [Complete,SetComplete] = useState(false);
    const [Admission,SetAdmission] = useState(false);
    const [MentalHealth,SetMentalHealth] = useState(false);
    const [Surgery,SetSurgery] = useState(false);
    const [Laboratory,SetLaboratory] = useState(false);
    const [Outside,SetOutside] = useState(false);

    const HandleEmergency = () => {
        SetEmergency(!Emergency);
        SetComplete(false);
        SetAdmission(false);
        SetMentalHealth(false);
        SetSurgery(false);
        SetLaboratory(false);
        SetOutside(false);
    }
    const HandleComplete = () => {
        SetEmergency(false);
        SetComplete(!Complete);
        SetAdmission(false);
        SetMentalHealth(false);
        SetSurgery(false);
        SetLaboratory(false);
        SetOutside(false);
    }
    const HandleAdmission = () => {
        SetEmergency(false);
        SetComplete(false);
        SetAdmission(!Admission);
        SetMentalHealth(false);
        SetSurgery(false);
        SetLaboratory(false);
        SetOutside(false);
    }
    const HandleMentalHealth= () => {
        SetEmergency(false);
        SetComplete(false);
        SetAdmission(false);
        SetMentalHealth(!MentalHealth);
        SetSurgery(false);
        SetLaboratory(false);
        SetOutside(false);
    }
    const HandleSurgery = () => {
        SetEmergency(false);
        SetComplete(false);
        SetAdmission(false);
        SetMentalHealth(false);
        SetSurgery(!Surgery);
        SetLaboratory(false);
        SetOutside(false);
    }
    const HandleLaboratory = () => {
        SetEmergency(false);
        SetComplete(false);
        SetAdmission(false);
        SetMentalHealth(false);
        SetSurgery(false);
        SetLaboratory(!Laboratory);
        SetOutside(false);
    }
    const HandleOutside = () => {
        SetEmergency(false);
        SetComplete(false);
        SetAdmission(false);
        SetMentalHealth(false);
        SetSurgery(false);
        SetLaboratory(false);
        SetOutside(!Outside);
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
                    <div className="AdviceContainer">
                        <div className="AdviceContainerHeader">
                            <span>Advice</span>
                            <div className="AdviceContainerHeaderIconContainer">
                                <FaSave className='AdviceContainerHeaderIcon'/>
                            </div>
                        </div>
                        <div className="AdviceContainerTextAreaContainer">
                            <textarea ></textarea>
                        </div>
                        <div className="AdviceContainerColsContainer">
                            <div className="AdviceContainerColOne">
                                <div className="AdviceContainerColOneHeader">
                                    <span>Visit Summary</span>
                                </div>
                                <div className="AdviceContainerColOneFormControl">
                                    <input type="checkbox" checked = {Emergency} id='Emergency' onClick={HandleEmergency}/>
                                    <div className="AdviceContainerColOneFormControlLabelContainer">
                                        <label  htmlFor="Emergency">Refer To Emergency</label>
                                    </div>
                                </div>
                                <div className="AdviceContainerColOneFormControl">
                                    <input onClick={HandleComplete} checked = {Complete} type="checkbox" id='Complete'/>
                                    <div className="AdviceContainerColOneFormControlLabelContainer">
                                        <label htmlFor="Complete">Visit Complete</label>
                                    </div>
                                </div>
                                <div className="AdviceContainerColOneFormControl">
                                    <input onClick={HandleAdmission} checked = {Admission} type="checkbox" id='Admission'/>
                                    <div className="AdviceContainerColOneFormControlLabelContainer">
                                        <label htmlFor="Admission">Refer To Admission</label>
                                    </div>
                                </div>
                                <div className="AdviceContainerColOneFormControl">
                                    <input onClick={HandleMentalHealth} checked = {MentalHealth} type="checkbox" id='MentalHealth'/>
                                    <div className="AdviceContainerColOneFormControlLabelContainer">
                                        <label htmlFor="MentalHealth">Refer To Mental Health</label>
                                    </div>
                                </div>
                                <div className="AdviceContainerColOneFormControl">
                                    <input onClick={HandleSurgery} checked={Surgery} type="checkbox" id='Surgery'/>
                                    <div className="AdviceContainerColOneFormControlLabelContainer">
                                        <label htmlFor="Surgery">Surgery Request</label>
                                    </div>
                                </div>
                                <div className="AdviceContainerColOneFormControl">
                                    <input onClick={HandleLaboratory} checked={Laboratory} type="checkbox" id='Laboratory'/>
                                    <div className="AdviceContainerColOneFormControlLabelContainer">
                                        <label htmlFor="Laboratory">Laboratory Request</label>
                                    </div>
                                </div>
                                <div className="AdviceContainerColOneFormControl">
                                    <input onClick={HandleOutside} checked={Outside} type="checkbox" id='OutsideHospital'/>
                                    <div className="AdviceContainerColOneFormControlLabelContainer">
                                        <label htmlFor="OutsideHospital">Refer To Outside Hospital</label>
                                    </div>
                                </div>
                            </div>
                            <div className="AdviceContainerColTwo">

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Advice;