import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Grid, Container, Typography, Stack, Button } from '@mui/material';
import { Card, CardHeader } from '@mui/material';
// components
import Page from '../components/Page';
import { AppMovie, AppConcert} from '../components/_dashboard/app';
import AnalysisBtn from '../layouts/dashboard/CultureAnalysisBtn';
// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            문화
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
              <AppMovie />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
              <AppConcert />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AnalysisBtn />
          </Grid>
        </Grid>
        <br/>
        <Grid item xs={12} md={6} lg={8}>
          <Card>
            <CardHeader title="문화 데이터 최종 분석 인사이트" subheader="문화 데이터 최종 분석 인사이트입니다." />
            <br/>
          </Card>
        </Grid>
      </Container>
    </Page>
  );
}
