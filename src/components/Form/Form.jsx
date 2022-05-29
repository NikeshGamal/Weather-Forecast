import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

const Form = ({searchSubmit}) => {
  // need to use the value of the form given for the further process so we need to use useState hook 
    const [location,setLocation] = useState('');

    //operation carried out while submitting the form
    const onSubmit = (e)=>{
    //to avoid the page to be loaded while submitting the form
       e.preventDefault();
       
       //if input is empty or undefined then we need to break the control
       if(!location || location==='') return;
       console.log(location);

       //we need to pass the value of the input form so that it can be used to fetch the data
       //so we need to pass the value to a functino i.e. searchSubmit that we obtain in this component through props form Page.jsx
       searchSubmit(location);
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                value={location}
                onChange={e=>{setLocation(e.target.value)}}
            />

            <button type="submit" className={styles.button} onClick={onSubmit}>
                SEARCH
            </button>
        </form>
    );
};
Form.propTypes ={
    searchSubmit : PropTypes.func.isRequired,
}

export default Form;
