import './PrintRegistrationCard.css';
import {FaTimes,FaUserAlt,FaFileDownload,FaFilePdf,FaPrint } from "react-icons/fa";
import printJS from 'print-js';
import React from 'react';
const PrintRegistrationCard = ({RegistrationCard,togglePrintRegistrationCard}) => {
  const handlePrint = () => {
    printJS({
      printable: 'printableArea',
      type: 'html',
      css: ['./PrintRegistrationCard.css']
    });
  }
    return((RegistrationCard === true) ? (
        <div>
            <div className="PrintRegistrationCardOverlayer" onClick={togglePrintRegistrationCard}>

            </div>
            <div className="PrintRegistrationCardContainer">
                <div className="PrintRegistrationCardContainerHeader">
                    <span>Patient Information</span>
                    <div className="ClosePrintRegistrationCardContainer">
                        <FaTimes className='ClosePrintRegistrationCardPatient' onClick={togglePrintRegistrationCard}/>
                    </div>
                </div>
                <div className="PrintRegistrationCardContainerBody">
                    <div className="PrintRegistrationCardContainerBodyInner">
                        <div className="PrintRegistrationCardContainerBodyInnerHeader">
                            <span>PrintopdCard</span>
                            <span>1/1</span>
                            <span className='SpanPrintIconContainer'>
                                <FaFilePdf className='SpanPrintIconContainerIcons'/>
                                <FaFileDownload className='SpanPrintIconContainerIcons'/>
                                <FaPrint className='SpanPrintIconContainerIcons' onClick={handlePrint}/>
                            </span>
                        </div>
                        <div className="PrintRegistrationCardContainerBodyInnerBody">
                            <div className="ActualRegistrationCard">
                                <div className="ActualRegistrationCardHeader">
                                    <span>Registation OPD card</span>
                                </div>
                                <div className="ActualRegistrationCardBody" id="printableArea">
                                    <div className="ActualRegistrationCardBodyCol CardOne">
                                        <FaUserAlt className='ActualRegistrationCardBodyColIcon'/>
                                    </div>
                                    <div className="ActualRegistrationCardBodyCol">
                                        <div className="CardDescription">
                                            <span>Name</span>
                                        </div>
                                        <div className="CardDescription">
                                            <span style={{fontSize:'9px', fontWeight:'500'}}>Mberere Mbio Peter</span>
                                        </div>
                                        <div className="CardDescription">
                                            <span>Reg. No</span>
                                        </div>
                                        <div className="CardDescription">
                                            <span style={{fontSize:'9px', fontWeight:'500'}}>PA106/G/14448/21</span>
                                        </div>
                                        <div className="CardDescription">
                                            <span>Birth Date</span>
                                        </div>  
                                        <div className="CardDescription">
                                            <span style={{fontSize:'9px', fontWeight:'500'}}>11/09/2001</span>
                                        </div>                                                                          
                                        <div className="CardDescription">
                                            <span>Gender</span>
                                        </div>  
                                        <div className="CardDescription">
                                            <span style={{fontSize:'9px', fontWeight:'500'}}>Male</span>
                                        </div>                                                                          
                                        <div className="CardDescription">
                                            <span>Contact No.</span>
                                        </div>  
                                        <div className="CardDescription">
                                            <span style={{fontSize:'9px', fontWeight:'500'}}>0759595268</span>
                                        </div>                                                                          
                                    </div>                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null)
}
export default PrintRegistrationCard;