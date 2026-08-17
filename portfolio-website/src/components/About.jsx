import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Card component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} bgcolor="background.paper">
      <CardContent>
        <Box p={3}>
          <Typography variant="h3" color="text.primary">About Me</Typography>
          <Typography variant="body1" color="text.secondary">
            I am a passionate developer...
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default About;
