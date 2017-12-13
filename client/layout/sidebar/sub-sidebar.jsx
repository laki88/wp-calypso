/** @format */

/**
 * External dependencies
 */

import React from 'react';
import classNames from 'classnames';

const SubSidebar = ( { children, className } ) => (
	<ul className={ classNames( 'sidebar__subsidebar', className ) }>{ children }</ul>
);

export default SubSidebar;
