import './PaymentInvoice.css';
import {FaTimes } from "react-icons/fa";
import { FaRegCalendarPlus,FaVectorSquare,FaUserGear } from "react-icons/fa6";
import hospital from '../../../../images/hospital.png';
const PaymentInvoice = ({paymentInvoice,togglePaymentInvoice}) => {
    return((paymentInvoice === true) ? (
        <div>
           <div className="PaymentInvoiceOverlayer" onClick={togglePaymentInvoice}></div> 
            <div className="PaymentInvoiceContainer">
                <div className="PaymentInvoiceContainerHeader">
                    <span>Report</span>
                    <div className="ClosePaymentInvoiceContainerHeader">
                        <FaTimes className='ClosePaymentInvoiceContainerHeaderIcon' onClick={togglePaymentInvoice}/>
                    </div>
                </div>
                <div className="PaymentInvoiceContainerBody">
                    <div className="PaymentInvoiceContainerBodyInner">
                        <div className="PaymentInvoiceContainerBodyInnerHeader">
                            <span>OpdBillRecept</span>
                            <span>1/1</span>
                            <span className='SpanPrintIconContainer'>
                                <FaUserGear className='SpanPrintIconContainerIcons'/>
                                <FaRegCalendarPlus className='SpanPrintIconContainerIcons'/>
                                <FaVectorSquare className='SpanPrintIconContainerIcons'/>
                            </span>
                        </div>
                       <div className="PaymentInvoiceContainerBodyInnerMainContentContainer">
                            <div className="PaymentInvoiceContainerBodyInnerMainContent">
                                 <div className="PaymentInvoiceContainerBodyInnerMainContentHeadingSection">
                                    <div className="PaymentInvoiceContainerBodyInnerMainContentHeadingSectionMain">
                                        <img src={hospital} alt="" />
                                        <span>TRICIQ LIMITTED HOSPITAL</span>
                                    </div>
                                    <div className="PaymentInvoiceContainerBodyInnerMainContentHeadingSectionSubMain">
                                        <span>KENYA HEALTH SERVICES</span>
                                    </div>
                                    <div className="PaymentInvoiceContainerBodyInnerMainContentHeadingSectionSubMain">
                                        <span>P.O.BOX 123 NAIROBI</span>
                                    </div>
                                    <div className="PaymentInvoiceContainerBodyInnerMainContentHeadingSectionSubMain">
                                        <span>Recept No: 123</span>
                                    </div>
                                    <div className="PaymentInvoiceContainerBodyInnerMainContentHeadingSectionSubMain">
                                        <span>eMAIL:</span>
                                    </div>
                                    <div className='InvoiceHeaderBorder' style={{width:'100%',height:'40px',display:'flex',alignItems:'flex-end',justifyContent:'center', fontWeight:'bold',fontSize:'12px'}}>
                                        <span>Invoice</span>
                                    </div>
                                 </div>
                                 <div className="PaymentInvoiceContainerBodyInnerMainContentUserDetails">
                                    <div className="PaymentInvoiceContainerBodyInnerMainContentUserDetailsCol">
                                        <div className="PaymentInvoiceContainerBodyInnerMainContentUserDetailsColControl">
                                            <span className='InvoiceLabel'>Reg. No:</span>
                                            <span className='InvoiceValue'>: PA106/G/14448/21</span>
                                        </div>
                                        <div className="PaymentInvoiceContainerBodyInnerMainContentUserDetailsColControl">
                                            <span className='InvoiceLabel'>Patient Name</span>
                                            <span className='InvoiceValue'>: Mberere Mbio Peter</span>
                                        </div>
                                        <div className="PaymentInvoiceContainerBodyInnerMainContentUserDetailsColControl">
                                            <span className='InvoiceLabel'>Mobile</span>
                                            <span className='InvoiceValue'>: 0759595268</span>
                                        </div>
                                        <div className="PaymentInvoiceContainerBodyInnerMainContentUserDetailsColControl">
                                            <span className='InvoiceLabel'>Address</span>
                                            <span className='InvoiceValue'>: 723892</span>
                                        </div>
                                        <div className="PaymentInvoiceContainerBodyInnerMainContentUserDetailsColControl">
                                            <span className='InvoiceLabel'>Patient type</span>
                                            <span className='InvoiceValue'>: Private cash</span>
                                        </div>
                                    </div>
                                    <div className="PaymentInvoiceContainerBodyInnerMainContentUserDetailsCol">
                                        <div className="PaymentInvoiceContainerBodyInnerMainContentUserDetailsColControl">
                                            <span className='InvoiceLabel'>Bill Number</span>
                                            <span className='InvoiceValue'>: 378</span>
                                        </div>
                                        <div className="PaymentInvoiceContainerBodyInnerMainContentUserDetailsColControl">
                                            <span className='InvoiceLabel'>Visit Date</span>
                                            <span className='InvoiceValue'>: 02/10/2023</span>
                                        </div>
                                        <div className="PaymentInvoiceContainerBodyInnerMainContentUserDetailsColControl">
                                            <span className='InvoiceLabel'>Visit Number</span>
                                            <span className='InvoiceValue'>: 326</span>
                                        </div>
                                        <div className="PaymentInvoiceContainerBodyInnerMainContentUserDetailsColControl">
                                            <span className='InvoiceLabel'>Visit Time</span>
                                            <span className='InvoiceValue'>: 11:20 am</span>
                                        </div>
                                        <div className="PaymentInvoiceContainerBodyInnerMainContentUserDetailsColControl">
                                            <span className='InvoiceLabel'>Resident</span>
                                            <span className='InvoiceValue'>: Nairobi</span>
                                        </div>
                                    </div>

                                 </div>
                                <div className="PaymentInvoiceContainerBodyInnerMainContentBill">
                                        <div className="PaymentInvoiceColOne">
                                            <span style={{fontSize:'12px',fontWeight:'bold'}}>SN</span>
                                        </div>
                                        <div className="PaymentInvoiceColTwo">
                                            <span style={{fontSize:'12px',fontWeight:'bold'}}>Description</span>
                                        </div>
                                        <div className="PaymentInvoiceColThree">
                                            <span style={{fontSize:'12px',fontWeight:'bold'}}>Rate</span>
                                        </div>
                                        <div className="PaymentInvoiceColFour">
                                            <span style={{fontSize:'12px',fontWeight:'bold'}}>Unit</span>
                                        </div>
                                        <div className="PaymentInvoiceColFive">
                                            <span style={{fontSize:'12px',fontWeight:'bold'}}>Discount</span>
                                        </div>
                                        <div className="PaymentInvoiceColSix">
                                            <span style={{fontSize:'12px',fontWeight:'bold'}}>Amaunt</span>
                                        </div>
                                </div>
                                <div className="PaymentInvoiceContainerBodyInnerMainContentBillSubheader">
                                    <span>CONSUMABLE</span>
                                </div>
                                <div className="PaymentInvoiceContainerBodyInnerMainContentBill" style={{borderBottom:'none'}}>
                                        <div className="PaymentInvoiceColOne">
                                            <span style={{fontSize:'12px'}}>1</span>
                                        </div>
                                        <div className="PaymentInvoiceColTwo">
                                            <span style={{fontSize:'12px'}}>100</span>
                                        </div>
                                        <div className="PaymentInvoiceColThree">
                                            <span style={{fontSize:'12px'}}>100</span>
                                        </div>
                                        <div className="PaymentInvoiceColFour">
                                            <span style={{fontSize:'12px'}}>100</span>
                                        </div>
                                        <div className="PaymentInvoiceColFive">
                                            <span style={{fontSize:'12px'}}>100</span>
                                        </div>
                                        <div className="PaymentInvoiceColSix">
                                            <span style={{fontSize:'12px'}}>100</span>
                                        </div>
                                </div>
                                <div className="PaymentInvoiceContainerBodyInnerMainContentBillSubheader">
                                    <span>CONSULTATION</span>
                                </div>
                                <div className="PaymentInvoiceContainerBodyInnerMainContentBill" style={{borderBottom:'none'}}>
                                        <div className="PaymentInvoiceColOne">
                                            <span style={{fontSize:'12px'}}>2</span>
                                        </div>
                                        <div className="PaymentInvoiceColTwo">
                                            <span style={{fontSize:'12px'}}>100</span>
                                        </div>
                                        <div className="PaymentInvoiceColThree">
                                            <span style={{fontSize:'12px'}}>100</span>
                                        </div>
                                        <div className="PaymentInvoiceColFour">
                                            <span style={{fontSize:'12px'}}>100</span>
                                        </div>
                                        <div className="PaymentInvoiceColFive">
                                            <span style={{fontSize:'12px'}}>100</span>
                                        </div>
                                        <div className="PaymentInvoiceColSix">
                                            <span style={{fontSize:'12px'}}>100</span>
                                        </div>
                                </div>
                                <div className="PaymentInvoiceContainerBodyInnerMainContentBillSubheader">
                                    <span>OTHER CHANGES</span>
                                </div>
                                <div className="PaymentInvoiceContainerBodyInnerMainContentBill" >
                                        <div className="PaymentInvoiceColOne">
                                            <span style={{fontSize:'12px'}}>3</span>
                                        </div>
                                        <div className="PaymentInvoiceColTwo">
                                            <span style={{fontSize:'12px'}}>100</span>
                                        </div>
                                        <div className="PaymentInvoiceColThree">
                                            <span style={{fontSize:'12px'}}>100</span>
                                        </div>
                                        <div className="PaymentInvoiceColFour">
                                            <span style={{fontSize:'12px'}}>100</span>
                                        </div>
                                        <div className="PaymentInvoiceColFive">
                                            <span style={{fontSize:'12px'}}>100</span>
                                        </div>
                                        <div className="PaymentInvoiceColSix">
                                            <span style={{fontSize:'12px'}}>100</span>
                                        </div>
                                </div>
                                <div className="PaymentInvoiceContainerBodyInnerMainContentBillSubTotal" style={{borderBottom:'1px solid grey'}}>
                                    <div className="paymentTableSubTotal">
                                        <span>300</span>
                                    </div>
                                    <div className="paymentTableSubTotal">
                                        <span>300</span>
                                    </div>
                                </div>
                                <div className="PaymentInvoiceContainerBodyInnerMainContentBillSubTotal" style={{borderBottom:'1px solid grey'}}>
                                    <div style={{width:'25%',display:'flex'}}>
                                        <div style={{width:'70%'}}>
                                            <span style={{fontSize:'11px',fontWeight:'bold'}}>Total Paid</span>
                                        </div>
                                        <div style={{width:'75%'}}>
                                            <span style={{fontSize:'11px',fontWeight:'bold'}}>: 300</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="PaymentInvoiceContainerBodyInnerMainContentBillSubTotal" style={{borderBottom:'1px solid grey'}}>
                                    <div style={{width:'25%',display:'flex'}}>
                                        <div style={{width:'70%'}}>
                                            <span style={{fontSize:'11px',fontWeight:'bold'}}>Total Bal</span>
                                        </div>
                                        <div style={{width:'75%'}}>
                                            <span style={{fontSize:'11px',fontWeight:'bold'}}>: 000</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="PaymentInvoiceContainerBodyInnerMainContentBillInwords">
                                    <span style={{fontWeight:'bold',paddingRight:'10px'}}>Amaunt in words:</span>
                                    <span style={{fontWeight:'500',paddingRight:'10px'}}>  Three Hundrend Kenya Shillings</span>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    ):null)
}
export default PaymentInvoice;