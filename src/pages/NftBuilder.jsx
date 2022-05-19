import React from 'react';
import {trades} from '../trades';
import Form from '../components/AttributesForm';

export default function NftSpecifics () {
  return (
    <Form trades={trades} />
  )
}