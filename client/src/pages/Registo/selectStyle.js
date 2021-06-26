export const colourStyles = {
    control: (styles, { data, isDisabled, isFocused, isSelected }) => ({ ...styles, backgroundColor: '#f1f6ff', border: isSelected ? '0px solid red' : '0', boxShadow: isFocused ? '0 0 0 1px #1b4a91' : 'none', borderRadius: '4px', height: '40px', padding: '0 1rem' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {

        return {
            ...styles,
            backgroundColor: isDisabled
                ? null
                : isSelected
                    ? '#d2def5'
                    : isFocused
                        ? '#e7ebf3'
                        : null,
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? ''
                    : '',

            ':active': {
                ...styles[':active'],
                backgroundColor:
                    !isDisabled && (isSelected ? '#d2def5' : '#d2def5'),
            },
        };
    },
    input: styles => ({ ...styles }),
    placeholder: styles => ({ ...styles, color: 'lightgray' }),

};