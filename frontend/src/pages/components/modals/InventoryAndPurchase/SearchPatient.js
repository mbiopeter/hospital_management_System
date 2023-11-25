import DataTable from 'react-data-table-component';
import '../PatientRegistration/SearchPatient.css';
import {FaTimes } from "react-icons/fa";
import { useState } from 'react';
const SearchMedicationPatient = ({toggleSearchPatient,SearchPatientPop}) => {
    const columns = [
        {
            name: 'Reg. No',
            selector: row => row.regNo,
            sortable: true
        },
        {
            name: 'Patient Name',
            selector: row => row.name,
            sortable: true  
        },
        {
            name: 'Age/Gender',
            selector: row => row.age,
            sortable: true
        },
        {
            name: 'DOB',
            selector: row => row.birth,
            sortable: true
        },
        {
            name: 'Mobile Number',
            selector: row => row.mobile,
            sortable: true
        },
        {
            name: 'ID Number',
            selector: row => row.idno,
            sortable: true
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true
        },
        {
            name: 'Payer',
            selector: row => row.payer,
            sortable: true
        },
        {
            name: 'Sponser',
            selector: row => row.sponser,
            sortable: true
        }
    ];
    const data = [
        {
            id: 1,
            regNo: 'PA106/G/14448/21',
            name: 'Mbio Peter',
            age: '22/M',
            birth: '11/09/2001',
            mobile: '0759595268',
            idno: '39665135',
            email: 'mbiopeter201@gmail.com',
            payer: 'private Cash',
            sponser: 'Private Cash'
        },
        {
            id: 2,
            regNo: 'PA106/G/14448/21',
            name: 'Mbio Peter',
            age: '22/M',
            birth: '11/09/2001',
            mobile: '0759595268',
            idno: '39665135',
            email: 'mbiopeter201@gmail.com',
            payer: 'private Cash',
            sponser: 'Private Cash'
        },
        {
            id: 3,
            regNo: 'PA106/G/14448/21',
            name: 'Mbio Peter',
            age: '22/M',
            birth: '11/09/2001',
            mobile: '0759595268',
            idno: '39665135',
            email: 'mbiopeter201@gmail.com',
            payer: 'private Cash',
            sponser: 'Private Cash'
        },
        {
            id: 4,
            regNo: 'PA106/G/14448/21',
            name: 'Mbio Peter',
            age: '22/M',
            birth: '11/09/2001',
            mobile: '0759595268',
            idno: '39665135',
            email: 'mbiopeter201@gmail.com',
            payer: 'private Cash',
            sponser: 'Private Cash'
        },
        {
            id: 5,
            regNo: 'PA106/G/14448/21',
            name: 'Mbio Peter',
            age: '22/M',
            birth: '11/09/2001',
            mobile: '0759595268',
            idno: '39665135',
            email: 'mbiopeter201@gmail.com',
            payer: 'private Cash',
            sponser: 'Private Cash'
        },
        {
            id: 6,
            regNo: 'PA106/G/14448/21',
            name: 'Mbio Peter',
            age: '22/M',
            birth: '11/09/2001',
            mobile: '0759595268',
            idno: '39665135',
            email: 'mbiopeter201@gmail.com',
            payer: 'private Cash',
            sponser: 'Private Cash'
        },
        {
            id: 7,
            regNo: 'PA106/G/14448/21',
            name: 'Mbio Peter',
            age: '22/M',
            birth: '11/09/2001',
            mobile: '0759595268',
            idno: '39665135',
            email: 'mbiopeter201@gmail.com',
            payer: 'private Cash',
            sponser: 'Private Cash'
        },
        {
            id: 8,
            regNo: 'PA106/G/14448/21',
            name: 'Mbio Peter',
            age: '22/M',
            birth: '11/09/2001',
            mobile: '0759595268',
            idno: '39665135',
            email: 'mbiopeter201@gmail.com',
            payer: 'private Cash',
            sponser: 'Private Cash'
        },
        {
            id: 9,
            regNo: 'PA106/G/14448/21',
            name: 'Mbio Peter',
            age: '22/M',
            birth: '11/09/2001',
            mobile: '0759595268',
            idno: '39665135',
            email: 'mbiopeter201@gmail.com',
            payer: 'private Cash',
            sponser: 'Private Cash'
        },
        {
            id: 10,
            regNo: 'PA106/G/14448/21',
            name: 'Mbio Peter',
            age: '22/M',
            birth: '11/09/2001',
            mobile: '0759595268',
            idno: '39665135',
            email: 'mbiopeter201@gmail.com',
            payer: 'private Cash',
            sponser: 'Private Cash'
        },
        {
            id: 11,
            regNo: 'PA106/G/14448/21',
            name: 'Mbio Peter',
            age: '22/M',
            birth: '11/09/2001',
            mobile: '0759595268',
            idno: '39665135',
            email: 'mbiopeter201@gmail.com',
            payer: 'private Cash',
            sponser: 'Private Cash'
        },
        {
            id: 12,
            regNo: 'PA106/G/14448/21',
            name: 'Mbio Peter',
            age: '22/M',
            birth: '11/09/2001',
            mobile: '0759595268',
            idno: '39665135',
            email: 'mbiopeter201@gmail.com',
            payer: 'private Cash',
            sponser: 'Private Cash'
        },
        {
            id: 13,
            regNo: 'PA106/G/14448/21',
            name: 'Mbio Peter',
            age: '22/M',
            birth: '11/09/2001',
            mobile: '0759595268',
            idno: '39665135',
            email: 'mbiopeter201@gmail.com',
            payer: 'private Cash',
            sponser: 'Private Cash'
        },
        {
            id: 14,
            regNo: 'PA106/G/14448/21',
            name: 'Mbio Peter',
            age: '22/M',
            birth: '11/09/2001',
            mobile: '0759595268',
            idno: '39665135',
            email: 'mbiopeter201@gmail.com',
            payer: 'private Cash',
            sponser: 'Private Cash'
        },
        {
            id: 15,
            regNo: 'PA106/G/14448/21',
            name: 'Mbio Peter',
            age: '22/M',
            birth: '11/09/2001',
            mobile: '0759595268',
            idno: '39665135',
            email: 'mbiopeter201@gmail.com',
            payer: 'private Cash',
            sponser: 'Private Cash'
        },
        {
            id: 16,
            regNo: 'PA106/G/14448/21',
            name: 'Mbio Peter',
            age: '22/M',
            birth: '11/09/2001',
            mobile: '0759595268',
            idno: '39665135',
            email: 'mbiopeter201@gmail.com',
            payer: 'private Cash',
            sponser: 'Private Cash'
        },
        {
            id: 17,
            regNo: 'PA106/G/14448/21',
            name: 'Mbio Peter',
            age: '22/M',
            birth: '11/09/2001',
            mobile: '0759595268',
            idno: '39665135',
            email: 'mbiopeter201@gmail.com',
            payer: 'private Cash',
            sponser: 'Private Cash'
        },
        {
            id: 18,
            regNo: 'PA106/G/14448/21',
            name: 'Mbio Peter',
            age: '22/M',
            birth: '11/09/2001',
            mobile: '0759595268',
            idno: '39665135',
            email: 'mbiopeter201@gmail.com',
            payer: 'private Cash',
            sponser: 'Private Cash'
        },
        {
            id: 19,
            regNo: 'PA106/G/14448/21',
            name: 'Mbio Peter',
            age: '22/M',
            birth: '11/09/2001',
            mobile: '0759595268',
            idno: '39665135',
            email: 'mbiopeter201@gmail.com',
            payer: 'private Cash',
            sponser: 'Private Cash'
        },
        {
            id: 20,
            regNo: 'PA106/G/14448/21',
            name: 'Mbio Peter',
            age: '22/M',
            birth: '11/09/2001',
            mobile: '0759595268',
            idno: '39665135',
            email: 'mbiopeter201@gmail.com',
            payer: 'private Cash',
            sponser: 'Private Cash'
        },
    ];
    const [records,setRecords] = useState(data)
    const HandleFilterByRegNo = (event) => {
        const newdata = data.filter(row => {
            return row.regNo.toLowerCase().includes(event.target.value.toLowerCase());
        })
        setRecords(newdata);
    }
    const HandleFilterByPatientName = (event) => {
        const newdata = data.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase());
        })
        setRecords(newdata);
    }
    const HandleFilterByDob = (event) => {
        const newdata = data.filter(row => {
            return row.birth.toLowerCase().includes(event.target.value.toLowerCase());
        })
        setRecords(newdata);
    }
    const HandleFilterByAge = (event) => {
        const newdata = data.filter(row => {
            return row.age.toLowerCase().includes(event.target.value.toLowerCase());
        })
        setRecords(newdata);
    }
    const HandleFilterByMobileNumber = (event) => {
        const newdata = data.filter(row => {
            return row.mobile.toLowerCase().includes(event.target.value.toLowerCase());
        })
        setRecords(newdata);
    }
    const HandleFilterByIdNo = (event) => {
        const newdata = data.filter(row => {
            return row.idno.toLowerCase().includes(event.target.value.toLowerCase());
        })
        setRecords(newdata);
    }
    return ((SearchPatientPop === true) ? (
        <div>
            <div className="SearchPatientOverlayer" onClick={toggleSearchPatient}></div>
            <div className="SeachPatientPopContainer">
                <div className="SeachPatientPopContainerHeader">
                    <span>Registered Patient Search</span>
                    <div className="CloseSearchPatientContainer">
                        <FaTimes className='CloseSearchPatient' onClick={toggleSearchPatient}/>
                    </div>
                </div>
                <div className="SearchPatientInputFields">
                    <div className="SearchPatientCol">
                        <div className="searchPatientFormControl">
                            <label htmlFor="RegNo">Reg. No</label>
                            <input type="text"  placeholder='Reg No' id='RegNo' onChange={HandleFilterByRegNo}/>
                        </div>
                        <div className="searchPatientFormControl">
                            <label htmlFor="age">Age</label>
                            <input type="text" id='age' placeholder='Age' onChange={HandleFilterByAge}/>
                        </div>
                    </div>
                    <div className="SearchPatientCol">
                        <div className="searchPatientFormControl">
                            <label htmlFor="PatientName">Patient Name</label>
                            <input type="text"  placeholder='Patient Name' id='PatientName' onChange={HandleFilterByPatientName}/>
                        </div>
                        <div className="searchPatientFormControl">
                            <label htmlFor="MobileNumber">Mobile Number</label>
                            <input type="text"  placeholder='Mobile Number' id='MobileNumber' onChange={HandleFilterByMobileNumber}/>
                        </div>
                    </div>
                    <div className="SearchPatientCol">
                        <div className="searchPatientFormControl">
                            <label htmlFor="dob">DOB</label>
                            <input type="text"  placeholder='DOB' id='dob'onChange={HandleFilterByDob}/>
                        </div>
                        <div className="searchPatientFormControl">
                            <label htmlFor="IdNumber">ID Number</label>
                            <input type="text"  placeholder='ID Number' id='IdNumber' onChange={HandleFilterByIdNo}/>
                        </div>
                    </div>
                </div>
                <div className="SearchTableColorsKey">
                    <div className="ColorRep" style={{backgroundColor:'yellow'}}></div>
                    <span>Addimitted Patient</span>
                    <div className="ColorRep" style={{backgroundColor:'red'}}></div>
                    <span>Emergency Patient</span>
                    <div className="ColorRep" style={{backgroundColor:'green'}}></div>
                    <span >Expired Patient</span>
                </div>
                <div className='SearchPatientTableContainer'>
                    <DataTable
                        columns = {columns}
                        data = {records}
                        pagination
                    >
                    </DataTable>
                </div>
            </div>
        </div>
    ):null )
}
export default SearchMedicationPatient;