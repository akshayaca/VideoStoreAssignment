import React, { useEffect, useState } from 'react';
import LegalService from '../services/LegalService';
const PrivacyPolicy = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        LegalService.getPrivacyPolicy()
            .then(data => setContent(data.content))
            .catch(error => console.error('Error fetching Privacy Policy:', error));
    }, []);

    return (
        <div className="text-white p-8">
            <h1 className="text-2xl font-bold">Privacy Policy</h1>
            <p>{content}</p>
        </div>
    );
};

export default PrivacyPolicy;
