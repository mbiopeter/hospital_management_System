import '../ClinicalOthers.css';
import './Procedure.css';
import {FaTimes,FaSave} from "react-icons/fa";
import $ from 'jquery';
import PatientClinicalManagement from './patientClinicalManagementNav';
import RightOtherNav from './RightOtherNav';
import { useEffect, useState } from 'react';
import ProcedureSelect from './customes/ProcedureSelect';
const Procedure = ({expand}) => {
    const [Textarea,SetTeatarea] = useState(true);
    const HandleProcedureDescription = () => {
        SetTeatarea(true);
    }
    useEffect(() => {
        $('.ProcedureContainerBodyDisplayRemoveIcon').click(function (){
            const row = $(this).closest('tr');
            row.addClass('strikeThrogh');
            row.fadeOut(1000);
        });
    }, []);
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
                    <div className="ProcedureContainer">
                        <div className="ProcedureContainerHeader">
                            <span>Investigation/Procedure</span>
                            <div className="ProcedureIconContainer">
                                <FaSave  className='ProcedureSaveIcon'/>
                            </div>
                        </div>
                        <div className="ProcedureContainerBodyContainer">
                            <label htmlFor="Procedure">Investigation/Procedure</label>
                            <ProcedureSelect />
                            <div className="ProcedureAddIconContainer">
                                <span>+</span>
                            </div>
                            <div className="ProcedureAddIconContainer" onclick={HandleProcedureDescription}>
                                <span >D</span>
                            </div>
                        </div>
                        <div className="ProcedureTextAreaContainer" style={(Textarea === false) ? {display:'none'}:null}>
                            <textarea></textarea>
                        </div>
                        <div className="ProcedureContainerBodyDisplay">
                            <table>
                                <thead>
                                    <tr>
                                        <td>SN</td>
                                        <td>Investigation/Procedure</td>
                                        <td>Result</td>
                                        <td>Status</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>SN</td>
                                        <td>Investigation/Procedure</td>
                                        <td>Result</td>
                                        <td>Status</td>
                                        <td>
                                            <FaTimes className='ProcedureContainerBodyDisplayRemoveIcon'/>
                                        </td>                                        
                                    </tr>
                                    <tr>
                                        <td>SN</td>
                                        <td>Investigation/Procedure</td>
                                        <td>Result</td>
                                        <td>Status</td>
                                        <td>
                                            <FaTimes className='ProcedureContainerBodyDisplayRemoveIcon'/>
                                        </td>                                        
                                    </tr>
                                    <tr>
                                        <td>SN</td>
                                        <td>Investigation/Procedure</td>
                                        <td>Result</td>
                                        <td>Status</td>
                                        <td>
                                            <FaTimes className='ProcedureContainerBodyDisplayRemoveIcon'/>
                                        </td>                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Procedure;