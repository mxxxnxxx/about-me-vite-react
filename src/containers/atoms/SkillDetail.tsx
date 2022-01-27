import React, { useCallback, useState } from 'react'
import SkillDetail from '../../components/atoms/SkillDetail'

type Props = {
    skill: string[]
}
const EnhancedSkillDetail: React.FC<Props> = ({ skill }) => {
    const id = 'skill-detail'
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget)
    }, [])
    const handleClose = useCallback(() => {
        setAnchorEl(null)
    }, [])

    return (
        <SkillDetail
            id={id}
            anchorEl={anchorEl}
            handleClick={handleClick}
            handleClose={handleClose}
            skill={skill}
        />
    )
}
export default EnhancedSkillDetail