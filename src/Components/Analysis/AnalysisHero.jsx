import React, { useState, useEffect } from 'react';
import { Button, IconButton } from '@mui/material';
import AnalysisChart from './AnalysisChart';
import AnalysisTable from './AnalysisTable';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AnalysisHero() {
    const [showAllSections, setShowAllSections] = useState(false);
    const [showAllQuantities, setShowAllQuantities] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [sections, setSections] = useState([]);
    const [tempSectionsapi, setTempSectionsapi] = useState([]);
    const [tempQuantities, setTempQuantities] = useState(['2']);
    const [sectionsapi, setSectionsapi] = useState([]);
    const [quantities, setQuantities] = useState(['2']);
    const [callApi, setCallApi] = useState(true);
    const [supplyChanges, setSupplyChanges] = useState([]);
    const [priceChanges, setPriceChanges] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();
    const event = location.state?.event || null;

    const handleQuantityChange = (e) => {
        const value = e.target.value;
        setTempQuantities(prevQuantities =>
            prevQuantities.includes(value)
                ? prevQuantities.filter(q => q !== value) // Remove if already selected
                : [...prevQuantities, value] // Add if not selected
        );
    };

    const handleSectionsChange = (e) => {
        const value = e.target.value;
        setTempSectionsapi(prevSectionsapi =>
            prevSectionsapi.includes(value)
                ? prevSectionsapi.filter(q => q !== value) // Remove if already selected
                : [...prevSectionsapi, value] // Add if not selected
        );
    };

    const applyFilter = () => {
        setCallApi(true); // Trigger the API call
        setQuantities(tempQuantities); // Apply selected quantities
        setSectionsapi(tempSectionsapi); // Apply selected sections
    };
    

    // useEffect(() => {
    //     if (callApi) {
    //         // Example: Make an API call to get data based on filters
    //         console.log("Applying filters:", sectionsapi, quantities);
    //         // Reset callApi flag after API call
    //         setCallApi(true);
    //     }
    // }, [callApi, sectionsapi, quantities]);

    if (!event) {
        return (
            <div className="container analysis-hero managewidth noEvenTo">
                <div className="row">
                    <div className="col-12">
                        <div className='noDetail'>
                            <p>No event details available. Please go back to the search page to select an event.</p>
                            <Button variant="contained" className='goToBtn' onClick={() => navigate('/search-area')}>
                                Go to Search
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const toggleSections = () => setShowAllSections(prevState => !prevState);
    const toggleQuantities = () => setShowAllQuantities(prevState => !prevState);
    const toggleFilter = () => setShowFilter(prevState => !prevState);

    return (
        <div className="container analysis-hero managewidth">
            <div className={`filterIcon ${showFilter ? 'active' : ''}`}>
                <IconButton onClick={toggleFilter}>
                    <FilterListIcon />
                </IconButton>
            </div>
            <div className="row">
                {(showFilter || window.innerWidth > 1200) && (
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mt-0 sideFilter">
                        <div className="filter-container">
                            <div className="filter">
                                <h4>Filter by Section</h4>
                                {sections.slice(0, showAllSections ? sections.length : 3).map((section, index) => (
                                    <div className="checkGroup" key={index}>
                                        <input
                                            id={`section-${index}`}
                                            className='form-check-input'
                                            type="checkbox"
                                            name="section"
                                            value={section.section}
                                            checked={tempSectionsapi.includes(section.section)}
                                            onChange={handleSectionsChange}
                                        />
                                        <label htmlFor={`section-${index}`}>{section.section}</label>
                                    </div>
                                ))}
                                <Button
                                    className='seeMoreBtn'
                                    onClick={toggleSections}
                                    aria-expanded={showAllSections}
                                    aria-controls="section-filters"
                                >
                                    {showAllSections ? 'See Less' : 'See More'}
                                </Button>
                                <h4 className='pt-3 pb-1'>Filter by Quantity</h4>
                                <div className="checkGroup">
                                    <input
                                        id="quantity1"
                                        className='form-check-input'
                                        type="checkbox"
                                        name="quantity"
                                        value="1"
                                        checked={tempQuantities.includes('1')}
                                        onChange={handleQuantityChange}
                                    />
                                    <label htmlFor="quantity1">1 Ticket</label>
                                </div>
                                <div className="checkGroup">
                                    <input
                                        id="quantity2"
                                        className='form-check-input'
                                        type="checkbox"
                                        name="quantity"
                                        value="2"
                                        checked={tempQuantities.includes('2')}
                                        onChange={handleQuantityChange}
                                    />
                                    <label htmlFor="quantity2">2 Tickets</label>
                                </div>
                                <div className="checkGroup">
                                    <input
                                        id="quantity3"
                                        className='form-check-input'
                                        type="checkbox"
                                        name="quantity"
                                        value="3"
                                        checked={tempQuantities.includes('3')}
                                        onChange={handleQuantityChange}
                                    />
                                    <label htmlFor="quantity3">3 Tickets</label>
                                </div>
                                <div className="checkGroup">
                                    <input
                                        id="quantity4"
                                        className='form-check-input'
                                        type="checkbox"
                                        name="quantity"
                                        value="4"
                                        checked={tempQuantities.includes('4')}
                                        onChange={handleQuantityChange}
                                    />
                                    <label htmlFor="quantity4">4 Tickets</label>
                                </div>
                                <div className="checkGroup">
                                    <input
                                        id="quantity5"
                                        className='form-check-input'
                                        type="checkbox"
                                        name="quantity"
                                        value="5"
                                        checked={tempQuantities.includes('5')}
                                        onChange={handleQuantityChange}
                                    />
                                    <label htmlFor="quantity5">5 Tickets</label>
                                </div>
                                {showAllQuantities && (
                                    <div className="checkGroup">
                                        <input
                                            id="quantity6"
                                            className='form-check-input'
                                            type="checkbox"
                                            name="quantity"
                                            value="6"
                                            checked={tempQuantities.includes('6')}
                                            onChange={handleQuantityChange}
                                        />
                                        <label htmlFor="quantity6">6 Tickets</label>
                                    </div>
                                )}
                                <Button
                                    className='seeMoreBtn mb-0'
                                    onClick={toggleQuantities}
                                    aria-expanded={showAllQuantities}
                                    aria-controls="quantity-filters"
                                >
                                    {showAllQuantities ? 'See Less' : 'See More'}
                                </Button>
                                <Button variant='contained' className="apply-filter-btn" onClick={applyFilter}>Apply Filter</Button>
                            </div>
                        </div>
                    </div>
                )}
                <div className={`col-xl-${showFilter ? '9' : '9'} col-lg-12 mt-xl-0 mt-0`}>
                    <AnalysisChart event={event} sections={sections} setSections={setSections} sectionsapi={sectionsapi} setSectionsapi={setSectionsapi} quantities={quantities} setQuantities={setQuantities} setCallApi={setCallApi} callApi={callApi} setSupplyChanges={setSupplyChanges} setPriceChanges={setPriceChanges}/>
                </div>
            </div>
            <AnalysisTable supplyChanges={supplyChanges} priceChanges={priceChanges} sectionsapi={sectionsapi} quantities={quantities}/>
        </div>
    );
}
