import React from 'react';
import classNames from 'classnames';
import './inputGroup.css';

const InputGroup = ({children, className}) => (
<div className={classNames("inputGroup", className)}>
    {children}
</div>
)

export default InputGroup;