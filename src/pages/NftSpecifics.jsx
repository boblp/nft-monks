import React from 'react';
import {trades} from '../trades';
import Form from '../components/attributesForm';

export default function NftSpecifics () {
    return (
        <Form trades={trades} />
    )
}