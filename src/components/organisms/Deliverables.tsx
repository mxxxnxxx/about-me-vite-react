import { Grid, Typography, Card, CardHeader, IconButton, Box, CardMedia, CardContent, Button } from '@material-ui/core'
import useStyle from '../../Styles/useStyle'
import Sphere from '../../background_image/sphere.png'
import ThisPage from '../../logos/ThisPage.png'
import PublicIcon from '@material-ui/icons/Public'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Masonry from 'react-masonry-css'


export default function Deliverables() {
    const classes = useStyle()
    const breakpointColumnsObj = {
        default: 2,
        1048: 2,
        576: 1,
    }
    return (
        <Grid
            item xs={12}
            className={classes.item7}
        >
            <Box className={classes.deliverables}>
                <Typography align='center' variant="h5" className={classes.deliverablesTitle} >
                    -Deliverables-
                </Typography>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className={classes.myMasonryGrid}
                    columnClassName={classes.myMasonryGridColumn}
                >
                    <Card className={classes.deliverablesCard}>
                        <CardHeader
                            avatar={
                                <PublicIcon />
                            }
                            title='PressPlace'
                        />
                        <IconButton
                            // PressPlaces リンク
                            target="_blank"
                            href=''
                        >
                            <Box className={classes.deliverablesCardMedia}>
                                <CardMedia
                                    component="img"
                                    image={Sphere}
                                    title="PressPlaceImage"
                                />
                            </Box>
                        </IconButton>
                        <CardContent>
                            <Typography>
                                みんなに"自分"の"場所"を共有する
                                場所特化型のSNSサービス
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className={classes.deliverablesCard}>
                        <CardHeader
                            avatar={
                                <AccountCircleIcon />
                            }
                            title='About Me'
                        />
                        <Button>
                            <Box>
                                <CardMedia
                                    component="img"
                                    title="AboutMeImage"
                                    image={ThisPage}
                                />
                            </Box>
                        </Button>
                        <CardContent>
                            <Typography>
                                自分のことが少しでも伝われば嬉しいです!!
                            </Typography>
                        </CardContent>

                    </Card>
                </Masonry>
            </Box>
        </Grid>
    )
}
