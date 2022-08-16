import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CuerpoVentana, DivCanvas, DivFoto } from '../styles/Styles1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faChartLine, faComments, faGem, faSliders } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const NavSettings = () => {
  const [show, setShow] = useState(false);
  const { displayName } = useSelector(state => state.login);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <DivCanvas>
      <FontAwesomeIcon onClick={handleShow} icon={faBars} />

      <CuerpoVentana show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <DivFoto>
              <div>

              </div>
              <div>
                <h2>Hi!</h2>
                <h2>{displayName}</h2>
              </div>
            </DivFoto>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li><Link to={`/Acount`}><FontAwesomeIcon icon={faSliders} />Settings</Link></li>
            <li><Link to={`/Home2`}><FontAwesomeIcon icon={faBell} />Notification</Link></li>
            <li><Link to={`/Home2`}><FontAwesomeIcon icon={faChartLine} />Activity</Link></li>
            <li><Link to={`/Home2`}><FontAwesomeIcon icon={faGem} />Subscription type</Link></li>
            <li><Link to={`/Home2`}><FontAwesomeIcon icon={faComments} />FAQ</Link></li>
          </ul>
        </Offcanvas.Body>
      </CuerpoVentana>
    </DivCanvas>
  )
}

export default NavSettings;
