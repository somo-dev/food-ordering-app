import React, { useState } from 'react'
import { StyledBadge } from '../assets/data/constants';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartModalDialog from './CartModalDialog';
// import WhatsAppModal from './WhatsAppModal'

function WhatsAppButton() {
      const [show, setShow] = useState(false);
      const handleShow = () => setShow(true);
      const handleClose = () => setShow(false);

      return (
            <div>
                  <a onClick={handleShow} className="float" target="blank" style={{ cursor: "pointer" }}>
                        <StyledBadge badgeContent={11} max={9} color="secondary">
                              <ShoppingCartIcon sx={{color: '#006080'}} />
                        </StyledBadge>
                  </a>
                  <CartModalDialog show={show} handleClose={handleClose} />
            </div>
      )
}

export default WhatsAppButton