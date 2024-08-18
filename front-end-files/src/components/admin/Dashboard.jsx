import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Nav,Button } from 'react-bootstrap';
import LeftSidebar from './LeftSidebar';


function Dashboard() {
    
  return (
    <>
    
    <div className="d-flex">
      <LeftSidebar />
      <div className="flex-grow-1">
       dashboard
      </div>
    </div>
    </>
  )
}

export default Dashboard