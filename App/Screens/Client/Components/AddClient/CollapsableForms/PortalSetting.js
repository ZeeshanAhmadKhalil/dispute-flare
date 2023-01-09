import CheckBoxes from '@Components/CheckBoxes/CheckBoxes';
import CollapsableForm from '@Components/CollapsableForm/CollapsableForm';
import DropDown from '@Components/DropDown/DropDown';
import RadioBtns from '@Components/RadioBtns/RadioBtns';
import TextInput from '@Components/TextInput/TextInput';
import {
    Grid,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import cls from 'classnames';
import { useSelector } from 'react-redux';

const Label = styled(Typography)(({ theme }) => {

    const {
        text: { xxxGrey },
    } = theme.palette

    return {
        color: xxxGrey,
        fontWeight: 500,
    }
})

function PortalSetting(props) {

    const {
        control,
        register,
        errors,
        watch,
    } = props || {}

    const {
        palette: { }
    } = useTheme()

    const {
    } = useSelector(state => state.clients)

    let attachmentAgreements = [
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
        { label: "Option 3", value: 3 },
        { label: "Option 4", value: 4 },
        { label: "Option 5", value: 5 },
    ]
    let requiredDocumentsList = [
        { label: "Id", value: 1 },
        { label: "Ssn", value: 2 },
        { label: "Driver's License", value: 3 },
        { label: "Bank Statement", value: 4 },
        { label: "Other", value: 5 },
    ]

    return (
        <CollapsableForm
            title="Portal Setting"
        >
            <Grid
                container
                rowSpacing={3}
                className={cls(
                    'border-red-700',
                    'border-0',
                    'flex',
                    'items-center',
                )}
            >
                <Grid item xs="12">
                    <Grid
                        container
                        rowSpacing={2}
                        className={cls(
                            'border-red-700',
                            'border-0',
                            'flex',
                            'items-center',
                        )}>
                        <Grid item md="2" xs="12">
                            <Label
                                variant="subtitle1"
                            >
                                Attachment Agreement
                            </Label>
                        </Grid>
                        <Grid item md="10" xs="12">
                            <RadioBtns
                                control={control}
                                name="hasAttachmentAgreement"
                                error={errors.hasAttachmentAgreement}
                                list={[
                                    { label: "Yes", value: 1 },
                                    { label: "No", value: 0 },
                                ]}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                {watch("hasAttachmentAgreement") == 1 &&
                    <Grid item xs="12">
                        <Grid
                            container
                            rowSpacing={2}
                            className={cls(
                                'border-red-700',
                                'border-0',
                                'flex',
                                'items-center',
                            )}>
                            <Grid item md="2" xs="12">
                            </Grid>
                            <Grid item md="10" xs="12">
                                <DropDown
                                    watch={watch}
                                    register={register("attachmentAgreement")}
                                    list={attachmentAgreements}
                                    name="attachmentAgreement"
                                    error={errors.attachmentAgreement}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                }
                <Grid item xs="12">
                    <Grid
                        container
                        rowSpacing={2}
                        className={cls(
                            'border-red-700',
                            'border-0',
                            'flex',
                            'items-center',
                        )}>
                        <Grid item md="2" xs="12">
                            <Label
                                variant="subtitle1"
                            >
                                Required Documents
                            </Label>
                        </Grid>
                        <Grid item md="10" xs="12">
                            <CheckBoxes
                                control={control}
                                name="requiredDocuments"
                                error={errors.requiredDocuments}
                                list={requiredDocumentsList}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                {watch("requiredDocuments").includes(5) &&
                    <Grid item xs="12">
                        <Grid
                            container
                            rowSpacing={2}
                            className={cls(
                                'border-red-700',
                                'border-0',
                                'flex',
                                'items-center',
                            )}>
                            <Grid item md="2" xs="12">
                            </Grid>
                            <Grid item md="10" xs="12">
                                <TextInput
                                    register={register("otherRequiredDocument")}
                                    name="otherRequiredDocument"
                                    error={errors.otherRequiredDocument}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                }
            </Grid>
        </CollapsableForm >
    )
}

export default PortalSetting