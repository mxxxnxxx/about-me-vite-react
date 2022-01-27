import { IconButton, ListItemIcon, ListItemText, MenuItem } from '@material-ui/core'
import Menu from '@material-ui/core/Menu'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SettingsIcon from '@material-ui/icons/Settings'
import React from 'react'
import useStyle from '../../Styles/useStyle'

type Props = {
    id: string
    skill: string[]
    anchorEl: HTMLElement | null
    handleClick: (e: React.MouseEvent<HTMLElement>) => void,
    handleClose: (e: React.MouseEvent<HTMLElement>) => void,

}
const SkillDetail: React.FC<Props> = ({
    id,
    skill,
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
                {skill.map((skill, index) => (
                    <MenuItem
                        key={index.toString()}
                    >
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText>
                            {skill}
                        </ListItemText>
                    </MenuItem>
                ))}
            </Menu>
        </>
    )

}
export default SkillDetail