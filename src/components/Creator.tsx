import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core'
// 画像
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react'
import Masonry from 'react-masonry-css'
import useStyle from '../Styles/useStyle'
import Portrait from '/app/src/background_image/Portrait.jpg'
import willMore from '/app/src/background_image/willMore.jpg'
import LibraryLogo from '/app/src/logos/LibraryLogo.png'
import willMoreLogo from '/app/src/logos/willMoreLogo.png'

type Props = {
    skillSet: {
        name: string
        logo: any
        skill?: {
            name: string
            logo: any
            skill?: string[]
        }[]
    }[]
}


const Creator: React.FC<Props> = ({ skillSet }) => {
    const classes = useStyle()

    const breakpointColumnsObj = {
        default: 4,
        1350: 3,
        1048: 2,
        576: 1,
    }

    return (
        <Box className={classes.root}>
            <Grid container spacing={2}>
                {/* 背景 */}
                <Grid
                    item xs={7}
                    className={classes.item1}
                >
                    <Typography variant='h5' component="div" className={classes.title}>
                        Muneyuki Tachibana
                    </Typography>
                    <Typography className={classes.title} >
                        WEB DEVELOPER
                    </Typography>
                </Grid>

                <Grid
                    item xs={5}
                    className={classes.item2}
                >
                </Grid>

                {/* Profile */}
                <Grid
                    item xs={7}
                    className={classes.item3}
                    style={{
                        padding: '0px'
                    }}
                >
                    <img src={Portrait} className={classes.ProfilePhoto} />
                </Grid>

                <Grid
                    item xs={5}
                    className={classes.Profile}
                    style={{
                        padding: '0px'
                    }}
                >
                    <div className={classes.ProfileData}>
                        <Typography component="div" align='center' className={classes.ProfileData}>
                            -PROFILE-
                        </Typography>

                        <Typography component="div" className={classes.ProfileData}>
                            名前:立花 宗之
                        </Typography>

                        <Typography component="div" className={classes.ProfileData}>
                            出身:愛知県 尾張旭（現在は東京都在住）
                        </Typography>

                        <Typography component="div" className={classes.ProfileData}>
                            活動:
                        </Typography>

                        <Typography component="div" className={classes.ProfileData}>
                            趣味:
                        </Typography>
                    </div>
                </Grid>

                {/* 自己紹介 */}
                <Grid
                    item xs={12}
                    className={classes.selfIntroduction}
                >
                    <Typography variant="h6" component="div" className={classes.selfIntroductionTitle}>
                        -About Me-
                    </Typography>
                    <Typography component="div" >

                    </Typography>
                </Grid>

                <Grid
                    item xs={12}
                    className={classes.skills}
                >

                    {/* スキルセット */}
                    {/* Masonryで高さを自動的に合わせてくれる 今後スキルが増えることを考慮 */}
                    <div className={classes.skillSets}>
                        <div className=''>
                            <Typography variant="h6" color="initial" align='center' className={classes.skillSetsTitle}>
                                -Skill Sets-
                            </Typography>
                        </div>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className={classes.myMasonryGrid}
                            columnClassName={classes.myMasonryGridColumn}
                        >

                            {skillSet.map((skill, index) => (

                                <Card className={classes.skillFrame} key={index.toString()}>

                                    <CardHeader
                                        avatar={
                                            <Avatar
                                                aria-label={skill.name}
                                                variant="rounded"
                                                src={skill.logo}
                                                className={classes.skillLogo}
                                            />
                                        }
                                        title={skill.name}
                                    />

                                    {skill.skill &&

                                        <CardContent>

                                            {skill.skill.map((skill, index) => (

                                                <div key={index.toString()}>

                                                    {skill.skill ?

                                                        <Accordion
                                                            className={classes.skill}
                                                        >

                                                            <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                            >
                                                                <div className={classes.Accordion}>

                                                                    <Avatar
                                                                        aria-label={skill.name}
                                                                        variant="rounded"
                                                                        src={skill.logo}
                                                                        className={classes.skillLogo}
                                                                    />

                                                                    <Typography
                                                                        className={classes.skillName}
                                                                    >
                                                                        {skill.name}
                                                                    </Typography>

                                                                </div>

                                                            </AccordionSummary>

                                                            {skill.skill &&

                                                                <AccordionDetails>

                                                                    <div className={classes.skillLibrary}>

                                                                        {skill.skill.map((skill, index) => (

                                                                            <p className={classes.skillLibraryName} key={index.toString()}>

                                                                                <img src={LibraryLogo} alt="Library" width='15' />

                                                                                {skill}

                                                                            </p>

                                                                        ))}
                                                                    </div>

                                                                </AccordionDetails>
                                                            }
                                                        </Accordion>
                                                        :
                                                        <Card className={classes.skill}>

                                                            <CardHeader
                                                                avatar={

                                                                    <Avatar
                                                                        aria-label={skill.name}
                                                                        variant="rounded"
                                                                        src={skill.logo}
                                                                        className={classes.skillLogo}
                                                                    />

                                                                }
                                                                title={skill.name}
                                                            />

                                                        </Card>
                                                    }

                                                </div>

                                            ))}
                                        </CardContent>
                                    }
                                </Card>
                            ))}

                            {/* will more */}
                            <Accordion
                                className={classes.willMore}
                            >

                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >

                                    <div className={classes.Accordion}>

                                        <Avatar
                                            aria-label='willMore'
                                            variant="rounded"
                                            src={willMoreLogo}
                                            className={classes.skillLogo}
                                        />

                                        <Typography
                                            className={classes.skillName}
                                        >
                                            will More ...
                                        </Typography>

                                    </div>

                                </AccordionSummary>

                                <AccordionDetails>
                                    <div className={classes.skillLibrary} >
                                        <img src={willMore} alt="willMore" className={classes.willMoreImg} />
                                    </div>
                                </AccordionDetails>

                            </Accordion>

                        </Masonry>

                    </div>

                </Grid>
                {/* 成果物 */}
                <Grid
                    item xs={12}
                    className={classes.item7}
                >

                </Grid>
                {/* SNS */}
                <Grid
                    item xs={7}
                    className={classes.item8}
                >
                    <Typography className={classes.sns}>
                        -SNS-
                    </Typography>
                </Grid>
                <Grid
                    item xs={5}
                    className={classes.item9}
                >
                </Grid>
            </Grid>
        </Box>
    )
}
export default Creator
