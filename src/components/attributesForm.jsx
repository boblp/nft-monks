import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

export default function AttributesForm (props){
    const { trades } = props;
    const defaultValues = trades.map(val=>{
        return 1;
    });
    console.log(defaultValues)
    const [formValues, setFormValues] = useState(defaultValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container alignItems="center" justify="center" direction="column">
                <Grid item>
                    {trades.map((trade,index)=>{
                            return (
                                <FormControl>
                                    <FormLabel>{trade.label}</FormLabel>
                                    <Select name={trades.name} value={formValues[index]} onChange={handleInputChange}>
                                        {trade.options.map(option=>{
                                            return (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>)
                                        })}
                                    </Select>
                                </FormControl>
                            );
                        })
                    }
                </Grid>
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </Grid>
        </form>
    );

}