import ScrollContainer from '@Components/ScrollContainer/ScrollContainer';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import TopTabs from '@Components/TopTabs/TopTabs';
import { useForm } from 'react-hook-form';
import CompanyProfileForm from './Components/CompanyProfileForm';

function CompanyProfile() {

    const tabs = [
        { label: "Dashboard", value: "company-dashboard" },
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

    return (
        <>
            <TopTabs tabs={tabs} />
            <ScrollContainer>
                <TitleHeader
                    title="Company Profile"
                    actionButtons={
                        null
                    }
                />
                <CompanyProfileForm watch={watch}
                    register={register}
                    control={control}
                    errors={errors}
                />
            </ScrollContainer>
        </>
    )
}

export default CompanyProfile