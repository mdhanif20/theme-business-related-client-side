import React,{useState} from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import AddThemeModal from './AddThemeModal';

const UpdateTheme = ({theme,value}) => {
    

    return (
        <>
         <TableRow
            style={{color:"red"}}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell sx={{padding:"10px"}} align="left">{value}</TableCell>
            <TableCell sx={{padding:"10px"}} align="left">{theme.websiteName}</TableCell>
            <TableCell sx={{padding:"10px"}} align="left">{theme.price}</TableCell>
            <TableCell sx={{padding:"10px"}} align="left">{theme.review}</TableCell>
            <TableCell sx={{padding:"10px"}} align="left">{theme.totalReview}</TableCell>
            <TableCell sx={{padding:"10px"}} align="left">Update</TableCell>
        </TableRow>
        
        </>
       
    );
};

export default UpdateTheme;