import { Box, Grid, Typography } from "@material-ui/core"
import Portrait from '/app/src/background_image/Portrait.jpg'
import useStyle from '../../Styles/useStyle'
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded'

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
                    -WEB DEVELOPER-
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
                className={classes["item3-2"]}
            >

            </Grid>
            <Grid
                item xs={7}
                className={classes.item4}
            >
                <div className={classes.ProfileData}>
                    <Typography align='center' className={classes.ProfileData}>
                        -PROFILE-
                    </Typography>
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
                        art, 音楽, 洋服, 舞踏鑑賞<br></br>
                        海外旅行, 映画鑑賞, アニメ,<br></br>
                        心理学,哲学
                    </Typography>
                </div>
            </Grid>
            <Grid
                xs={5}
                className={classes["item4-2"]}
            >

            </Grid>


            {/* 自己紹介 */}
            <Grid
                item xs={12}
                className={classes.item5}
            >
                <Box className={classes.aboutMe}>
                    <Typography align="center" variant="h5" className={classes.selfIntroductionTitle}>
                        -About Me-
                    </Typography>
                    <Typography className={classes.selfIntroductionSubTitle} align="center" variant="h6">
                        webとの出会いは?
                    </Typography>
                    <Box className={classes.arrowDownward}>
                        <ArrowDownwardRoundedIcon />
                    </Box>
                    <Typography className={classes.selfIntroduction}>
                        <br></br>
                        学生時代に課外活動とし街に繰り出してStreetSnapを撮影していました｡<br></br>
                        <br></br>
                        撮影は今でも続けていて､発表の場を考える中で必然的にwebに巡りあいました｡
                    </Typography>

                    <Typography align="center" variant="h6" className={classes.selfIntroductionSubTitle} >
                        経歴は?
                    </Typography>
                    <Box className={classes.arrowDownward}>
                        <ArrowDownwardRoundedIcon />
                    </Box>
                    <Typography align="left" className={classes.selfIntroduction}>
                        大きな流れとしては､<br></br>
                        <br></br>
                        作業療法士  →  アパレル販売  →  写真活動<br></br>
                        <br></br>
                        作業療法士では心理学や哲学への関心を得ました｡<br></br>
                        <br></br>
                        アパレルではデザインと身体性との関係性について学んだと感じています｡<br></br>
                        <br></br>
                        写真活動では作業療法士とアパレルで学んだことを実践し統合する経験を得ました｡
                    </Typography>

                    <Typography align="center" variant="h6" className={classes.selfIntroductionSubTitle} >
                        どんなエンジニアを目指しているか?
                    </Typography>
                    <Box className={classes.arrowDownward}>
                        <ArrowDownwardRoundedIcon />
                    </Box>
                    <Typography className={classes.selfIntroduction}>
                        <br></br>

                        <br></br>
                        これまで経験してきた作業療法士､アパレル､写真活動から心理学やデザイン(backend領域も含めて)の重要さを学びました｡<br></br>
                        <br></br>
                        誰がいつどのように誰と使うかを常に意識し､<br></br>
                        "人間的なものが際立つテック"を創造できるエンジニアになりたいと思っています｡
                        <br></br>
                    </Typography>
                </Box>
            </Grid>
        </>
    )
}

