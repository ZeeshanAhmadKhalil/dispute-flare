import TopTabs from '@Components/TopTabs/TopTabs';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import DefaultCell from '@Components/DefaultCell/DefaultCell';
import { Divider, FormControlLabel, FormGroup, useTheme, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { useForm } from 'react-hook-form';
import IOSSwitch from '@Components/IOSSwitch/IOSSwitch';
import LinkCell from '@Components/Table/Components/LinkCell/LinkCell';
import CompanyProfileForm from './Components/CompanyProfileForm';



function CompanyProfile(props) {

    const [checked, setChecked] = React.useState(true);
    const [selectedInstructions, setSelectedInstructions] = useState([])

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const tabs = [
        { label: "Dashboard", value: "client-dashboard" },
        { label: "Company Profile", value: "company-profile" },
        { label: "Team", value: "team" },
        { label: "Flare Mail", value: "flare-mail" },
        { label: "Billing", value: "billing" },
    ]

    const defaultValues = {
        firstName: null,
        lastName: null,
        ssnNumber: null,
        emailId: null,
        mobileNo: null,
        phoneNo: null,
        website: null,
        address: null,
        city: null,
        state: null,
        country: null,
        zipCode: null,
        hasPreviousAddress: null,
        previousAddress: null,
        previousCity: null,
        previousState: null,
        previousCountry: null,
        previousZipCode: null,
        provider: null,
        username: null,
        password: null,
        ssn: null,
        hasAttachmentAgreement: null,
        attachmentAgreement: null,
        requiredDocuments: [],
        otherRequiredDocument: null
    }
    const {
        palette
    } = useTheme()

    const {
        register,
        control,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        defaultValues,
    });

    useEffect(() => {
    }, [])

    return (
        <>
            <TopTabs tabs={tabs} />
            <TitleHeader
                title="Company Profile"
                actionButtons={
                    null
                }
            />

            <Divider
                sx={{
                    borderWidth: 0.5,
                    borderColor: 'borders.main',
                    backgroundColor: 'borders.main',
                }} />


            <CompanyProfileForm watch={watch}
                register={register}
                control={control}
                errors={errors} />
        </>
    )
}

export default CompanyProfile