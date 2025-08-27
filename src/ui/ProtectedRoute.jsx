import React, { useEffect } from 'react'
import { useUser } from '../features/authentication/useUser'
import Spinner from './Spinner';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const FullPage=styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
`
function ProtectedRoute({children}) {
    const navigate=useNavigate()
    const {isLoading,user,isAuthenticated}=useUser();
    useEffect(()=>{
         if (!isAuthenticated && !isLoading) {
        navigate('/login')
    }
    },[isLoading,isAuthenticated,navigate])
    if(isLoading)return <FullPage><Spinner/></FullPage>
  return children
}

export default ProtectedRoute
