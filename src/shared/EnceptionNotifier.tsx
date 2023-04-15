import React from 'react';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';

const EnceptionNotifier = ({ message }: any) => {
      return (
            <div className='d-flex align-items-center'>
                  <DirectionsBikeIcon sx={{color: '#756552'}} fontSize="small" className='mr-2' />
                  <b><span style={{color: '#756552'}}>{message}</span></b>
            </div>
      )
}

export default EnceptionNotifier