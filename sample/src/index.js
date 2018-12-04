import React from 'react';
import ReactDOM from 'react-dom';
import MortgageComparison from "../../src/MortgageComparison";
import PaymentSchedule from "../../src/PaymentSchedule";


const root = (
    <div style={{maxWidth: '600px', margin: '0 auto', fontFamily: 'Helvetica, Arial, sans-serif'}}>
        <div style={{textAlign: 'center'}}>
            <h1>Mortgage Comparison</h1>
        </div>
        <MortgageComparison showPaymentSchedule/>
    </div>
);

ReactDOM.render(
    root,
    document.getElementById('app')
);
