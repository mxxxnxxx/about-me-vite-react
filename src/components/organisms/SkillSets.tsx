import { Accordion, AccordionDetails, AccordionSummary, Avatar, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react'
import Masonry from 'react-masonry-css'
import EnhancedSkillDetail from '../../containers/atoms/SkillDetail'
import EnhancedSkillDetailWillMore from '../../containers/atoms/SkillDetailWillMore'
import useStyle from '../../Styles/useStyle'
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

const SkillSets: React.FC<Props> = ({ skillSet }) => {
    // デザインロジックなのでここに記述します
    const classes = useStyle()
    const breakpointColumnsObj = {
        default: 4,
        1350: 3,
        1048: 2,
        576: 1,
    }
    return (
        <Grid
            item xs={12}
            className={classes.skills}
        >

            {/* スキルセット */}
            {/* Masonryで高さを自動的に合わせてくれる 今後スキルが増えることを考慮 */}
            <div className={classes.skillSets}>
                <Typography variant="h6" color="initial" align='center' className={classes.skillSetsTitle}>
                    -Skill Sets-
                </Typography>
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
                                        <React.Fragment key={index.toString()}>
                                            {skill.skill ?
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
                                                        action={
                                                            <EnhancedSkillDetail skill={skill.skill} />
                                                        }
                                                    />
                                                </Card>
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
                                        </React.Fragment>
                                    ))}
                                </CardContent>
                            }
                        </Card>
                    ))}

                    {/* will more */}
                    <Card
                        className={classes.willMore}
                    >
                        <CardHeader
                            avatar={
                                <Avatar
                                    aria-label='willMore'
                                    variant="rounded"
                                    src={willMoreLogo}
                                    className={classes.skillLogo}
                                />
                            }
                            title='will More...'
                            action={
                                <EnhancedSkillDetailWillMore />
                            }
                        >
                        </CardHeader>
                    </Card>
                </Masonry>
            </div>

        </Grid>
    )
}

export default SkillSets