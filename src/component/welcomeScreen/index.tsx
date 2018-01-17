import * as React from 'react';
import './styles.css';
import constant from './constant';

export default () => {
    return (
        <div className="body">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"/>
            <div className="main">
                <div className="head">
                    <h1>{constant.HEADER}</h1>
                </div>
            </div>
        </div>
    );
};




