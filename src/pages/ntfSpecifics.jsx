import React from 'react';
import {trades} from '../trades';
import Form from '../components/attributesForm';

export default function nftSpecifics () {
    return (
        <Form trades={trades} />
    )
}