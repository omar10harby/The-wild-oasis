import React from 'react'
import ButtonIcon from '../../ui/ButtonIcon'
import { HiArrowRightOnRectangle } from 'react-icons/hi2'
import { useLogout } from './useLogout'
import SpinnerMini from '../../ui/SpinnerMini'

function Logout() {
    const {Logout,isLoading}=useLogout()
  return (
    <ButtonIcon onClick={Logout} disabled={isLoading}>
        {isLoading ? <SpinnerMini/>:<HiArrowRightOnRectangle/>}
    </ButtonIcon>
  )
}

export default Logout
