import { makeStyles } from '@material-ui/core/styles'
import Film from '../background_image/film.jpg'

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: '392px'
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