import { useState, useEffect } from 'react';
import './OncounterSale.css';
import SearchMedicationPatient from '../../modals/InventoryAndPurchase/SearchPatient';
import {FaSearch} from "react-icons/fa";
import {FaTimes,FaSave} from "react-icons/fa";
import SelectMedicine from './inputs/SelectMedicine';
import $ from 'jquery';
export const OncounterSale = () => {
    const [SaleType,SetSaleType] = useState('');
    const HandleSaleType = (e) => {
        var Type = e.target.value;
        SetSaleType(Type);
    }
    const [SearchPatientPop,SetSearchPatientPop] = useState(false);
    const toggleSearchPatient = () => {
        SetSearchPatientPop(!SearchPatientPop);
    }
    useEffect(() => {
        $('.RemoveMedication').click(function (){
            const row = $(this).closest('tr');
            row.addClass('strikeThrogh');
            row.fadeOut(1000);
        });
    }, []);
    return(
        <div className="OncounterSaleContainer">
            <SearchMedicationPatient SearchPatientPop={SearchPatientPop} toggleSearchPatient= {toggleSearchPatient} />
            <div className="OncounterSaleContainerHeader">
                <span style={(SaleType === '') ? {display:'block'}: {display:'none'}}>Patient Medication</span>
                <span style={(SaleType === 'Direct') ? {display:'block'}: {display:'none'}}>On Counter Sale</span>
                <span style={(SaleType === 'Issue') ? {display:'block'}: {display:'none'}}>Despence Medication</span>
                <div className="OncounterSaleContainerHeaderRight">
                    <div className="SaveMedicationIconContainer" style={{marginRight:'10px'}}>
                        <FaSave className='SaveMedicationIcon'/>
                    </div>
                    <div className="SaveMedicationIconContainer">
                        <span className='SaveMedicationIcon'>+</span>
                    </div>
                </div>
            </div>

            <div className="OncounterSaleContainerMiddle">
                <div className="OncounterSaleContainerMiddleCol">
                    <div className="OncounterSaleContainerMiddleColFormControl">
                        <label htmlFor="IssueSale">Issue Sale</label>
                        <select id='' onChange={HandleSaleType}>
                            <option value="" selected>select</option>
                            <option value="Issue">Issue</option>
                            <option value="Direct">Direct Sale</option>
                        </select>
                    </div>
                    <div className="OncounterSaleContainerMiddleColFormControl" style={(SaleType === 'Direct') ? {display:'none'}: null}>
                        <label htmlFor="IssueSale">Reg No</label>
                        <div className="controlSearch">
                            <input  type="text"/>
                            <div className="OncounterSaleContainerMiddleColFormControlIconContainer" onClick={toggleSearchPatient}>
                                <FaSearch className='OncounterSaleContainerMiddleColFormControlIcon' />
                            </div>
                        </div>
                    </div>
                    <div className="OncounterSaleContainerMiddleColFormControl">
                        <label htmlFor="IssueSale">Issue Date</label>
                        <input type="date" />
                    </div>
                </div>
                <div className="OncounterSaleContainerMiddleCol">
                    <div className="OncounterSaleContainerMiddleColFormControl">
                        <label htmlFor="IssueSale">Issue No</label>
                        <input type="text" />
                    </div>
                    <div className="OncounterSaleContainerMiddleColFormControl" style={(SaleType === 'Direct') ? {display:'none'}: null}>
                        <label htmlFor="Name">Name</label>
                        <input type="text" />
                    </div>
                    <div className="OncounterSaleContainerMiddleColFormControl">
                        <label htmlFor="IssueSale">Order</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="OncounterSaleContainerMiddleCol">
                    <div className="OncounterSaleContainerMiddleColFormControl">
                        <label htmlFor="IssueSale">Payer</label>
                        <input type="text" />
                    </div>
                    <div className="OncounterSaleContainerMiddleColFormControl" style={(SaleType === 'Direct') ? {display:'none'}: null}>
                        <label htmlFor="IssueSale">Age</label>
                        <input type="text" />
                    </div>
                    <div className="OncounterSaleContainerMiddleColFormControl">
                        <label htmlFor="IssueSale">Doctor</label>
                        <input type="text" />
                    </div>
                </div>
            </div>

            <div className="OncounterSaleContainerMedication">
                <div className="OncounterSaleContainerMedicationItem">
                    <label htmlFor="Medicine">Medicine</label>
                    <SelectMedicine />
                </div>
                <div className="OncounterSaleContainerMedicationItem">
                    <label htmlFor="Medicine">Description</label>
                    <input type="text" />
                </div>
                <div className="OncounterSaleContainerMedicationCols">
                    <div className="OncounterSaleContainerMedicationColsFormControl">
                        <label htmlFor="">Dosage</label>
                        <input type="text" />
                    </div>
                    <div className="OncounterSaleContainerMedicationColsFormControl">
                        <label htmlFor="">No. of Days</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="OncounterSaleContainerMedicationCols">
                    <div className="OncounterSaleContainerMedicationColsFormControl">
                        <label htmlFor="">Route</label>
                        <input type="text" />
                    </div>
                    <div className="OncounterSaleContainerMedicationColsFormControl">
                        <label htmlFor="">Frequecy</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="OncounterSaleContainerMedicationCols">
                    <div className="OncounterSaleContainerMedicationColsFormControl">
                        <label htmlFor="">Food Relation</label>
                        <input type="text" />
                    </div>
                    <div className="OncounterSaleContainerMedicationColsFormControl">
                        <label htmlFor="">Quantity</label>
                        <input type="text" />
                    </div>
                </div>
            </div>

            <div className="OncounterSaleContainerTable">
                <table>
                    <thead>
                        <tr>
                            <td>Issue No</td>
                            <td>Issue Date</td>
                            <td>Order</td>
                            <td>Doctor</td>
                            <td>Medicine</td>
                            <td>Dosage</td>
                            <td>Frequency</td>
                            <td>Duration</td>
                            <td>Remove</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Issue No</td>
                            <td>Issue Date</td>
                            <td>Order</td>
                            <td>Doctor</td>
                            <td>Medicine</td>
                            <td>Dosage</td>
                            <td>Frequency</td>
                            <td>Duration</td>
                            <td>
                                <FaTimes className='RemoveMedication'/>
                            </td>
                        </tr>
                        <tr>
                            <td>Issue No</td>
                            <td>Issue Date</td>
                            <td>Order</td>
                            <td>Doctor</td>
                            <td>Medicine</td>
                            <td>Dosage</td>
                            <td>Frequency</td>
                            <td>Duration</td>
                            <td>
                                <FaTimes className='RemoveMedication'/>
                            </td>
                        </tr>
                        <tr>
                            <td>Issue No</td>
                            <td>Issue Date</td>
                            <td>Order</td>
                            <td>Doctor</td>
                            <td>Medicine</td>
                            <td>Dosage</td>
                            <td>Frequency</td>
                            <td>Duration</td>
                            <td>
                                <FaTimes className='RemoveMedication'/>
                            </td>
                        </tr>
                        <tr>
                            <td>Issue No</td>
                            <td>Issue Date</td>
                            <td>Order</td>
                            <td>Doctor</td>
                            <td>Medicine</td>
                            <td>Dosage</td>
                            <td>Frequency</td>
                            <td>Duration</td>
                            <td>
                                <FaTimes className='RemoveMedication'/>
                            </td>
                        </tr>
                        <tr>
                            <td>Issue No</td>
                            <td>Issue Date</td>
                            <td>Order</td>
                            <td>Doctor</td>
                            <td>Medicine</td>
                            <td>Dosage</td>
                            <td>Frequency</td>
                            <td>Duration</td>
                            <td>
                                <FaTimes className='RemoveMedication'/>
                            </td>
                        </tr>
                        <tr>
                            <td>Issue No</td>
                            <td>Issue Date</td>
                            <td>Order</td>
                            <td>Doctor</td>
                            <td>Medicine</td>
                            <td>Dosage</td>
                            <td>Frequency</td>
                            <td>Duration</td>
                            <td>
                                <FaTimes className='RemoveMedication'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}