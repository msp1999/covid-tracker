import React from 'react';
import{
    Card,CardContent,Typography
} from '@material-ui/core';
import './Infobox.css';
const InfoBox = ({title, cases, active, isRed, total, ...props }) => {
    return (
        <div className={`infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"}`} onClick={props.onClick}>
        <CardContent>
            <Typography className="infoBox_title">
                {title}
            </Typography>
            <h2 className={`infoBox_cases ${!isRed && "infoText--green"}`}>{cases}</h2>
            <Typography className="infoBox_total" >
                {total} Total
        </Typography>
        </CardContent>
    </div>
        
    );
};

export default InfoBox;