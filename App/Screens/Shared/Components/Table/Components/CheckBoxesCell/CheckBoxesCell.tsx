import CheckBoxes from "@Components/CheckBoxes/CheckBoxes"

function CheckBoxesCell(props: any) {

    const {
        name,
        list,
        watch,
        errors,
        control,
    } = props || {}

    return (
        <CheckBoxes
            control={control}
            error={errors[name]}
            name={name}
            list={list}
            watch={watch}
            iconFontSize={20}
            labelFontSize={12}
        />
    )
}

export default CheckBoxesCell