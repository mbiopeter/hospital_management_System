import './PatientNavigation.css';
import { useState } from 'react';
import {FaCheckDouble,FaSave} from "react-icons/fa";
import PrintRegistrationCard from './PrintRegistrationCard';
import OutPatientVisit from './OutPatientVisit';
import InPatientVisit from './InPatientVisit';
const PatientNavigation = ({PatientNav}) => {
    const [RegistrationCard,setRegistrationCard] = useState(false);
    const togglePrintRegistrationCard = () => {
        setRegistrationCard(!RegistrationCard);
    }
    const [OutPatientVisitState,SetOutPatientVisitState] = useState(false);
    const toggleOutPatientVist = () => {
        SetOutPatientVisitState(!OutPatientVisitState);
    }
    const [InPatientVisitState,SetInPatientVisitState] = useState(false);
    const toggleInPatientVist = () => {
        SetInPatientVisitState(!InPatientVisitState);
    }
    return((PatientNav === true) ? (
        <div className="PatientNavigationContainer">
            <InPatientVisit InPatientVisitState = {InPatientVisitState} toggleInPatientVist = {toggleInPatientVist}/>
            <OutPatientVisit OutPatientVisitState = {OutPatientVisitState} toggleOutPatientVist = {toggleOutPatientVist}/>
            <PrintRegistrationCard RegistrationCard = {RegistrationCard} togglePrintRegistrationCard = {togglePrintRegistrationCard}/>
            <div className="NavigationListContainer" onClick={toggleOutPatientVist}>
                <FaCheckDouble className='PatientNavigationIcons'/>
                <span >Out-patient Visit</span>
            </div>
            <div className="NavigationListContainer" onClick={togglePrintRegistrationCard}>
                <FaSave className='PatientNavigationIcons'/>
                <span >Patient Registration Card</span>
            </div>
            <div className="NavigationListContainer" onClick={toggleInPatientVist}>
                <FaSave className='PatientNavigationIcons'/>
                <span >In-Patient Visit</span>
            </div>
        </div>
    ): null)
}
export default PatientNavigation;