import '../ClinicalOthers.css';
import './Prescription.css';
import {FaTimes,FaSave} from "react-icons/fa";
import PatientClinicalManagement from './patientClinicalManagementNav';
import RightOtherNav from './RightOtherNav';
import CustomInput from './customes/SelectInput';
import $ from 'jquery';
import { useEffect } from 'react';
const Prescription = ({expand}) => {
        useEffect(() => {
        $('.RemovePrescriptionIcon').click(function (){
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
                        <div className="PrescriptionContainer">
                            <div className="PrescriptionContainerHeader">
                                <span>Prescription Medicine</span>
                                <div className="PrescriptionIconContainer">
                                    <FaSave className='PrescriptionIcon'/>
                                </div>
                            </div>
                            <div className="PrescriptionContainerBody">
                                 <div className="PrescriptionContainerBodyColFormControl" style={{width:'100%',marginRight:'5%'}}>
                                        <label htmlFor="Medicine">Medicine</label>
                                        <CustomInput />
                                </div>
                                 <div className="PrescriptionContainerBodyColFormControl" style={{width:'100%',marginRight:'5%'}}>
                                        <label htmlFor="Instructions">Instructions</label>
                                        <input type="text" id='Instructions' style={{width:'76.5%'}} />
                                </div>
                                <div className="PrescriptionContainerBodyCol">
                                    <div className="PrescriptionContainerBodyColFormControl">
                                        <label htmlFor="Dosage">Dosage</label>
                                        <input type="text" id='Dosage' />
                                    </div>
                                    <div className="PrescriptionContainerBodyColFormControl">
                                        <label htmlFor="Days">No. of Days</label>
                                        <input type="text" id='Days' />
                                    </div>
                                    <div className="PrescriptionContainerBodyColFormControl">
                                        <label htmlFor="Route">Route</label>
                                        <input type="text" id='Route' />
                                    </div>
                                </div>
                                <div className="PrescriptionContainerBodyCol" style={{marginLeft:'5%'}}>
                                    <div className="PrescriptionContainerBodyColFormControl">
                                        <label htmlFor="Medicine">Frequency</label>
                                        <input type="text" id='medicine' />
                                    </div>
                                    <div className="PrescriptionContainerBodyColFormControl">
                                        <label htmlFor="Medicine">Food Relation</label>
                                        <input type="text" id='medicine' />
                                    </div>
                                    <div className="PrescriptionContainerBodyColFormControl">
                                        <label htmlFor="Quantity">Quantity</label>
                                        <input type="text" id='Quantity' />
                                    </div>
                                </div>
                            </div>
                            <div className="PrescriptionContainerDisplay">
                                <table>
                                    <thead>
                                        <tr>
                                            <td>SN</td>
                                            <td>Medicine</td>
                                            <td>Instructions</td>
                                            <td>Dasage</td>
                                            <td>Frequency</td>
                                            <td>No. of Days</td>
                                            <td>Food Relation</td>
                                            <td>Route</td>
                                            <td>Quantity</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>SN</td>
                                            <td>Medicine</td>
                                            <td>Instructions</td>
                                            <td>Dasage</td>
                                            <td>Frequency</td>
                                            <td>No. of Days</td>
                                            <td>Food Relation</td>
                                            <td>Route</td>
                                            <td>Quantity</td>
                                            <td>
                                                <FaTimes className='RemovePrescriptionIcon'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SN</td>
                                            <td>Medicine</td>
                                            <td>Instructions</td>
                                            <td>Dasage</td>
                                            <td>Frequency</td>
                                            <td>No. of Days</td>
                                            <td>Food Relation</td>
                                            <td>Route</td>
                                            <td>Quantity</td>
                                            <td>
                                                <FaTimes className='RemovePrescriptionIcon'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SN</td>
                                            <td>Medicine</td>
                                            <td>Instructions</td>
                                            <td>Dasage</td>
                                            <td>Frequency</td>
                                            <td>No. of Days</td>
                                            <td>Food Relation</td>
                                            <td>Route</td>
                                            <td>Quantity</td>
                                            <td>
                                                <FaTimes className='RemovePrescriptionIcon'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SN</td>
                                            <td>Medicine</td>
                                            <td>Instructions</td>
                                            <td>Dasage</td>
                                            <td>Frequency</td>
                                            <td>No. of Days</td>
                                            <td>Food Relation</td>
                                            <td>Route</td>
                                            <td>Quantity</td>
                                            <td>
                                                <FaTimes className='RemovePrescriptionIcon'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SN</td>
                                            <td>Medicine</td>
                                            <td>Instructions</td>
                                            <td>Dasage</td>
                                            <td>Frequency</td>
                                            <td>No. of Days</td>
                                            <td>Food Relation</td>
                                            <td>Route</td>
                                            <td>Quantity</td>
                                            <td>
                                                <FaTimes className='RemovePrescriptionIcon'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SN</td>
                                            <td>Medicine</td>
                                            <td>Instructions</td>
                                            <td>Dasage</td>
                                            <td>Frequency</td>
                                            <td>No. of Days</td>
                                            <td>Food Relation</td>
                                            <td>Route</td>
                                            <td>Quantity</td>
                                            <td>
                                                <FaTimes className='RemovePrescriptionIcon'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SN</td>
                                            <td>Medicine</td>
                                            <td>Instructions</td>
                                            <td>Dasage</td>
                                            <td>Frequency</td>
                                            <td>No. of Days</td>
                                            <td>Food Relation</td>
                                            <td>Route</td>
                                            <td>Quantity</td>
                                            <td>
                                                <FaTimes className='RemovePrescriptionIcon'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SN</td>
                                            <td>Medicine</td>
                                            <td>Instructions</td>
                                            <td>Dasage</td>
                                            <td>Frequency</td>
                                            <td>No. of Days</td>
                                            <td>Food Relation</td>
                                            <td>Route</td>
                                            <td>Quantity</td>
                                            <td>
                                                <FaTimes className='RemovePrescriptionIcon'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SN</td>
                                            <td>Medicine</td>
                                            <td>Instructions</td>
                                            <td>Dasage</td>
                                            <td>Frequency</td>
                                            <td>No. of Days</td>
                                            <td>Food Relation</td>
                                            <td>Route</td>
                                            <td>Quantity</td>
                                            <td>
                                                <FaTimes className='RemovePrescriptionIcon'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SN</td>
                                            <td>Medicine</td>
                                            <td>Instructions</td>
                                            <td>Dasage</td>
                                            <td>Frequency</td>
                                            <td>No. of Days</td>
                                            <td>Food Relation</td>
                                            <td>Route</td>
                                            <td>Quantity</td>
                                            <td>
                                                <FaTimes className='RemovePrescriptionIcon'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SN</td>
                                            <td>Medicine</td>
                                            <td>Instructions</td>
                                            <td>Dasage</td>
                                            <td>Frequency</td>
                                            <td>No. of Days</td>
                                            <td>Food Relation</td>
                                            <td>Route</td>
                                            <td>Quantity</td>
                                            <td>
                                                <FaTimes className='RemovePrescriptionIcon'/>
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
export default Prescription;