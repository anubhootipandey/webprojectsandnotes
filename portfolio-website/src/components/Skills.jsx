import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'Material UI', level: 'Intermediate' },
  { name: 'Framer Motion', level: 'Intermediate' },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <Card component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} bgcolor="background.paper">
      <CardContent>
        <Box p={3}>
          <Typography variant="h3" color="text.primary">Skills</Typography>
          <Grid container spacing={2} mt={2}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box component={motion.div} whileHover={{ scale: 1.05 }} p={2} border={1} borderRadius={5} bgcolor="background.default">
                  <Typography variant="h6" color="text.primary">{skill.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{skill.level}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Skills;
