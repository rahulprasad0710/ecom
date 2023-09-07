import Select from "react-select";
const ReactMultiSelect = (props) => {
    // eslint-disable-next-line react/prop-types
    const { name, defaultValue, options, value, setValue } = props;
    // [colourOptions[2], colourOptions[3]]
    return (
        <Select
            defaultValue={defaultValue}
            isMulti
            name={name}
            value={value}
            onChange={(e) => setValue(e)}
            options={options}
            className='basic-multi-select'
            classNamePrefix='select'
        />
    );
};

export default ReactMultiSelect;
