import React, { Fragment } from 'react';
import Header from '../Header';
import styles from './Page.module.css';
import Form from '../Form/Form';
import Error from '../Error/Error';
import Loading from '../Loader/Loader';
import Forecast from '../Forecast/Forecast';
import useForecast from '../../hooks/useForecast';

const Page = () => {
    //destructing the object return by useForecast
    const {isError,isForecast,isLoading,submitRequest} = useForecast();

    //creating searchSubmit function
    const searchSubmit = (value)=>{
        //we are using value as an object so that we can later use and access the data while data manipulating
        // console.log({value});
        submitRequest({value});
    }

    return (
        <Fragment>
            <Header />
            <div className={styles.box}>
                {/* form */}
                {!isLoading && <Form searchSubmit={searchSubmit}/>}
                {/*  Error*/}
                {isError && <Error/>}
                {/*Loader */}
                {isLoading && <Loading/>}
                {/* Forecast*/}
                {isForecast && <Forecast/>}
            </div>
        </Fragment>
    );
};

export default Page;
