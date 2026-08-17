import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project One',
    description: 'Description for project one.',
    image: 'path/to/image1.jpg',
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'Description for project two.',
    image: 'path/to/image2.jpg',
    link: '#'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Card component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} bgcolor="background.paper">
      <CardContent>
        <Box p={3}>
          <Typography variant="h3" color="text.primary">Projects</Typography>
          <Grid container spacing={2} mt={2}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card component={motion.div} whileHover={{ scale: 1.05 }} bgcolor="background.default">
                  <CardActionArea href={project.link} target="_blank">
                    <CardMedia
                      component="img"
                      alt={project.title}
                      height="140"
                      image={project.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" color="text.primary">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Projects;
