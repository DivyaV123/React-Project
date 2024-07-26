'use client'
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Dropdown from '@/components/commonComponents/dropdown/Dropdown';
import { useGetAllBranchesAsPerCountryQuery } from '@/redux/queries/getAllBranchesAsPerCountryApi';
import { useGetBranchDetailsByIdQuery } from '@/redux/queries/getBranchDetailsByBranchIdApi';

function BranchDropDowns({setBranchDropDownDetails,setIsSelectedBranchEdit}) {
   

    return (
        <form onSubmit={formik.handleSubmit}>
            <h1>dropdown component</h1>
                
        </form>
    );
}

export default BranchDropDowns;
