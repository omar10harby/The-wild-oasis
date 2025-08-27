import styled from "styled-components";
import Spinner from '../../ui/Spinner'
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;
import React from 'react'
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import {useCabins}from '../cabins/useCabins'
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

function DashboardLayout() {
  const {isLoading,bookings}=useRecentBookings()
  const {isLoading:isLoading2,stays, confirmedStays,numDays}=useRecentStays()
  const {isLoading:isLoading3,cabins}=useCabins()
  if(isLoading || isLoading2)return <Spinner/>
  console.log(bookings);
  
  return (
    <StyledDashboardLayout>
        <Stats bookings={bookings} confirmedStays={confirmedStays} numDays={numDays} cabinCount={cabins.length}/>
        <TodayActivity/>
        <DurationChart confirmedStays={confirmedStays}/>
        <SalesChart bookings={bookings} numDays={numDays}/>
    </StyledDashboardLayout>
  ) 
}

export default DashboardLayout
