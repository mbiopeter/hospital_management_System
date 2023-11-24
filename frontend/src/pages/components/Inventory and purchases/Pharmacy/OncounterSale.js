import './OncounterSale.css';
import {FaSearch} from "react-icons/fa";
export const OncounterSale = () => {
    return(
        <div className="OncounterSaleContainer">
            <div className="OncounterSaleContainerHeader">
                <span>Oncounter Sale</span>
            </div>

            <div className="OncounterSaleContainerMiddle">

                <div className="OncounterSaleContainerMiddleCol">
                    <div className="OncounterSaleContainerMiddleColFormControl">
                        <label htmlFor="IssueSale">Issue Sale</label>
                        <select>
                            <option value="Issue">Issue</option>
                            <option value="Issue">Direct Sale</option>
                        </select>
                    </div>
                    <div className="OncounterSaleContainerMiddleColFormControl">
                        <label htmlFor="IssueSale">Reg No</label>
                        <div className="controlSearch">
                            <input  type="text"/>
                            <div className="OncounterSaleContainerMiddleColFormControlIconContainer">
                                <FaSearch className='OncounterSaleContainerMiddleColFormControlIcon' />
                            </div>
                        </div>
                    </div>
                    <div className="OncounterSaleContainerMiddleColFormControl">
                        <label htmlFor="IssueSale">Name</label>
                        <input type="text" />
                    </div>
                    <div className="OncounterSaleContainerMiddleColFormControl">
                        <label htmlFor="IssueSale">Age</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="OncounterSaleContainerMiddleCol">
                    <div className="OncounterSaleContainerMiddleColFormControl">
                        <label htmlFor="IssueSale">Issue Sale</label>
                        <input type="text" />
                    </div>
                    <div className="OncounterSaleContainerMiddleColFormControl">
                        <label htmlFor="IssueSale">Issue Sale</label>
                        <input type="text" />
                    </div>
                    <div className="OncounterSaleContainerMiddleColFormControl">
                        <label htmlFor="IssueSale">Issue Sale</label>
                        <input type="text" />
                    </div>
                    <div className="OncounterSaleContainerMiddleColFormControl">
                        <label htmlFor="IssueSale">Issue Sale</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="OncounterSaleContainerMiddleCol">
                    <div className="OncounterSaleContainerMiddleColFormControl">
                        <label htmlFor="IssueSale">Issue Sale</label>
                        <input type="text" />
                    </div>
                    <div className="OncounterSaleContainerMiddleColFormControl">
                        <label htmlFor="IssueSale">Issue Sale</label>
                        <input type="text" />
                    </div>
                    <div className="OncounterSaleContainerMiddleColFormControl">
                        <label htmlFor="IssueSale">Issue Sale</label>
                        <input type="text" />
                    </div>
                    <div className="OncounterSaleContainerMiddleColFormControl">
                        <label htmlFor="IssueSale">Issue Sale</label>
                        <input type="text" />
                    </div>
                </div>

            </div>

        </div>
    )
}