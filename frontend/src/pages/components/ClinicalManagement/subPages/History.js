import './History.css';
import PatientClinicalManagement from './components/patientClinicalManagementNav';
import {FaSave} from "react-icons/fa";
const History = ({expand}) => {
    return(
        <div className='HistoryMainConatiner' style={(expand === false) ? {minWidth: '95%'} :null}>
            <div className="HistoryMainConatinerHeader">
                <span>History Examination</span>
                <div className="HistoryMainConatinerHeaderIconContainer">
                    <FaSave className='HistoryMainConatinerHeaderIconContainerIcon'/>
                </div>
            </div>
            <div className="HistoryMainConatinerInner">
                <PatientClinicalManagement/>
                <div className="HistoryMainConatinerInnerForm">
                    <div className="HistoryFormControl">
                        <div className="HistoryFormControlLabel">
                            <label htmlFor="History">History of presenting complain</label>
                        </div>
                        <div className="HistoryFormControlTextArea">
                            <textarea ></textarea>
                        </div>
                    </div>

                    <div className="HistoryFormControl">
                        <div className="HistoryFormControlLabel">
                            <label htmlFor="Systematiic">Systematic Enquery</label>
                        </div>
                        <div className="HistoryFormControlTextArea">
                            <textarea ></textarea>
                        </div>
                    </div>

                    <div className="HistoryFormControl">
                        <div className="HistoryFormControlLabel">
                            <label htmlFor="Physical">Physical Examination</label>
                        </div>
                        <div className="HistoryFormControlTextArea">
                            <textarea ></textarea>
                        </div>
                    </div>

                    <div className="HistoryFormControl">
                        <div className="HistoryFormControlLabel">
                            <label htmlFor="General">General Examination</label>
                        </div>
                        <div className="HistoryFormControlTextArea">
                            <textarea ></textarea>
                        </div>
                    </div>
                    <div className="HistoryFormControl">
                        <div className="HistoryFormControlLabel">
                            <label htmlFor="General">General Examination</label>
                        </div>
                        <div className="HistoryFormControlTextArea">
                            <textarea ></textarea>
                        </div>
                    </div>
                    <div className="HistoryFormControl">
                        <div className="HistoryFormControlLabel">
                            <label htmlFor="General">General Examination</label>
                        </div>
                        <div className="HistoryFormControlTextArea">
                            <textarea ></textarea>
                        </div>
                    </div>
                    <div className="HistoryFormControl">
                        <div className="HistoryFormControlLabel">
                            <label htmlFor="General">General Examination</label>
                        </div>
                        <div className="HistoryFormControlTextArea">
                            <textarea ></textarea>
                        </div>
                    </div>
                    <div className="HistoryFormControl">
                        <div className="HistoryFormControlLabel">
                            <label htmlFor="General">General Examination</label>
                        </div>
                        <div className="HistoryFormControlTextArea">
                            <textarea ></textarea>
                        </div>
                    </div>
                    <div className="HistoryFormControl">
                        <div className="HistoryFormControlLabel">
                            <label htmlFor="General">General Examination</label>
                        </div>
                        <div className="HistoryFormControlTextArea">
                            <textarea ></textarea>
                        </div>
                    </div>
                    <div className="HistoryFormControl">
                        <div className="HistoryFormControlLabel">
                            <label htmlFor="General">General Examination</label>
                        </div>
                        <div className="HistoryFormControlTextArea">
                            <textarea ></textarea>
                        </div>
                    </div>
                    <div className="HistoryFormControl">
                        <div className="HistoryFormControlLabel">
                            <label htmlFor="General">General Examination</label>
                        </div>
                        <div className="HistoryFormControlTextArea">
                            <textarea ></textarea>
                        </div>
                    </div>
                    <div className="HistoryFormControl">
                        <div className="HistoryFormControlLabel">
                            <label htmlFor="General">General Examination</label>
                        </div>
                        <div className="HistoryFormControlTextArea">
                            <textarea ></textarea>
                        </div>
                    </div>
                    <div className="HistoryFormControl">
                        <div className="HistoryFormControlLabel">
                            <label htmlFor="General">General Examination</label>
                        </div>
                        <div className="HistoryFormControlTextArea">
                            <textarea ></textarea>
                        </div>
                    </div>
                    <div className="HistoryFormControl">
                        <div className="HistoryFormControlLabel">
                            <label htmlFor="General">General Examination</label>
                        </div>
                        <div className="HistoryFormControlTextArea">
                            <textarea ></textarea>
                        </div>
                    </div>
                    <div className="HistoryFormControl">
                        <div className="HistoryFormControlLabel">
                            <label htmlFor="General">General Examination</label>
                        </div>
                        <div className="HistoryFormControlTextArea">
                            <textarea ></textarea>
                        </div>
                    </div>
                    <div className="HistoryFormControl">
                        <div className="HistoryFormControlLabel">
                            <label htmlFor="General">General Examination</label>
                        </div>
                        <div className="HistoryFormControlTextArea">
                            <textarea ></textarea>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default History