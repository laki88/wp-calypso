/** @format */

/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import PostDiffViewer from 'blocks/post-diff-viewer';

export default function PostDiffViewerExample() {
	const diff = {
		title: [
			{ op: 'copy', value: 'Bitcoin ' },
			{ op: 'del', value: 'climbs' },
			{ op: 'add', value: 'rockets' },
			{ op: 'copy', value: ' above previous high' },
			{ op: 'del', value: '.' },
			{ op: 'add', value: '!' },
		],
		content: [
			{ op: 'copy', value: 'Today the price of Bitcoin ' },
			{ op: 'del', value: 'climbed' },
			{ op: 'add', value: 'rocketed' },
			{ op: 'copy', value: ' to over ' },
			{ op: 'del', value: '$15000' },
			{ op: 'add', value: '$16000' },
			{
				op: 'copy',
				value:
					'.\n Experts believe this is a result of the influx of retail investors scrambling to get in on the action.',
			},
			{ op: 'copy', value: '\n But along with this ' },
			{ op: 'add', value: 'huge ' },
			{
				op: 'copy',
				value:
					'growth comes more criticism as more and more financial professionals warn that Bitcoin may be a bubble waiting to burst.',
			},
		],
	};

	return <PostDiffViewer diff={ diff } />;
}

PostDiffViewerExample.displayName = 'PostDiffViewerExample';