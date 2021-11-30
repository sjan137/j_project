import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Grid, Container, Typography, Stack, Button } from '@mui/material';
import { Card, CardHeader } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppMetro,
  
} from '../components/_dashboard/app';
import AnalysisBtn from '../layouts/dashboard/TransportationAnalysisBtn';
import TranportationChartBtn from '../layouts/dashboard/TransportationChartBtn';
import Nav from 'react-bootstrap/Nav';
// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            교통
          </Typography>
        </Stack>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Option 2</Nav.Link>
            </Nav.Item>
          </Nav>
        <Grid item xs={12} md={6} lg={8}>
          <AppMetro />
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <AnalysisBtn />
        </Grid>
        <br/>
        <Grid item xs={12} md={6} lg={8}>
          <Card>
            <CardHeader title="교통 데이터 최종 분석 인사이트" subheader="교통 데이터 최종 분석 인사이트입니다." />
            <br/>
          </Card>
        </Grid>
      </Container>
    </Page>
  );
}
