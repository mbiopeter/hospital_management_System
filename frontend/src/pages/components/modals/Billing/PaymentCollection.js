import {FaTimes,FaSave } from "react-icons/fa";
import './PaymentCollection.css';
import { useState } from "react";
import PaymentInvoice from "./PaymentInvoice";

const PaymentCollection = ({paymentCollectionModal,togglepaymentCollectionModal}) => {
    const [splitBill,setSplitBill] = useState(false);
    const togglesplitBill = () => {
        setSplitBill(!splitBill);
    }
    const [paymentInvoice,setPaymentInvoice] = useState(false);
    const togglePaymentInvoice = () => {
        setPaymentInvoice(!paymentInvoice);
    }
    return((paymentCollectionModal === true) ? (
        <div>
            <PaymentInvoice paymentInvoice = {paymentInvoice} togglePaymentInvoice = {togglePaymentInvoice}/>
            <div className="PaymentCollectionOverlayer" onClick={togglepaymentCollectionModal}>

            </div>
            <div className="paymentCollectionContainer">
                <div className="paymentCollectionContainerHeader">
                    <span>Payment Modes</span>
                    <div className="paymentCollectionClose" onClick={togglepaymentCollectionModal}>
                        <FaTimes className="paymentCollectionCloseIcon" />
                    </div>
                </div>
                <div className="paymentCollectionModeTableContainer">
                    <table>
                        <thead>
                            <tr>
                                <td>Mode Type</td>
                                <td>amaunt</td>
                                <td>Bank</td>
                                <td>Cheque/Card/DD No</td>
                                <td>Expiery</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="text" />
                                </td>
                                <td>
                                    <input type="text" />
                                </td>
                                <td>
                                    <select>
                                        <option value="" selected>Select</option>
                                        <option value="" selected>Equity</option>
                                        <option value="" selected>KCB</option>
                                        <option value="" selected>Family</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" />
                                </td>
                                <td>
                                    <input type="text" />
                                </td>
                                <td>
                                    <div className="plusContainer">
                                        <span>+</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="paymentSplitBillCollectionContainerSave">
                    <div className="toggleSplittedBillContainer">
                        <div className="toggleSplittedBillContainerIcon" onClick={togglesplitBill}>
                            <span style={(splitBill === true) ? {display:'none'}: null}>+</span>
                            <span style={(splitBill === false) ? {display:'none'}: null}>-</span>
                        </div>
                    </div>
                    <div className="SaveSplitedBillIconContainer">
                        <FaSave className="SaveSplitedBillIcon" onClick={togglePaymentInvoice}/>
                    </div>
                </div>
                <div className="DisplaySplittedBillContainer">
                    <table style={(splitBill === false) ? {display:'none'}: null}>
                        <thead>
                            <tr>
                                <td>Mode</td>
                                <td>Amaunt</td>
                                <td>Bank</td>
                                <td>Card No</td>
                                <td>Expiery</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cash</td>
                                <td>250.00</td>
                                <td>Euity</td>
                                <td>2578236</td>
                                <td></td>
                                <td>
                                    <FaTimes className="RemoveSplittedBill"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Cash</td>
                                <td>250.00</td>
                                <td>Euity</td>
                                <td>2578236</td>
                                <td></td>
                                <td>
                                    <FaTimes className="RemoveSplittedBill"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Cash</td>
                                <td>250.00</td>
                                <td>Euity</td>
                                <td>2578236</td>
                                <td></td>
                                <td>
                                    <FaTimes className="RemoveSplittedBill"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Cash</td>
                                <td>250.00</td>
                                <td>Euity</td>
                                <td>2578236</td>
                                <td></td>
                                <td>
                                    <FaTimes className="RemoveSplittedBill"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="paymentSplitInfoContainer">
                    <div className="paymentSplitInfoContainerCol">
                        <label htmlFor="">Total Billed</label>
                        <input type="text" value="20"  readOnly/>
                    </div>
                    <div className="paymentSplitInfoContainerCol">
                        <label htmlFor="">Total Paid</label>
                        <input type="text" value="20"  readOnly/>
                    </div>
                    <div className="paymentSplitInfoContainerCol">
                        <label htmlFor="">Total Balance</label>
                        <input type="text" value="20"  readOnly/>
                    </div>
                </div>
            </div>
        </div>
    ): null)
}
export default PaymentCollection;