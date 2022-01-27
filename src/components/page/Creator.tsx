import { Box, Grid } from '@material-ui/core'
import React from 'react'
import SkillSets from '../../containers/organisms/SkillSets'
import useStyle from '../../Styles/useStyle'
import Deliverables from '../organisms/Deliverables'
import MyData from '../organisms/MyData'
import Sns from '../organisms/Sns'


const Creator: React.FC = () => {
    const classes = useStyle()

    return (
        <Box className={classes.root}>
            <Grid container spacing={2}>
                <MyData />
                <SkillSets />
                <Deliverables />
                <Sns />
            </Grid>
        </Box>
    )
}
export default Creator
