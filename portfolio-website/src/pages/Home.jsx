// src/pages/Home.js
import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Card component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} bgcolor="background.paper">
      <CardContent>
        <Box textAlign="center" mt={5}>
          <Typography component={motion.h1} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 50 }} variant="h2" color="text.primary">
            Welcome to My Portfolio
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Home;
