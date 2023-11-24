import '../ClinicalOthers.css';
import './ComplainPresentation.css';
import PatientClinicalManagement from './patientClinicalManagementNav';
import RightOtherNav from './RightOtherNav';
import ComplainSelect from './customes/ComplainSelect';
const ComplainPresentation = ({expand}) => {
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
                        <div className="ComplainPresentationBody">
                            <div className="ComplainPresentationBodyHeader">
                                <span>Presenting Complain</span>
                            </div>
                            <div className="ComplainPresentationBodyDisplay">
                                <ComplainSelect />
                                <div className="ComplainPresentationAddIconContainer">
                                    <span>+</span>
                                </div>
                            </div>
                            <div className="ComplainPresentationBodyTextareaOneContainer">
                                <textarea readOnly value="Fever" ></textarea>
                            </div>
                            <div className="ComplainPresentationBodyHeader">
                                <span>Innitial Complain</span>
                            </div>
                            <div className="ComplainPresentationBodyTextareaOneContainer">
                                <textarea readOnly value="Headache" ></textarea>
                            </div>
                        </div>

                </div>

            </div>
        </div>
    )
}
export default ComplainPresentation;