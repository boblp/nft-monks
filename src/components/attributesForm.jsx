import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

export default function AttributesForm (props){
    const { gridClass } = props;
    const trades = [
        {
            name:"trade1",
            class:"col-6",
            label:"trade1",
            options:[
                {
                    label:"caca1",
                    value:"1"
                },
                {
                    label:"caca2",
                    value:"2"
                },
                {
                    label:"caca3",
                    value:"3"
                },
                {
                    label:"caca4",
                    value:"4"
                },
                {
                    label:"caca5",
                    value:"5"
                }
            ]
        },
        {
            name:"trade2",
            class:"col-6",
            label:"trade2",
            options:[
                {
                    label:"caca1",
                    value:"1"
                },
                {
                    label:"caca2",
                    value:"2"
                },
                {
                    label:"caca3",
                    value:"3"
                },
                {
                    label:"caca4",
                    value:"4"
                },
                {
                    label:"caca5",
                    value:"5"
                }
            ]
        },
        {
            name:"trade3",
            class:"col-6",
            label:"trade3",
            options:[
                {
                    label:"caca1",
                    value:"1"
                },
                {
                    label:"caca2",
                    value:"2"
                },
                {
                    label:"caca3",
                    value:"3"
                },
                {
                    label:"caca4",
                    value:"4"
                },
                {
                    label:"caca5",
                    value:"5"
                }
            ]
        },
        {
            name:"trade4",
            class:"col-6",
            label:"trade4",
            options:[
                {
                    label:"caca1",
                    value:"1"
                },
                {
                    label:"caca2",
                    value:"2"
                },
                {
                    label:"caca3",
                    value:"3"
                },
                {
                    label:"caca4",
                    value:"4"
                },
                {
                    label:"caca5",
                    value:"5"
                }
            ]
        },
        {
            name:"trade5",
            class:"col-6",
            label:"trade5",
            options:[
                {
                    label:"caca1",
                    value:"1"
                },
                {
                    label:"caca2",
                    value:"2"
                },
                {
                    label:"caca3",
                    value:"3"
                },
                {
                    label:"caca4",
                    value:"4"
                },
                {
                    label:"caca5",
                    value:"5"
                }
            ]
        },
        {
            name:"trade6",
            class:"col-6",
            label:"trade6",
            options:[
                {
                    label:"caca1",
                    value:"1"
                },
                {
                    label:"caca2",
                    value:"2"
                },
                {
                    label:"caca3",
                    value:"3"
                },
                {
                    label:"caca4",
                    value:"4"
                },
                {
                    label:"caca5",
                    value:"5"
                }
            ]
        },
        {
            name:"trade7",
            class:"col-6",
            label:"trade7",
            options:[
                {
                    label:"caca1",
                    value:"1"
                },
                {
                    label:"caca2",
                    value:"2"
                },
                {
                    label:"caca3",
                    value:"3"
                },
                {
                    label:"caca4",
                    value:"4"
                },
                {
                    label:"caca5",
                    value:"5"
                }
            ]
        },
        {
            name:"trade8",
            class:"col-6",
            label:"trade8",
            options:[
                {
                    label:"caca1",
                    value:"1"
                },
                {
                    label:"caca2",
                    value:"2"
                },
                {
                    label:"caca3",
                    value:"3"
                },
                {
                    label:"caca4",
                    value:"4"
                },
                {
                    label:"caca5",
                    value:"5"
                }
            ]
        }
    ];
    return (
        <Form className={gridClass}>
                {trades.map(trade=>{
                    return (
                        <FormControl>
                            <Select name="os" value={formValues.os} onChange={handleInputChange}>
                                <MenuItem key="mac" value="mac">Mac</MenuItem>
                                <MenuItem key="windows" value="windows">Windows</MenuItem>
                                <MenuItem key="linux" value="linux">Linux</MenuItem>
                            </Select>
                        </FormControl>
                })}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );

}