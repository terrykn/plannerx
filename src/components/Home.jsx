import React, { useState } from 'react';
import '../App.css';
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
import Notes from './Notes';
import ToDoList from './ToDoList';
import { Switch } from '@nextui-org/react';
import { User } from 'react-iconly';


const CalendarSection = () => 
<div>Calendar</div>;

const ToDoListSection = () => 
<div>
  <ToDoList />
</div>;

const NotesSection = () => 
<div>
  <div className="top-left">
    <Pagination noMargin siblings={3} total={20} initialPage={1} />
  </div>
  <div className="top-left">
    <Notes />
  </div>
</div>


const Home = () => {
  const [activeSection, setActiveSection] = useState("calendar");

  const handleNavButtonClick = (section) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "calendar": 
        return <CalendarSection />;
      case "todolist":
        return <ToDoListSection />;
      case "notes":
        return <NotesSection />;
      default:
        return null;
    }
  };

  return(
    <div>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Plannerx
          </Text>
        </Navbar.Brand>
        
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Link onClick={() => handleNavButtonClick("calendar")}>Calendar</Navbar.Link>
          <Navbar.Link onClick={() => handleNavButtonClick("todolist")}>To-Do List</Navbar.Link>
          <Navbar.Link onClick={() => handleNavButtonClick("notes")}>Notes</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>

          <Navbar.Item>
            <Switch
            checked={true}
            size="xl"
            iconOn={<box-icon name='sun'></box-icon>}
            iconOff={<box-icon name='moon'></box-icon>}
            
            />
          </Navbar.Item>

          <Navbar.Item>
            <Button auto rounded>
              <User set="bold" primaryColor="white"/>
            </Button>
          </Navbar.Item>

        </Navbar.Content>
      </Navbar>

      <br/>
      <div className="center-top">
        {renderSection()}
      </div>

    </div>
  );
}

export default Home;

/*import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";

export default function App() {
  return (
    <Layout>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
  )
}*/