import React from 'react';
import { useTheme } from '@material-ui/styles';
import Chart from 'react-apexcharts';
import AvatarImage from './../../../assets/images/widget/avatar.png'

import { Box, Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    content: {
        padding: 0,
        paddingBottom: '0 !important',
    },
    image: {
        borderRadius: '50%',
        border: '2px solid #c6c6c6',
        width: '100%',
        height: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '80px'
        },
        [theme.breakpoints.up('sm')]: {
            width: '75px'
        }
    }
}));

const SalesLineCard = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    const { bgColor, chartData, footerData, icon, title, percentage } = props;

    let footerHtml;
    if (footerData) {
        footerHtml = footerData.map((item, index) => {
            return (
                <Grid item key={index}>
                    <Box mt={3} mb={3} p={1}>
                        <Grid container spacing={1} alignItems="center">
                            <img src={AvatarImage} className={classes.image} />
                            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                            <Typography variant="h5" color="secondary">
                                {item.label}
                            </Typography>
                        </Grid>
                        <Grid container spacing={1} style={{justifyContent:"flex-start", paddingTop: "12px"}} alignItems="center">
                            <Typography variant="h6">Gmail : </Typography>
                            <Typography variant="subtitle1" style={{ color: theme.palette.primary.main }}>
                                happykcs220@gmail.com
                            </Typography>
                        </Grid>
                        <Grid container spacing={1} style={{justifyContent:"flex-start", paddingTop: "12px"}} alignItems="center">
                            <Typography variant="h6">Telegram : </Typography>
                            <Typography variant="subtitle1" style={{ color: theme.palette.primary.main }}>
                                Nikola K
                            </Typography>
                        </Grid>
                        <Grid container spacing={1} style={{justifyContent:"flex-start", paddingTop: "12px"}} alignItems="center">
                            <Typography variant="h6">Skype : </Typography>
                            <Typography variant="subtitle1" style={{ color: theme.palette.primary.main }}>
                                live:.cid.1635d309c71dc5c3
                            </Typography>
                        </Grid>
                    </Box>
                </Grid>
            );
        });
    }

    return (
        <Card>
            <CardContent className={classes.content}>
                {footerData && (
                    <Grid container justify="space-around" alignItems="center">
                        {footerHtml}
                    </Grid>
                )}
            </CardContent>
        </Card>
    );
};

export default SalesLineCard;
