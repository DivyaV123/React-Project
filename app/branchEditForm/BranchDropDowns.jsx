'use client'
import React, { useState, useEffect } from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import Dropdown from '@/components/commonComponents/dropdown/Dropdown';
import { useGetAllBranchesAsPerCountryQuery } from '@/redux/queries/getAllBranchesAsPerCountryApi';
import { useGetBranchDetailsByIdQuery } from '@/redux/queries/getBranchDetailsByBranchIdApi';

function BranchDropDowns({ setBranchDropDownDetails, setIsSelectedBranchEdit, btnName, setBranchId }) {
    const [countryOptions, setCountryOptions] = useState([]);
    const [cityOptions, setCityOptions] = useState([]);
    const [organizationOptions, setOrganizationOptions] = useState([]);
    const [branchOptions, setBranchOptions] = useState([]);
    const [selectedBranchId, setSelectedBranchId] = useState("");

    const {
        data: BranchResponse,
        isLoading: branchIsLoading,
        error: branchError,

    } = useGetAllBranchesAsPerCountryQuery();
    const {
        data: individualBranch,
        error: individualBranchError,
        isLoading: individualBranchIsLoading
    } = useGetBranchDetailsByIdQuery({ branchId: selectedBranchId }, {
        skip: !selectedBranchId,
    });
    useEffect(() => {
        if (BranchResponse?.data) {

            const countries = BranchResponse?.data.map(country => ({
                label: country.countryName,
                value: country.countryName
            }));
            setCountryOptions(countries);
        }
    }, [BranchResponse]);


    const formik = useFormik({
        initialValues: {
            country: '',
            city: '',
            organization: '',
            branch: ''
        },
        validationSchema: Yup.object({
            country: Yup.string().required('Country is required'),
            city: Yup.string().required('City is required'),
            organization: Yup.string().required('Organization is required'),
            branch: Yup.string().required('Branch is required')
        }),
        onSubmit: async (values) => {
            if (individualBranch) {
                setIsSelectedBranchEdit(true);
                setBranchDropDownDetails(individualBranch)
            }
        }
    });

    const handleCountrySelect = (event) => {
        const selectedCountryName = event.target.value;
        formik.setFieldValue('country', selectedCountryName);

        const selectedCountryData = BranchResponse?.data.find(
            country => country.countryName === selectedCountryName
        );

        if (selectedCountryData) {
            const cities = selectedCountryData.cities.map(city => ({
                label: city.cityName,
                value: city.cityName
            }));
            setCityOptions(cities);
        } else {
            setCityOptions([]);
        }

        formik.setFieldValue('city', '');
        formik.setFieldValue('organization', '');
        formik.setFieldValue('branch', '');
        setOrganizationOptions([]);
        setBranchOptions([]);
    };

    const handleCitySelect = (event) => {
        const selectedCityName = event.target.value;
        formik.setFieldValue('city', selectedCityName);

        const selectedCountryData = BranchResponse?.data.find(
            country => country.countryName === formik.values.country
        );
        const selectedCityData = selectedCountryData?.cities.find(
            city => city.cityName === selectedCityName
        );

        if (selectedCityData) {
            const organizations = selectedCityData.organizations.map(org => ({
                label: org.organization,
                value: org.organization
            }));
            setOrganizationOptions(organizations);
        } else {
            setOrganizationOptions([]);
        }

        formik.setFieldValue('organization', '');
        formik.setFieldValue('branch', '');
        setBranchOptions([]);
    };

    const handleOrganizationSelect = (event) => {
        const selectedOrganizationName = event.target.value;
        formik.setFieldValue('organization', selectedOrganizationName);

        const selectedCountryData = BranchResponse?.data.find(
            country => country.countryName === formik.values.country
        );
        const selectedCityData = selectedCountryData?.cities.find(
            city => city.cityName === formik.values.city
        );
        const selectedOrgData = selectedCityData?.organizations.find(
            org => org.organization === selectedOrganizationName
        );

        if (selectedOrgData) {
            const branches = selectedOrgData.branches.map(branch => ({
                label: branch.branchName,
                value: branch.branchName,
                branchId: branch.branchId
            }));
            setBranchOptions(branches);

        } else {
            setBranchOptions([]);
        }
    };

    const handleBranchSelect = (event) => {
        const selectedBranchName = event.target.value;
        formik.setFieldValue('branch', selectedBranchName);
        setBranchId(event?.target?.option?.branchId);
        // Find the branchId corresponding to the selected branchName
        const selectedCountryData = BranchResponse?.data.find(
            country => country.countryName === formik.values.country
        );
        const selectedCityData = selectedCountryData?.cities.find(
            city => city.cityName === formik.values.city
        );
        const selectedOrgData = selectedCityData?.organizations.find(
            org => org.organization === formik.values.organization
        );
        const selectedBranchData = selectedOrgData?.branches.find(
            branch => branch.branchName === selectedBranchName
        );

        if (selectedBranchData) {
            setSelectedBranchId(selectedBranchData.branchId); // Store the branchId
        } else {
            setSelectedBranchId(''); // Clear branchId if no match
        }

    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="flex gap-3 justify-between pb-4">
                <div className="w-[100%]">
                    <p>Country</p>
                    <Dropdown
                        sectionStyle="my-section-style"
                        name="country"
                        value={formik.values.country}
                        onChange={handleCountrySelect}
                        placeholder="Select the Country"
                        options={countryOptions}
                    />
                    {formik.touched.country && formik.errors.country ? (
                        <div className="text-red-500 text-sm ">
                            {formik.errors.country}
                        </div>
                    ) : null}
                </div>
                <div className="w-[100%]">
                    <p>City</p>
                    <Dropdown
                        sectionStyle="my-section-style"
                        name="city"
                        value={formik.values.city}
                        onChange={handleCitySelect}
                        placeholder="Select the City"
                        options={cityOptions}
                        disabled={!formik.values.country}
                    />
                    {formik.touched.city && formik.errors.city ? (
                        <div className="text-red-500 text-sm ">
                            {formik.errors.city}
                        </div>
                    ) : null}
                </div>
                <div className="w-[100%]">
                    <p>Organization</p>
                    <Dropdown
                        sectionStyle="my-section-style"
                        name="organization"
                        value={formik.values.organization}
                        onChange={handleOrganizationSelect}
                        placeholder="Select the Organization"
                        options={organizationOptions}
                        disabled={!formik.values.city}
                    />
                    {formik.touched.organization && formik.errors.organization ? (
                        <div className="text-red-500 text-sm ">
                            {formik.errors.organization}
                        </div>
                    ) : null}
                </div>
                <div className="w-[100%]">
                    <p>Branch</p>
                    <Dropdown
                        sectionStyle="my-section-style"
                        name="branch"
                        value={formik.values.branch}
                        onChange={handleBranchSelect}
                        placeholder="Select the Branch"
                        options={branchOptions}
                        disabled={!formik.values.organization}
                    />
                    {formik.touched.branch && formik.errors.branch ? (
                        <div className="text-red-500 text-sm ">
                            {formik.errors.branch}
                        </div>
                    ) : null}
                </div>
            </div>
            {!btnName &&
                <div className="flex gap-4 justify-end mt-2">
                    <button
                        type="submit"
                        className="py-2 px-4 bg-gradient rounded-md text-white"
                    >
                        {btnName ? btnName : "Submit"}
                    </button>
                </div>
            }

        </form>
    );
}

export default BranchDropDowns;
