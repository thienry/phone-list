import React, { useContext } from 'react'
import AlertContext from "../../context/alert/alertContext";

const Alerts = ({ icon }) => {
  const alertContext = useContext(AlertContext);
  
  return (
    alertContext.alerts.length > 0 && alertContext.alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`}> 
        <i className={icon} /> {alert.msg}
      </div>
    ))
  )
}

Alerts.defaultProps = {
  icon: "fas fa-info-circle"
}

export default Alerts
