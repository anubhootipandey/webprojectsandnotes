import React from 'react';
import { Box, List, ListItem, IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';

const Sidebar = () => {
  return (
    <Box
      component={motion.div}
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
      width="200px"
      p={2}
      height="100vh"
      position="fixed"
      ml={2}
      mt={16}
      borderRadius={2}
    >
      <List>
        <ListItem>
          <Tooltip title="Home" placement="right">
            <IconButton component={Link} to="/" aria-label="Home" size="large" sx={{ color: 'text.primary' }}>
              <HomeIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip title="About" placement="right">
            <IconButton component={Link} to="/about" aria-label="About" size="large" sx={{ color: 'text.primary' }}>
              <InfoIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip title="Skills" placement="right">
            <IconButton component={Link} to="/skills" aria-label="Skills" size="large" sx={{ color: 'text.primary' }}>
              <StarIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip title="Projects" placement="right">
            <IconButton component={Link} to="/projects" aria-label="Projects" size="large" sx={{ color: 'text.primary' }}>
              <WorkIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip title="Contact" placement="right">
            <IconButton component={Link} to="/contact" aria-label="Contact" size="large" sx={{ color: 'text.primary' }}>
              <EmailIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
