import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DomainSuffix = () => {
    
    const [suffix, setSuffix] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setSuffix(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <FormControl sx={{  minWidth: 120, boxShadow:"inset 0px 0px 7px 0px #b9b7b7" }}>
            <InputLabel id="demo-controlled-open-select-label">Suffix</InputLabel>
            <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={suffix}
                label="suffix"
                onChange={handleChange}
            >
                <MenuItem value={10}>.com</MenuItem>
                <MenuItem value={20}>.net</MenuItem>
                <MenuItem value={30}>.org</MenuItem>
                <MenuItem value={40}>.info</MenuItem>
                <MenuItem value={50}>.US</MenuItem>
                <MenuItem value={60}>.eu</MenuItem>
                <MenuItem value={70}>.bd</MenuItem>
                <MenuItem value={80}>.lu</MenuItem>
                <MenuItem value={90}>.no</MenuItem>
                <MenuItem value={100}>.bt</MenuItem>
                <MenuItem value={110}>.ex</MenuItem>
                <MenuItem value={120}>.cc</MenuItem>
                <MenuItem value={130}>.nu</MenuItem>
                <MenuItem value={140}>.br</MenuItem>
                <MenuItem value={150}>.bt</MenuItem>
            </Select>
            </FormControl>
      </div>
    );
};

export default DomainSuffix;