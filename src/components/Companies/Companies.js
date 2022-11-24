import React from 'react'
import './Companies.css';
import companiesData from './companiesData';

export default function Companies() {
    return (
        <div className="companies">
            <h1 className="projects-title"> worked for: </h1>
            <div className="companies-section">
                {
                    companiesData.map((company) => (
                        <a href={ company.website } key={ company.website } target="blank" >
                            <img src={ company.logo } alt={ company.website } />
                        </a>
                    ))
                }
            </div>
        </div>
    );
};
