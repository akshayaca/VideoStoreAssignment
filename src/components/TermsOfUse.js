import React, { useEffect, useState } from 'react';
import LegalService from '../services/LegalService';
const TermsOfUse = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        LegalService.getTermsOfUse()
            .then(data => setContent(data.content))
            .catch(error => console.error('Error fetching Terms of Use:', error));
    }, []);

    return (
        <div className="text-white p-8">
            <h1 className="text-2xl font-bold">Terms of Use</h1>
            <p>{content}</p>
        </div>
    );
};

export default TermsOfUse;
