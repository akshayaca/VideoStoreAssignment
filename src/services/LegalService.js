import axios from 'axios';

const API_BASE_URL = 'http://localhost:2319/api/legal'; 

// Fetch Terms of Use
const getTermsOfUse = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/Terms of Use`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch Terms of Use:', error);
        throw error;
    }
};

// Fetch Privacy Policy
const getPrivacyPolicy = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/Privacy Policy`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch Privacy Policy:', error);
        throw error;
    }
};

export default {
    getTermsOfUse,
    getPrivacyPolicy
};
