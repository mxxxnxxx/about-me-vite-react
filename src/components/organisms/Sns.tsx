import { Grid, Typography, IconButton } from '@material-ui/core'
import useStyle from '../../Styles/useStyle'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'

export default function Sns() {
    const classes = useStyle()
    return (
        <>
            <Grid
                item xs={7}
                className={classes.item8}
            >
                <Typography className={classes.sns}>
                    -SNS-
                </Typography>
                <IconButton
                    target="_blank"
                    href='https://twitter.com/se_tachibana'
                >
                    <TwitterIcon />
                </IconButton>
                <IconButton
                    target="_blank"
                    href='https://github.com/mxxxnxxx'
                >
                    <GitHubIcon />
                </IconButton>
            </Grid>
            <Grid
                item xs={5}
                className={classes.item9}
            >
            </Grid>
        </>
    )
}
