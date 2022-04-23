import React from 'react';

import { makeStyles, Card, CardContent, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    secondary: {
        marginTop: '.5rem',
    },
    footer: {
        textAlign: 'center',
        padding: theme.spacing(1.2),
        paddingLeft: '20px',
        paddingRight: '20px',
        color: theme.palette.common.white,
    },
}));

const ReportCard = (props) => {
    const { primary, secondary, iconPrimary, color, footerData, iconFooter } = props;
    const classes = useStyles();

    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

    const IconFooter = iconFooter;
    const footerIcon = iconFooter ? <IconFooter /> : null;

    return (
        <CardContent>
            <Grid container justify="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="h3" style={{ color: color }}>
                        {primary}
                    </Typography>
                    <Typography variant="subtitle1" className={classes.secondary}>
                        {secondary}
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
    );
};

export default ReportCard;
