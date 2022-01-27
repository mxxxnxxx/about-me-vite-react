import { IconButton } from '@material-ui/core'
import Menu from '@material-ui/core/Menu'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react'
import useStyle from '../../Styles/useStyle'
import willMore from '/app/src/background_image/willMore.jpg'

type Props = {
    id: string
    anchorEl: HTMLElement | null
    handleClick: (e: React.MouseEvent<HTMLElement>) => void,
    handleClose: (e: React.MouseEvent<HTMLElement>) => void,

}
const SkillDetailWillMore: React.FC<Props> = ({
    id,
    anchorEl,
    handleClick,
    handleClose,
}) => {
    const classes = useStyle()
    return (
        <>
            <IconButton
                aria-controls={id}
                aria-haspopup="menu"
                onClick={handleClick}
                color="inherit"
            >
                <ExpandMoreIcon />
            </IconButton>
            <Menu
                id={id}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <div className={classes.skillLibrary} >
                    <img src={willMore} alt="willMore" className={classes.willMoreImg} />
                </div>
            </Menu>
        </>
    )

}
export default SkillDetailWillMore