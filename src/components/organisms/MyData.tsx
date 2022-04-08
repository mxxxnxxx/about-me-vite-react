import { Grid, makeStyles, Typography } from "@material-ui/core"
import Portrait from '../../background_image/Portrait.jpg'
import Metal from '../../background_image/metal.jpg'
import Sand from '../../background_image/sand-2.jpg'

const useStyle = makeStyles((theme) => ({
    item1: {
        height: '200px',
        backgroundColor: 'rgb(247, 228, 210)',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    titleName: {
        fontSize: '22px',
        padding: '0px',
        color: "rgb(100, 100, 100)"
    },
    titleSub: {
        fontSize: '14px',
        padding: '0px',
        color: "rgb(100, 100, 100)"
    },
    name: {
        fontSize: '10px'
    },

    item2: {
        height: '200px',
        backgroundImage: `url(${Metal})`,
        backgroundSize: 'cover'
    },
    item3: {
        background: "linear-gradient(to bottom, #f7e4d2 0%, #f7e4d2 50%, #d8d8d8 50%, #d8d8d8 100%)",
        padding: '0px',
        margin: '0px',
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    'item3-2': {
        backgroundColor: 'rgb(237, 206, 139)',
    },
    ProfilePhoto: {
        maxWidth: '400px',
        minWidth: '550',
        width: '100%',
    },
    item4: {
        backgroundColor: 'rgb(216, 216, 216)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px'
    },
    Profile: {
        padding: theme.spacing(8),
        fontSize: '14px',
        lineHeight: '2',
        color: "rgb(100, 100, 100)",
    },
    ProfileDataSub: {
        paddingBottom: theme.spacing(1),
        fontSize: '13px',
        color: "rgb(100, 100, 100)",
    },
    ProfileData: {
        paddingBottom: theme.spacing(4),
        lineHeight: '33px'
    },
    'item4-2': {
        backgroundImage: `url(${Sand})`,
        backgroundSize: 'cover'
    },

}))
export default function MyData() {
    const classes = useStyle()
    return (
        <>
            <Grid
                item xs={7}
                className={classes.item1}
            >
                <Typography className={classes.titleName}>
                    Muneyuki Tachibana
                </Typography>
                <Typography className={classes.titleSub} >
                    - About Me -
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
            >
                <img src={Portrait} className={classes.ProfilePhoto} />
            </Grid>
            <Grid
                item xs={5}
                className={classes["item3-2"]}
            >

            </Grid>
            <Grid
                item xs={7}
                className={classes.item4}
            >
                <div className={classes.Profile}>
                    <Typography className={classes.ProfileDataSub}>
                        -name-
                    </Typography>
                    <Typography className={classes.ProfileData}>
                        立花 宗之
                    </Typography>
                    <Typography className={classes.ProfileDataSub}>
                        -from-
                    </Typography>
                    <Typography className={classes.ProfileData}>
                        1993年生まれの純日本産です｡<br></br>
                        愛知県 尾張旭<br></br>(現在は東京都在住)
                    </Typography>

                    <Typography className={classes.ProfileDataSub}>
                        -趣味-
                    </Typography>
                    <Typography className={classes.ProfileData}>
                        写真, プログラミング,<br></br>
                        art, 音楽, 洋服<br></br>
                        海外旅行, 映画鑑賞, アニメ,<br></br>
                        心理学,哲学
                    </Typography>
                </div>
            </Grid>
            <Grid
                item xs={5}
                className={classes["item4-2"]}
            >
            </Grid>
        </>
    )
}

