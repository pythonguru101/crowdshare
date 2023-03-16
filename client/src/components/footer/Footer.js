import React from 'react';
import { Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    position: 'relative',
    bottom: 0,
    width: '100%'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    marginLeft: theme.spacing(1),
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Crowdshare
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Made with <span role="img" aria-label="heart">❤️</span> by
        <Link href="https://example.com" target="_blank" rel="noopener noreferrer" className={classes.link}>
          Crowdshare
        </Link>
      </Typography>
    </div>
  );
}

export default Footer;
