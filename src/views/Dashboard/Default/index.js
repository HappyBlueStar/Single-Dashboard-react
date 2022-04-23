import React from 'react';
import { makeStyles, Grid, Card, CardHeader, CardContent, Hidden, Typography, Divider, LinearProgress } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import BubbleMap from "./../../../component/BubbleMap/index";

import ReportCard from './ReportCard';
import LatestorderCard from './LatestorderCard';
import SalesLineCard from './SalesLineCard';
import SalesLineCardData from './chart/sale-chart-1';

import RevenuChartCard from './RevenuChartCard';
import RevenuChartCardData from './chart/revenu-chart';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import ProductImage from './../../../assets/images/widget/shoes.png'

import { gridSpacing } from './../../../store/constant';

const useStyles = makeStyles((theme) => ({
    arrowicon: {
        '& svg': {
            width: '20px',
            height: '20px',
            verticalAlign: 'top',
        },
    },
    flatcardbody: {
        padding: '0px !important',
        '& svg': {
            width: '40px',
            height: '40px',
        },
    },
    note: {
        marginTop: theme.spacing(1.5),
        padding: "0px 30px 10px 30px",
    },
    divCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatcardblock: {
        padding: '25px 25px',
        borderLeft: '1px solid' + theme.palette.background.default,
        [theme.breakpoints.down('xs')]: {
            borderLeft: 'none',
            borderBottom: '1px solid' + theme.palette.background.default,
        },
        [theme.breakpoints.down('sm')]: {
            borderBottom: '1px solid' + theme.palette.background.default,
        },
    },
    textsuccess: {
        color: theme.palette.success.main,
    },
    texterror: {
        color: theme.palette.error.main,
    },
    textwarning: {
        color: theme.palette.warning.main,
    },
    tabWidth: {
        width: '100%',
    },
    image: {
        width: '100%',
        height: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '370px'
        },
        [theme.breakpoints.up('sm')]: {
            width: '650px'
        },
    }
}));

const Default = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(2);
    const mapStyles = {        
        height: "100vh",
        width: "100%"};
      
    const defaultCenter = {
    lat: 41.3851, lng: 2.1734
    }
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container className={classes.divCenter}  spacing={gridSpacing}>
                    <Grid item lg={8} xs={12}>
                        <Grid item xs={12} sm={12}>
                            <Grid container spacing={gridSpacing} direction="column">
                                <Grid item xs={12}>
                                    <Card>
                                        <CardContent className={classes.flatcardbody}>
                                            <Grid container alignItems="center" spacing={0}>
                                                <Grid item xs={12} sm={12}>
                                                    <img src={ProductImage} className={classes.image} />
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Hidden only="sm">
                                    <Grid item xs={12}>
                                        <Card>
                                            <Grid container alignItems="center" spacing={0}>
                                                <Grid item sm={6} xs={12} className={classes.flatcardblock}>
                                                    <ReportCard
                                                        primary={"$ 350.00"}
                                                        secondary="Leather Lace Up Desert Ankle Boot"
                                                    />
                                                </Grid>
                                                <Grid item sm={6} xs={12} className={classes.flatcardblock}>
                                                    <Grid container alignItems="center" spacing={1}>
                                                        <Grid item>
                                                            <Typography variant="subtitle2" align="left">
                                                                MATERIAL
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item sm zeroMinWidth>
                                                            <Typography variant="h5" className={classes.textsuccess} align="right">
                                                                POLLIET
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container alignItems="center" spacing={1}>
                                                        <Grid item>
                                                            <Typography variant="subtitle2" align="left">
                                                                COLOR
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item sm zeroMinWidth>
                                                            <Typography variant="h5" className={classes.textwarning} align="right">
                                                                BROWN
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Card>
                                    </Grid>
                                </Hidden>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <Card>
                            <CardHeader
                                title={
                                    <Typography component="div" className="card-header">
                                        User Info
                                    </Typography>
                                }
                            />
                            <Divider />
                            <Grid item xs={12}>
                                <SalesLineCard
                                    footerData={[
                                        {
                                            label: 'Nikola Knezevic',
                                        },
                                    ]}
                                />
                            </Grid>
                            
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={8} sm={6} xs={12} className={classes.divCenter}>
                        <Card className={classes.tabWidth}>
                            <Paper square>
                                <Tabs
                                value={value}
                                textColor="primary"
                                indicatorColor="primary"
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                >
                                    <Tab label="Description tab" />
                                    <Tab label="Attributes tab" />
                                </Tabs>
                                {value === 2 && (
                                    <Typography variant="h6" className={classes.note}>
                                        Slip into comfort with these Georgia Giant Romeo wirk shoes. These shoes are mad with full-grain leather that is durable and quickly moids to your feet. They feature an oil resistant bumper guard that lasts for a long time and is very low maintenance. High performancer lining on the inside keeps your feet dry and comfortable while the covered cushion insole provides comfort underfoot. These boots feature a steel protective toe that hepls keep your feet safe from potentially dangerous rolling or falling objects. Whether you are working in them or relaxing in them afterwards, you can appreciate the comfort of the Romeo boots
                                    </Typography>
                                )}
                                {value === 0 && (
                                    <Typography variant="h6" className={classes.note}>
                                        Slip into comfort with these Georgia Giant Romeo wirk shoes. These shoes are mad with full-grain leather that is durable and quickly moids to your feet. They feature an oil resistant bumper guard that lasts for a long time and is very low maintenance. High performancer lining on the inside keeps your feet dry and comfortable while the covered cushion insole provides comfort underfoot. These boots feature a steel protective toe that hepls keep your feet safe from potentially dangerous rolling or falling objects. Whether you are working in them or relaxing in them afterwards, you can appreciate the comfort of the Romeo boots
                                    </Typography>
                                )}
                                {value === 1 && (
                                    <Typography variant="h6" className={classes.note}>
                                        • Covered cushion insole for comfort <br/>
                                        • Full grain leather quality <br/>
                                        • Electrical hazard protection <br/>
                                        • Steel toe class 175/C75 <br/>
                                        • High performance lining <br/>
                                        • Nyion pull loop <br/>
                                        • Oil resistant polyurethane outsole for great durability <br/>
                                        • Oil resistant rubber bumperguard for great wear <br/>
                                        • Repairable goodyear welt construction
                                    </Typography>
                                )}
                            </Paper>
                        </Card>
                    </Grid>
                    <Grid item lg={4} sm={6} xs={12}>
                        <Card>
                            <CardHeader
                                title={
                                    <Typography component="div" className="card-header">
                                        Map
                                    </Typography>
                                }
                            />
                            <Divider />
                            <CardContent>
                                <div className="gx-map-col">
                                    <BubbleMap/>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Default;
