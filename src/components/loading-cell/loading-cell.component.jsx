import React from 'react';

import Spinner from '../spinner/spinner.component';

import './loading-cell.styles.scss';

const LoadingCell = () => {
    return(
        <div className="loading-cell">
            <Spinner/>
            <span>Loading</span>            
        </div>
    )
};

export default LoadingCell;