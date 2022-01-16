import { makeStyles } from '@material-ui/core/styles'
import Metal from '/app/src/background_image/metal.jpg'
import Stone from '/app/src/background_image/stone.jpg'
const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    item1: {
        height: '200px',
        backgroundColor: 'rgb(213, 182, 149)',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        padding: '0px',
        color: "rgb(100, 100, 100)"
    },
    item2: {
        height: '200px',
        backgroundImage: `url(${Stone})`,
        backgroundSize: 'cover'
    },
    item3: {
        backgroundColor: 'rgb(247, 228, 210)',
        padding: '10px'
    },
    ProfilePhoto: {
        maxWidth: '1200px',
        width: '100%',

    },
    Profile: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px'
    },
    ProfileData: {
        color: "rgb(100, 100, 100)",
        padding: '3px'
    },
    selfIntroduction: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(216, 216, 216)'
    },
    selfIntroductionTitle: {
        color: "rgb(100, 100, 100)"
    },
    skills: {
        backgroundColor: 'rgb(247, 228, 210)',
    },

    skillSets: {
        padding: theme.spacing(3),
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
        color: 'Gray',
        paddingLeft: '16px'
    },
    willMore: {
        boxShadow: 'none'
    },
    willMoreImg: {
        width: '100%'
    },
    item7: {
        backgroundColor: 'rgb(237, 206, 139)'
    },
    item8: {
        height: '200px',
        backgroundColor: 'rgb(216, 216, 216)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sns: {
        color: "rgb(100, 100, 100)"
    },
    item9: {
        height: '200px',
        backgroundImage: `url(${Metal})`,
        backgroundSize: 'cover'
    },
}))

export default useStyle