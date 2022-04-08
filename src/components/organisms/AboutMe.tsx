import { Grid, Box, Typography, Accordion, AccordionSummary, AccordionDetails, makeStyles } from '@material-ui/core'
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded'

import React from 'react'
const useStyle = makeStyles((theme) => ({
    item5: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    aboutMe: {
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(15),
        width: '60%'
    },
    selfIntroductionTitle: {
        color: "rgb(100, 100, 100)",
        paddingBottom: theme.spacing(5)
    },
    Accordion: {
        boxShadow: 'none',
        borderTop: 'none',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        '&::before': {
            backgroundColor: 'white'
        }

    },
    AccordionSummary: {
        alignSelf: 'center'
    },
    summaryRoot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    expandIcon: {
        transform: 'none'
    },
    selfIntroductionSubTitle: {
        color: "rgb(100, 100, 100)",
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
    },
    arrowDownward: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(6)
    },
    selfIntroduction: {
        paddingTop: theme.spacing(2),
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(5),
        paddingBottom: theme.spacing(5),
    },

}))
type Props = {
    QA: { question: string, answer: string }[]
}
const AboutMe: React.FC<Props> = ({ QA }) => {
    const lbToBr = (txt: string) => {
        return (
            txt.split('\n').map(t => (
                t !== '' ? <div>{t}</div> : <br />
            ))
        )
    }
    const classes = useStyle()
    return (
        <>
            {/* 自己紹介 */}
            <Grid
                item xs={12}
                className={classes.item5}
            >

                <Box className={classes.aboutMe}>

                    <Typography align="center" variant="h5" className={classes.selfIntroductionTitle}>
                        -About Me-
                    </Typography>

                    {QA.map((qa, index) => (
                        <Accordion
                            className={classes.Accordion}
                            key={index.toString()}
                        >
                            <AccordionSummary
                                expandIcon={<Typography variant="h5">A.  </Typography>}
                                classes={{
                                    root: classes.summaryRoot,
                                }}
                                className={classes.AccordionSummary}

                                aria-label="Expand"
                                aria-controls="additional-actions1-content"
                                id="additional-actions1-header"
                            >
                                <Typography className={classes.selfIntroductionSubTitle} align="center" variant="h6">
                                    {qa.question}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                <Typography className={classes.selfIntroduction}>
                                    {lbToBr(qa.answer)}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Grid>
        </>
    )
}
export default AboutMe