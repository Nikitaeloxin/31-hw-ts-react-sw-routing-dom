    import React from 'react';
interface Props {
    itemTitle:string
}

const OptionItem = ({itemTitle}:Props) => {
    return (
        <option value="australia">{itemTitle}</option>
    );
};

export default OptionItem;