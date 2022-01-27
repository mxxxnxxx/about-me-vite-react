import React, { useCallback, useState } from 'react'
import SkillDetailWillMore from '../../components/atoms/SkillDetailWillMore'

const EnhancedSkillDetailWillMore: React.FC = () => {
    const id = 'will-more-detail'
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget)
    }, [])
    const handleClose = useCallback(() => {
        setAnchorEl(null)
    }, [])

    return (
        <SkillDetailWillMore
            id={id}
            anchorEl={anchorEl}
            handleClick={handleClick}
            handleClose={handleClose}
        />
    )
}
export default EnhancedSkillDetailWillMore