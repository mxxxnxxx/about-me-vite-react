import { makeStyles } from '@material-ui/core/styles'
import Metal from '/app/src/background_image/metal.jpg'
import Film from '/app/src/background_image/film.jpg'
import Sand from '/app/src/background_image/sand-2.jpg'

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: '392px'
    },
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
        backgroundColor: 'rgb(237, 206, 139)',
        padding: '0px',
        margin: '0px',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'right'
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
    ProfileDataSub: {
        fontSize: '10px',
        color: "rgb(100, 100, 100)",
    },
    ProfileData: {
        fontSize: '14px',
        lineHeight: '2',
        color: "rgb(100, 100, 100)",
        paddingBottom: theme.spacing(1)
    },
    'item4-2': {

        backgroundImage: `url(${Sand})`,
        backgroundSize: 'cover'
    },
    item5: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    selfIntroductionTitle: {
        color: "rgb(100, 100, 100)",
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5)
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
    aboutMe: {
        width: '60%'
    },
    skills: {
        backgroundColor: 'rgb(247, 228, 210)',
    },

    skillSets: {
        margin: theme.spacing(5)
    },
    skillSetsTitle: {
        color: "rgb(100, 100, 100)",
        paddingBottom: theme.spacing(5)
    },
    myMasonryGrid: {
        display: 'flex',
        marginLeft: '-30px',
        width: 'auto',
    },
    myMasonryGridColumn: {
        paddingLeft: '30px',
        backgroundClip: 'padding-box'
    },
    skillFrame: {
        boxShadow: 'none',
        marginBottom: theme.spacing(3),
    },
    skill: {
        marginBottom: theme.spacing(2),
        boxShadow: 'none',
        borderStyle: 'inset none none inset',
        borderWidth: '1px'
    },
    Accordion: {
        display: 'flex',
        alignItems: 'center'
    },
    skillName: {
        marginLeft: '16px'
    },
    skillLogo: {
        height: '30px',
        width: '30px',
    },
    skillLibrary: {
        display: 'flex',
        flexDirection: 'column'
    },
    skillLibraryName: {
        fontSize: '12px',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
    },
    skillDetailMenu: {
        backgroundColor: 'rgb(247, 228, 210)',
    },
    skillDetail: {
        backgroundColor: "white"
    },
    willMore: {
        boxShadow: 'none'
    },
    willMoreImg: {
        width: '100%'
    },
    item7: {
        backgroundColor: 'rgb(237, 206, 139)',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    deliverables: {
        padding: theme.spacing(5)
    },
    deliverablesTitle: {
        color: "rgb(100, 100, 100)",
        paddingBottom: theme.spacing(2),
    },
    deliverablesCard: {
        maxWidth: '345px',
        margin: theme.spacing(3)
    },
    deliverablesCardMedia: {
        margin: theme.spacing(3)
    },
    item8: {
        height: '200px',
        backgroundColor: 'rgb(216, 216, 216)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sns: {
        color: "rgb(100, 100, 100)",
        margin: theme.spacing(1)
    },
    item9: {
        height: '200px',
        backgroundImage: `url(${Film})`,
        backgroundSize: 'cover'
    },
}))

export default useStyle