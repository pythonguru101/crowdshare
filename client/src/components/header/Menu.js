import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/Menu';

const options = [
  'Contact',
  'About Us',
  'Gallery',
  'Mission',
  'Vision',
];

export default function LongMenu({styles}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon sx={styles} />
      </IconButton>
      <Menu
  id="long-menu"
  // MenuListProps={{
  //   'aria-labelledby': 'long-button',
  // }}
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  PaperProps={{
    style: {
      width: '20ch',
      // height:'19ch'
    },
  }}
>
  <div style={{marginTop:200,marginBottom:-200,left:100}}>
  {console.log(options)}
{options.filter(Boolean).map((option, i) => (
  
  <MenuItem key={i} onClick={handleClose}>
    {option}
  </MenuItem>
))}
  </div>

      </Menu>
    </div>
  );
}