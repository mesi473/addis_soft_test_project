import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import UpdateIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ExitIcon from '@material-ui/icons/Close'
import { TextField, InputAdornment, Dialog, IconButton, Button, CircularProgress } from '@material-ui/core';
import ArrowRight from '@material-ui/icons/ArrowRight';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import {
    // delete employee
    deleteEmployeeSelector,
    deleteErrorSelector,
    deletePendingSelector

} from "../../../redux/selectors/DeleteEmployee";
import { Link } from 'react-router-dom';
import { fetchEmployeeRequest } from '../../../redux/actions/GetEmployee';
import { deleteEmployeeRequest } from '../../../redux/actions/DeleteEmployee';
import Folder from '../../../images/folder.svg'
import {
    // get employee
    getPendingSelector,
    getEmployeeSelector,
    getErrorSelector,
  } from "../../../redux/selectors/GetEmployee";


const Table = styled.table`
    border-collapse: collapse;
    overflow: auto;
    width:100%;
    height: 80%;
`;
const TrHead = styled.tr`
    border-top: 1px solid #a3a1a1;
    border-bottom:1px solid #a3a1a1;
    overflow: auto;
    width:100%;
`;
const TdHead=styled.td`
    font-weight: 700;
    overflow: auto  ;
`;
const Td=styled.td`
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    color: rgb(107, 114, 114);
`;
const SpanStatus=styled.span`
        display: inline-block;
    height: 20px;
    width: 10px;
    border-radius: 50%;
    margin-right: 1rem;
`;
const TotalEmployee=styled.div`
   width: 500px;
   height:400px;
    overflow: auto; 
    margin-top:-200px;
`;
const Card=styled.div`
    background-color: rgb(231, 120, 28);
    position: relative;
    margin-top: 6%;
    left: 3%;
    width: 55%;
    height: 15%;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    justify-content: space-between;`;
const ViewAll=styled.div`
background-color: #f5540a;
  padding: 12px;
`
const DialogStyle=styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

export default function EmployeeTable() {

    const deletepending = useSelector(deletePendingSelector);
    const deletesuccess = useSelector(deleteEmployeeSelector);
    const deleteerror = useSelector(deleteErrorSelector);
    const employees = useSelector(getEmployeeSelector);

    const pending = useSelector(getPendingSelector);
    const employee = useSelector(getEmployeeSelector);
    const error = useSelector(getErrorSelector);

    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [id, setId] = React.useState('');
    React.useEffect(() => {
        dispatch(fetchEmployeeRequest());
    }, [open, deletesuccess, employees, dispatch]);

    const [filtered, setFiltered] = React.useState<any>(null);
    const [search, setSearch] = React.useState('')
    // const [num, setNum] = React.useState(1);
    const handleSearchChange = (searchText: string) => {
        if (searchText !== null) {
            searchText = searchText.toLowerCase();
            const filteredItems = employees.filter((item) =>
            (

                item.name.toLowerCase().includes(searchText) ||
                item.salary.toString().toLowerCase().includes(searchText) ||
                item.gender.toLowerCase().includes(searchText) ||
                item.date_of_birth.toLowerCase().includes(searchText),
                item._id
            ));
            setFiltered(filteredItems);
        }
    }
    const filteredList = () => (filtered !== null ? filtered : employees);
    return (
        <div>
            <Dialog open={open}
                
            >
                <DialogStyle>
                <IconButton onClick={() => {
                    setOpen(!open);
                }}>
                    <ExitIcon color="secondary">

                    </ExitIcon>
                </IconButton>
                <div>are you sure</div>
                <Button color="secondary"
                    onClick={() => {
                        dispatch(deleteEmployeeRequest(id));
                        setOpen(!open);
                    }}
                    variant="contained"
                >
                    Delete
                </Button>
                </DialogStyle>
            </Dialog>
            <TotalEmployee >
                <div >
                    <div >
                        <h2 style={{ color: "rgb(255, 115, 0)" }}>employees</h2>
                        <TextField
                            size="small"
                            value={search}
                            onChange={(e) => {
                                handleSearchChange(e.target.value);
                                setSearch(e.target.value);
                            }}
                            label="search"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        >
                            <span><ArrowRight /></span></TextField>
                    </div>
                    <div >
                        <Table >
                            <thead>
                                <TrHead>
                                    <TdHead>Name</TdHead>
                                    <TdHead>salary</TdHead>
                                    <TdHead>Date of birth</TdHead>
                                    <TdHead>Gender</TdHead>
                                    <TdHead></TdHead>
                                    <TdHead></TdHead>
                                </TrHead>
                            </thead>
                            <tbody>
                                <span>
                                {
                                    employee.length===0?<span>
                                        <CircularProgress/>
                                    </span>:null
                                }
                                </span>
                                    {employees.length===0?
                                        <>
                                        <img src={Folder} alt="" style={{
                                                width:" 100px",
                                                height: "100px"
                                        }}/>
                                        <div style={{color: "rgb(166, 173, 173)"}}>No Employee yet</div>
                                        <ViewAll>
                                            <Link to="/add-employee">
                                            Add new Employee
                                            </Link>
                                        </ViewAll>
                                        </>:null
                                        }
                                {filteredList ? filteredList().map((employee: any, index: number) => (
                                    <tr key={index}>
                                        <Td>{employee.name}</Td>
                                        <Td>{employee.salary}</Td>
                                        <Td>${employee.date_of_birth}</Td>
                                        <Td>{employee.gender}</Td>
                                        <Td>
                                            <SpanStatus >
                                                <Link to={`/update/${employee._id}`}>
                                                    <IconButton
                                                        onClick={async () => { }}
                                                    >
                                                        <UpdateIcon color="primary"

                                                        />
                                                    </IconButton>
                                                </Link>
                                            </SpanStatus>
                                        </Td>
                                        <Td>
                                            <SpanStatus >
                                                <IconButton onClick={async () => {
                                                    setId(employee._id);
                                                    setOpen(!open);
                                                }}>
                                                    <DeleteIcon color="secondary"

                                                    />
                                                </IconButton>
                                            </SpanStatus>
                                        </Td>
                                    </tr>
                                )) : null}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </TotalEmployee>
        </div>
    )
}

