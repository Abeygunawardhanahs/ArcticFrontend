import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLocationDot, faSitemap, faCalendarDays, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import './SerAgFiveInputContainer.css';
//import axios from "axios";
import SiViSingleButton from '../Components/SiteVisitComponents/SiViSingleButton';
import { Link } from 'react-router-dom';

export default function SerAgFiveInputContainer() {
//   const [customerName,setCustomerName]=useState("");
//   const [location,setLocation]=useState("");
//   const [item,setItem]=useState("");
//   const [agreementType,setAgreementType]=useState("");
//   const [periodOfTheAgreement,setPeriodOfTheAgreement]=useState("");

//   const data = {
//     customerName:customerName,
//     location:location,
//     item:item,
//     agreementType:agreementType,
//     periodOfTheAgreement:periodOfTheAgreement

//     }
  
      return (
            <div className='seraginput'>
              <div className='input-container'>
              <input type='text' placeholder='Customer name'></input>
              <FontAwesomeIcon icon={faUser} className='icon'/>
              </div>
              <div className='input-container'>
              <input type='text' placeholder='Location' ></input>
              <FontAwesomeIcon icon={faLocationDot} className='icon' /></div>
              <div className='input-container'>
              <input type='text' placeholder='Item'></input>
              <FontAwesomeIcon icon={faSitemap} className='icon'/>
              </div>
              <div className='input-container'>
              <input type='text' placeholder='Agreement Type'></input>
              <FontAwesomeIcon icon={faFileSignature} className='icon'/>
              </div>
              <div className='input-container'>
              <input type='text' placeholder='Period of the agreement'></input>
              <FontAwesomeIcon icon={faCalendarDays} className='icon' />
              </div>
              

              <Link to ='/ServiceAgreementThree'><SiViSingleButton value= 'Edit Details'/></Link> 
            
            </div>

            
        
        
          )
}
