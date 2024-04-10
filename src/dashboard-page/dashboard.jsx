import React from 'react'
import DashboardGrid from './dashboard.grid'
const Dashboard = () => {
    const user = {
        name: 'Alex0880'
      }
    return (
           <DashboardGrid user = {user}></DashboardGrid>
    );
  }
  
  export default Dashboard