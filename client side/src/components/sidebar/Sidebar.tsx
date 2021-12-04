import React from "react";
import {
  Dashboard,
  Home,
  Message,
  Notifications,
  Translate,
  ExitToApp,
  Apple,
  KeyboardArrowDown,
  Settings,
  FavoriteBorder,
  People,
  Delete,
  Add
  
} from "@material-ui/icons";
import Update from '@material-ui/icons/Edit'
import UserImage from "../../images/user.jpg";
import { Link } from "react-router-dom";

import styled from 'styled-components';

const SidebareMain=styled.div`
      width: 25%;
    height: 100vh;
    /* background-color: white; */
    position: absolute;
    top: 0;
    left: 0;
`;
const Sidebar1=styled.div`
      position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 100vh;
    background-color: rgb(255, 115, 0);
`;
const Sidebar2=styled.div`
      position: absolute;
    left: 20%;
    top: 0;
    width: 80%;
    height: 100%;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const SidebareIcons=styled.div`
  display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    cursor: pointer;
`;
const SidebarMainIcon=styled.div`
  display: flex;
    flex-direction: column;
    margin-top: 50px;
`;
const SidebarForhover= styled.div`
    width: 100%;
    height: 50px;
    transition: 1s;
    &:hover{
      color: rgba(0,0,0,0.5);
      transform: scale(1.1);
    }
`;
const LogoutIcon=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    width: 100%;
    height: 50px;
    margin-bottom: 50px;
    background-color: rgba(0,0,0,0.5);
`;
const Icon=styled.div`
  cursor: pointer;
`;
const Badge2=styled.div`
      background-color: rgb(235, 171, 33);
    border-radius: 20px;
    width: 20px;
    height: 20px;
    align-items: center;
    text-align: center;
    color: white;
    position: relative;
    top: -40px;
    left: 15px;
`;
const Logo=styled.div`
    display: flex;
    flex-direction: row;
    margin: 30px;
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
`;
const User=styled.div`
    display: flex;
    flex-direction: row;
    background-color: #bcccca;
    padding: 25px;
    justify-content: center;
    align-items: center;
    height: 40px;
`;
const Detail1=styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    justify-content: center;
    align-items: center;`;
const Loginas=styled.div`
    font-size: 15px;
    color: rgb(166, 173, 173);`;
const Detail=styled.div`
    justify-content: center;
    align-items: center;
`;
const UserImageStyle=styled.img`
      width: 40px;
    height: 40px;
    border-radius: 20px;
`;
const UserName=styled.span`
      color: rgb(255, 115, 0);
    font-weight: bold;
`;
const MainType=styled.div`
    margin-left: 30px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;`;

const MainTypeName=styled.span`
    font-weight: bold;
    font-size: 20px;
    color:rgb(166, 173, 173);
`;
const Item=styled.div`
    padding: 2.std-5px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    &:hover{
      color : rgb(255, 115, 0);
    }
    `;
const ItemSpan=styled.span`
      font-size: 15px;
    margin-left: 10px;
    color: rgb(166, 173, 173);
    text-align: center;
    justify-content: center;
    align-items: center;
    position: relative;
`;
    
const A=styled.a`
      text-decoration: none;
    padding: 5px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    margin: 10px;
    color: #f76c10;

`;
const StdLink=styled.div`
      margin: 2px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const Badge=styled.span`
  background-color: rgb(235, 171, 33);
  border-radius: 20px;
  width: 20px;
  height: 20px;
  align-items: center;
  text-align: center;
  color: white;
  margin-left: 7px;
`;
const Badge1=styled.span`
    background-color: rgb(235, 171, 33);
    border-radius: 20px;
    width: 20px;
    height: 20px;
    align-items: center;
    text-align: center;
    color: white;
    margin-left: 34px;`;

export default function Sidebar() {
  const [isClicked, setIsClicked] = React.useState(false);
  return (
    <SidebareMain>
      <Sidebar1>
        <SidebareIcons>
          <SidebarMainIcon>
            <SidebarForhover>
              <Dashboard
                style={{ color: "#ffffff" }}
                onClick={() => {
                  setIsClicked(!isClicked);
                }}
              />
            </SidebarForhover>
          </SidebarMainIcon>
          <SidebarMainIcon>
            <SidebarForhover>
              <Icon>
              <Home
                style={{ color: "#ffffff" }}
              />
              </Icon>
            </SidebarForhover>
            <SidebarForhover>
              <Message style={{ color: "#ffffff", paddingTop: "30px" }} />
            </SidebarForhover>
            <SidebarForhover>
              <Notifications style={{ color: "#ffffff", paddingTop: "30px" }} />
              <Badge2>1</Badge2>
            </SidebarForhover>
            <SidebarForhover>
              <Translate style={{ color: "#ffffff", paddingTop: "30px" }} />
            </SidebarForhover>
            <SidebarForhover>
              <FavoriteBorder
                style={{ color: "#ffffff", paddingTop: "30px" }}
              />
            </SidebarForhover>
          </SidebarMainIcon>
          <LogoutIcon>
          < SidebarMainIcon>
                
                <SidebarForhover>
                  <ExitToApp style={{ color: "#ffffff" }}  />
                </SidebarForhover>
                
          </SidebarMainIcon>
          </LogoutIcon>
        </SidebareIcons>
      </Sidebar1>
      <Sidebar2>
        <Logo>
          <Apple />
          <span>Logo</span>
        </Logo>
        <User>
          <UserImageStyle
            src={UserImage} alt="">
          </UserImageStyle>
          <Detail1>
            <Detail>
              <UserName>Meseret kifle</UserName>
              <Link to="/logout">
                <Icon>
                <KeyboardArrowDown
                  // onClick={() => {
                  //   switchComponentContext.setChangeComp("teacher");
                  // }}
                  style={{ color: "rgb(255, 115, 0)" }}
                />
                </Icon>
                
              </Link>
            </Detail>
            <Loginas>Loged in as a Admin</Loginas>
          </Detail1>
        </User>
        <MainType>
          <MainTypeName>Main</MainTypeName>
          <Item>
            <Link to="/std-dashboard">
              <Dashboard
                className="std-icon"
                style={{ color: "rgb(255, 115, 0)" }}
              />
              <ItemSpan style={{ color: "rgb(255, 115, 0)" }}>Dashboard</ItemSpan>
            </Link>
          </Item>
          <Item>
            <Link to="/dashboard">
              <Settings style={{ color: "rgb(166, 173, 173)" }} />
              <ItemSpan>Account Setting</ItemSpan>
              <Badge1>!</Badge1>
            </Link>
          </Item>
        </MainType>
        <MainType>
          <MainTypeName>Employee</MainTypeName>
          <Item>
            <Link to="/employees">
              <People style={{ color: "rgb(166, 173, 173)" }} />
              <ItemSpan>Employees</ItemSpan>
            </Link>
          </Item>
          <Item>
            <Link to="/add-employee">
              <Add style={{ color: "rgb(166, 173, 173)" }} />
              <ItemSpan>Add</ItemSpan>
            </Link>
          </Item>
          <Item>
            <Link to="/employees">
              <Delete style={{ color: "rgb(166, 173, 173)" }} />
              <ItemSpan>Delete</ItemSpan>
            </Link>
          </Item>
          <Item>
            <Link to="/employees">
              <Update style={{ color: "rgb(166, 173, 173)" }} />
              <ItemSpan>Update</ItemSpan>
            </Link>
          </Item>
        </MainType>
        <MainType>
          <MainTypeName>Other</MainTypeName>
          
        </MainType>
        <hr style={{ color: "rgb(166, 173, 173)", height: "0.5px" }} />
        <StdLink>
          <A href="#vacancy">Vacancy</A>
          <A href="#something">some thing</A>
        </StdLink>
      </Sidebar2>
    </SidebareMain>
  );
}
