import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Alert from '@material-ui/lab/Alert';

import {
    // update employee
    updagePendingSelector,
    updateEmployeeSelector,
    updateErrorSelector

} from "../../../redux/selectors/UpdateEmployee";

import { updateEmployeeRequest,addClear} from "../../../redux/actions/UpdateEmployee";

import { getEmployeeSelector } from '../../../redux/selectors/GetEmployee';
import styled from 'styled-components';

const AddEmployee = styled.div`
    width: 100%;
`;
const MainArea = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: -200px;
    text-align: center;
`;
const Input = styled.input`
    border: 0;
    background: none;
    display: black;
    margin:5px auto;
    text-align: center;
    border: 2px solid rgb(107, 114, 114);
    padding: 14px 50px;
    outline: none;
    color: black;
    border-radius: 60px;
    transition: 0.25s;
    &:focus {
        width: 280px;
        border-color: rgb(107, 114, 114);
    }
`;
const InputRadio = styled.input`
    border: 0;
    background: none;
    display: black;
    margin:5px auto;
    text-align: center;
    border: 2px solid rgb(107, 114, 114);
    padding: 14px 50px;
    outline: none;
    color: black;
    border-radius: 60px;
    transition: 0.25s;
`;
const H1 =styled.h1`
    color: rgb(255, 115, 0);
    text-transform:uppercase;
    font-weight: 500;
`;
const Button=styled.button`
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid rgb(255, 115, 0);
    padding: 14px 40px;
    outline: none;
    color: rgb(255, 115, 0);
    border-radius: 24px;
    transition:24px;
    transition :0.25s;
    cursor: pointer;
    text-decoration: none;
    &:hover  {
        background: rgb(255, 115, 0);
        color: #ffffff; 
    }
`;
const MainmainArea=styled.div`
    display: flex;
    flex-direction:row;
`
export default function EdiEmployee(props:any) {
    const employees = useSelector(getEmployeeSelector);
    const _id=props.match.params.id


    const [name, setName] = React.useState<string>('');
    const [salary, setSalary] = React.useState<number>();
    const [date_of_birth, setDateOfBirth] = React.useState<string>();
    const [gender, setGender] = React.useState<string>();
    const [id, setId] = React.useState<string>('');

    const updatpending = useSelector(updagePendingSelector);
    const updatesuccess = useSelector(updateEmployeeSelector);
    const updateerror = useSelector(updateErrorSelector);
    


    function handleChange(e: any) {

        setGender(e.target.value);
    };
    const dispatch = useDispatch();
    React.useEffect(()=>{
        setName(employees?employees.filter(emp=>emp._id==_id)[0].name:'');
        setSalary(employees?employees.filter(emp=>emp._id==_id)[0].salary:0);
        setDateOfBirth(employees?employees.filter(emp=>emp._id==_id)[0].date_of_birth:'');
        setId(_id.toString());
        setGender(employees?employees.filter(emp=>emp._id==_id)[0].gender:'');
        
    },[]);

    function timeoutsuccess(){
        setTimeout(() => {dispatch(addClear({error:[],success:false}))}, 1500);
        return <Alert severity="success">user successfully added</Alert>;
    }
    function timeouterror(){
        setTimeout(() => {dispatch(addClear({error:[],success:false}))}, 1500);
        return <div>
        {updateerror.map((err:any,i:number)=>(
            i===0?<span></span>:
            <Alert key={i} severity="error">{err}</Alert>

        ))} 
        </div>
    }

    return (
        <MainmainArea>
            <div>
            
            </div>
            <div>
            
            <AddEmployee>

                <MainArea>
                    <H1>Edit Employee</H1>
                                {
                            updatesuccess?timeoutsuccess():null
                        }
                        {
                            updateerror?updateerror.length>0?
                            timeouterror()
                            :null:null
                        }
                    <Input
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        type="text" name="full name" placeholder="fullname"  />
                    <Input
                        value={salary}
                        onChange={(e) => {
                            setSalary(parseFloat(e.target.value));
                        }}
                        type="number" name="salary" placeholder="salary" required />
                    <Input
                        value={date_of_birth}
                        onChange={(e) => {
                            setDateOfBirth(e.target.value);
                        }}
                        type="date" name="date" placeholder="date of birth"/>
                    <div>
                        <p>Gender</p>
                        <InputRadio type="radio" id="male" name="gender" value="male" onChange={handleChange} />
                        <label htmlFor="male">Male</label>
                        <InputRadio type="radio" id="css" name="gender" value="female" onChange={handleChange} />
                        <label htmlFor="female">Female</label>
                    </div>
                    <Button disabled={updatpending} onClick={async () => {
                        await dispatch(updateEmployeeRequest({
                            name,
                            date_of_birth,
                            gender,
                            salary,
                            id
                        }));
                        setName('');
                        setDateOfBirth('');
                        setGender('');
                        setSalary(0);
                    }}>Edit</Button>
                </MainArea>
            </AddEmployee>
        </div>
        </MainmainArea>
    )
}