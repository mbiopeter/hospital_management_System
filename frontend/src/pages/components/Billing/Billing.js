import {FaSearch,FaTimes,FaSave,FaEllipsisV,FaCheckDouble} from "react-icons/fa";
import './Billing.css';
import { useState } from "react";
import PaymentCollection from "../modals/Billing/PaymentCollection";
import SearchBillingPatient from "../modals/Billing/SearchPatient";
const Billing = ({expand}) => {
    const [SearchPatientPop,SetSearchPatientPop] = useState(false);
    const toggleSearchPatient = () => {
        SetSearchPatientPop(!SearchPatientPop);
    }
    const [paymentCollectionModal,SetPaymentCollectionModal] = useState(false);
    const togglepaymentCollectionModal = () => {
        SetPaymentCollectionModal(!paymentCollectionModal);
    }
    return(
        <div className='BillingContainer'  style={(expand === false) ? {minWidth: '95%'} :null} >
            <SearchBillingPatient SearchPatientPop = {SearchPatientPop} toggleSearchPatient = {toggleSearchPatient} />
            <PaymentCollection paymentCollectionModal = {paymentCollectionModal} togglepaymentCollectionModal = {togglepaymentCollectionModal}/>
            <form>
                <div className="BillingContainerHeader">
                    <span>Out-Patient Billing</span>
                    <div className="BillingContainerHeaderIconContainer">
                        <div className="BillingContainerHeaderActualIconContainer">
                            <FaSave className="BillingHeaderIcon" onClick={togglepaymentCollectionModal}/>
                        </div>
                        <div className="BillingContainerHeaderActualIconContainer">
                            <FaCheckDouble className="BillingHeaderIcon"/>
                        </div>
                        <div className="BillingContainerHeaderActualIconContainer">
                            <FaEllipsisV className="BillingHeaderIcon"/>
                        </div>
                    </div>
                </div>
                <div className="BillingInnerContainer">
                    <div className="BillingInnerContainerRowOne">
                        <div className="BillingInnerContainerRowOneCol">
                            <input type="text" placeholder="Reg. No"/>
                            <input type="text" placeholder="Visit Number" />
                            <div className="BillingSearchIconContainer">
                                <FaSearch className="BillingSearchIcon" onClick={toggleSearchPatient}/>
                            </div>
                        </div>
                        <div className="BillingInnerContainerRowOneCol">
                            <label htmlFor="visitnumber">Visit Number</label>
                            <select  id="visitnumber">
                                <option value="" selected>Select</option>
                                <option value="">181. General OPD</option>
                            </select>
                        </div>
                        <div className="BillingInnerContainerRowOneCol peddingOrders">
                            <input type="text" value="Pedding Orders" style={{borderRadius:'2px', width:'34%',textAlign:'center',backgroundColor:'blue',cursor:'pointer',color:'#fff',border:'none',padding:'4px'}} readOnly/>
                        </div>
                    </div>
                    <div className="BillingInnerContainerRowTwo">

                        <div className="BillingInnerContainerRowTwoCol">
                            <div className="BillingInnerContainerRowTwoColRow">
                                <span className="BillingInnerContainerRowTwoColRowHeader">Mberere Mbio Peter</span>
                            </div>
                            <div className="BillingInnerContainerRowTwoColRow">
                                <span className="BillingInnerContainerRowTwoColBody">
                                Male 22 Years, <b>Mobile No:</b> 0759595268, <b style={{color:'blue'}}>Outstanding:</b> 00.0
                                </span>
                            </div>
                        </div>
                        <div className="BillingInnerContainerRowTwoCol">
                            <div className="BillingInnerContainerRowTwoColRowHeaderTwo">
                                <span>
                                    <b>Payer:</b> PRIVATE CASH, <b>Sponser:</b> PRIVATE CASH
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="BillingInnerContainerRowThreeSave">
                        <div className="BillingSaveBtnContainer">
                            <FaSave className="BillingSaveBtnIcon"/>
                        </div>
                    </div>
                    <div className="BillingInnerContainerRowThree">
                        <table>
                            <thead>
                                <tr>
                                    <td>Service Name</td>
                                    <td>Doctor</td>
                                    <td>Amaunt</td>
                                    <td>Discount</td>
                                    <td>Unit</td>
                                    <td>Net Amaunt</td>
                                    <td>Company Amaunt</td>
                                    <td>Patient Amaunt</td>
                                    <td>Received Amaunt</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>CONSULTATION</td>
                                    <td>
                                        <input type="text" value="GENERAL OPD" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                       <FaTimes  className="removeRowIcon"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>CONSULTATION</td>
                                    <td>
                                        <input type="text" value="GENERAL OPD" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                       <FaTimes  className="removeRowIcon"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>CONSULTATION</td>
                                    <td>
                                        <input type="text" value="GENERAL OPD" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                       <FaTimes  className="removeRowIcon"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>CONSULTATION</td>
                                    <td>
                                        <input type="text" value="GENERAL OPD" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                       <FaTimes  className="removeRowIcon"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>CONSULTATION</td>
                                    <td>
                                        <input type="text" value="GENERAL OPD" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                       <FaTimes  className="removeRowIcon"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>CONSULTATION</td>
                                    <td>
                                        <input type="text" value="GENERAL OPD" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                       <FaTimes  className="removeRowIcon"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>CONSULTATION</td>
                                    <td>
                                        <input type="text" value="GENERAL OPD" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                       <FaTimes  className="removeRowIcon"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>CONSULTATION</td>
                                    <td>
                                        <input type="text" value="GENERAL OPD" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                       <FaTimes  className="removeRowIcon"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>CONSULTATION</td>
                                    <td>
                                        <input type="text" value="GENERAL OPD" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                       <FaTimes  className="removeRowIcon"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>CONSULTATION</td>
                                    <td>
                                        <input type="text" value="GENERAL OPD" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                       <FaTimes  className="removeRowIcon"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>CONSULTATION</td>
                                    <td>
                                        <input type="text" value="GENERAL OPD" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                        <input type="text" value="7.00" />
                                    </td>
                                    <td>
                                       <FaTimes  className="removeRowIcon"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="BillingInnerContainerRowFour">
                        <div className="BillingInnerContainerRowFourInputContainer">
                            <label htmlFor="TotalAmaunt">Total Amt.</label>
                            <input type="text"value="20.00" id="TotalAmaunt" readOnly/>
                        </div>
                        <div className="BillingInnerContainerRowFourInputContainer">
                            <label htmlFor="PatientPayeble">Patient Payable</label>
                            <input type="text"value="20.00" id="PatientPayeble" readOnly/>
                        </div>
                        <div className="BillingInnerContainerRowFourInputContainer">
                            <label htmlFor="advAmaunt">Advanced Amt.</label>
                            <input type="text"value="20.00" id="advAmaunt" readOnly/>
                        </div>
                        <div className="BillingInnerContainerRowFourInputContainer">
                            <label htmlFor="ReceivedAmaunt">Received Amt.</label>
                            <input type="text"value="20.00" id="ReceivedAmaunt" readOnly/>
                        </div>
                        <div className="BillingInnerContainerRowFourInputContainer">
                            <label htmlFor="TotalBal">Total Bal.</label>
                            <input type="text"value="20.00" id="TotalBal" readOnly/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Billing;