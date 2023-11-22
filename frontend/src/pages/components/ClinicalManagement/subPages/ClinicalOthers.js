import './ClinicalOthers.css';
import PatientClinicalManagement from './components/patientClinicalManagementNav';
import { Routes, Route,Outlet  } from 'react-router-dom';
import RightOtherNav from './components/RightOtherNav';
import NurseAssesment from './components/NurseAssesment';
const ClinicalOthers = ({expand}) => {
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

                </div>

            </div>
        </div>
    )
}
export default ClinicalOthers;