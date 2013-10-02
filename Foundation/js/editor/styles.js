/*
Copyright (c) 2003-2010, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

if ( 'CKEDITOR' in window) {

	CKEDITOR.stylesSet.add( 'default',
	[
		/* Block Styles */

		// These styles are already available in the "Format" combo, so they are
		// not needed here by default. You may enable them to avoid placing the
		// "Format" combo in the toolbar, maintaining the same features.
		
		{ name : 'Paragraph'		, element : 'p' },
		{ name : 'Heading 1'		, element : 'h1' },
		{ name : 'Heading 2'		, element : 'h2' },
		{ name : 'Heading 3'		, element : 'h3' },
		{ name : 'Heading 4'		, element : 'h4' },
		{ name : 'Heading 5'		, element : 'h5' },
		{ name : 'Heading 6'		, element : 'h6' },

		/* Inline Styles */
		{ name : 'Small'	, element : 'small' },

		// Button
		{ name : 'Button', element : 'a', attributes : { 'class' : 'button' } },
		{ name : 'Modal Link', element : 'a', attributes : { 'class' : 'modal' } },

		// Labels
		{ name : 'Label: Normal', element : 'span', attributes : { 'class' : 'label' } },
		{ name : 'Label: Success', element : 'span', attributes : { 'class' : 'success label' } },
		{ name : 'Label: Secondary', element : 'span', attributes : { 'class' : 'secondary label' } },
		{ name : 'Label: Alert', element : 'span', attributes : { 'class' : 'alert label' } },

		{ name : 'Label: Radius', element : 'span', attributes : { 'class' : 'radius label' } },
		{ name : 'Label: Round', element : 'span', attributes : { 'class' : 'round label' } },

		// ToolTip
		{ name : 'Tooltip: Top', element : 'a', attributes : { 'class' : 'has-tip tip-top' } },

		/* Object Styles */
		{ name : 'Align Image Left', element : 'img', attributes : {'class' : 'img-left'} },
		{ name : 'Align Image Right', element : 'img', attributes : {'class' : 'img-right'} },
		
		{ name : 'List Style: Circle'		, element : 'ul', attributes : { 'class' : 'circle' } },
		{ name : 'List Style: Square'		, element : 'ul', attributes : { 'class' : 'square' } },

		{ name : 'Video: Widescreen', element : 'div', attributes : { 'class' : 'flex-video widescreen' } }
	
	]);

}