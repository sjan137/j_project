import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Grid, Container, Typography, Stack, Button } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppConsume
} from '../components/_dashboard/app';
import AnalysisBtn from '../layouts/dashboard/AnalysisBtn';
// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            소비
          </Typography>
        </Stack>
        {/* <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box> */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppConsume />
          </Grid>
        </Grid>
        <Grid>
          <AnalysisBtn />
        </Grid>
      </Container>
    </Page>
  );
}
