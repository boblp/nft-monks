import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default function AttributesForm (props){
    const { gridClass } = props;
    const data = {
        trades:{
            options:{

            }
        }
    }
    return (
        <Form className={gridClass}>
            <Form.Group className="mb-3 col-6 col-6">
                <Form.Label htmlFor="trade">Select</Form.Label>
                <Form.Select id="trade1">
                    <option>Trade 1</option>
                    <option>Trade 2</option>
                    <option>Trade 3</option>
                    <option>Trade 4</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 col-6">
                <Form.Label htmlFor="trade">Select</Form.Label>
                <Form.Select id="trade2">
                    <option>Trade 1</option>
                    <option>Trade 2</option>
                    <option>Trade 3</option>
                    <option>Trade 4</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 col-6">
                <Form.Label htmlFor="trade">Select</Form.Label>
                <Form.Select id="trade3">
                    <option>Trade 1</option>
                    <option>Trade 2</option>
                    <option>Trade 3</option>
                    <option>Trade 4</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 col-6">
                <Form.Label htmlFor="trade">Select</Form.Label>
                <Form.Select id="trade4">
                    <option>Trade 1</option>
                    <option>Trade 2</option>
                    <option>Trade 3</option>
                    <option>Trade 4</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 col-6">
                <Form.Label htmlFor="trade">Select</Form.Label>
                <Form.Select id="trade5">
                    <option>Trade 1</option>
                    <option>Trade 2</option>
                    <option>Trade 3</option>
                    <option>Trade 4</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 col-6">
                <Form.Label htmlFor="trade">Select</Form.Label>
                <Form.Select id="trade6">
                    <option>Trade 1</option>
                    <option>Trade 2</option>
                    <option>Trade 3</option>
                    <option>Trade 4</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 col-6">
                <Form.Label htmlFor="trade">Select</Form.Label>
                <Form.Select id="trade7">
                    <option>Trade 1</option>
                    <option>Trade 2</option>
                    <option>Trade 3</option>
                    <option>Trade 4</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 col-6">
                <Form.Label htmlFor="trade">Select</Form.Label>
                <Form.Select id="trade8">
                    <option>Trade 1</option>
                    <option>Trade 2</option>
                    <option>Trade 3</option>
                    <option>Trade 4</option>
                </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );

}