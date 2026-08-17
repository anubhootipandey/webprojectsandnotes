import React from 'react';
import { Box, Typography, TextField, Button, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Card component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} bgcolor="background.paper">
      <CardContent>
        <Box p={3}>
          <Typography variant="h3" color="text.primary">Contact Me</Typography>
          <Box mt={2}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              color="primary"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              color="primary"
              margin="normal"
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Message"
              variant="outlined"
              color="primary"
              margin="normal"
            />
          </Box>
          <Box mt={2}>
            <Button variant="contained" color="primary">
              Send Message
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Contact;
