/*
Copyright (c) 2003-2010, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

if ( 'CKEDITOR' in window) {

  // Register a templates definition set named "default".
  CKEDITOR.addTemplates( 'default',
  {
      // The name of sub folder which hold the shortcut preview images of the
      // templates.
  	//imagesPath : CKEDITOR.getUrl( themepath + '/js/editor/templates/images/' ),
  	 imagesPath : themepath + '/js/editor/templates/images/',
      // The templates definitions.
      templates :
              [
                      {
                              title: 'Alert',
                              image: '',
                              description: 'Basic Alert for inline page communication.',
                              html:
											'<div class="alert-box">' +												
												'<p>Replace with content</p>'+
												'<a href="" class="close">&times;</a>' +
											'</div>'
                      },
                      {
                              title: 'Alert Success',
                              image: '',
                              description: 'Success Alert for inline page communication.',
                              html:
											'<div class="alert-box success">' +												
												'<p>Replace with content</p>'+
												'<a href="" class="close">&times;</a>' +
											'</div>'
                      },
                      {
                              title: 'Alert Important',
                              image: '',
                              description: 'Success Alert for inline page communication.',
                              html:
											'<div class="alert-box alert">' +												
												'<p>Replace with content</p>'+
												'<a href="" class="close">&times;</a>' +
											'</div>'
                      },
                      {
                              title: '2 Columns',
                              image: 'template-cols2.gif',
                              description: 'An area with 2 equally wide columns',
                              html:
											'<div class="row">' +
												'<div class="six columns">' +
													'<h2>Replace with content</h2>'+
												'</div>' +
												'<div class="six columns">' +
													'<h2>Replace with content</h2>'+
												'</div>' +
											'</div>'
                      },
                      {
                              title: '3 Columns',
                              image: 'template-cols3.gif',
                              description: 'An area with 3 equally wide columns',
                              html:
											'<div class="row">' +
												'<div class="four columns">' +
													'<h2>Replace with content</h2>'+
												'</div>' +
												'<div class="four columns">' +
													'<h2>Replace with content</h2>'+
												'</div>' +
												'<div class="four columns">' +
													'<h2>Replace with content</h2>'+
												'</div>' +
											'</div>'
                      },
                      {
                              title: '4 Columns',
                              image: 'template-cols4.gif',
                              description: 'An area with 4 equally wide columns',
                              html:
											'<div class="row">' +
												'<div class="three columns">' +
													'<h2>Replace with content</h2>'+
												'</div>' +

												'<div class="three columns">' +
													'<h2>Replace with content</h2>'+
												'</div>' +

												'<div class="three columns">' +
													'<h2>Replace with content</h2>'+
												'</div>' +

												'<div class="three columns">' +
													'<h2>Replace with content</h2>'+
												'</div>' +
											'</div>'

                      },
                      {
                              title: '2 Columns - Main Column Right Sidebar',
                              image: 'template-cols2.gif',
                              description: 'An area with 2 columns. Wide left column, small right column ',
                              html:
											'<div class="row">' +
												'<div class="eight columns">' +
													'<h2>Replace with content</h2>'+
												'</div>' +
												'<div class="four columns">' +
													'<h2>Replace with content</h2>'+
												'</div>' +
											'</div>'
                      },
                      {
                              title: '2 Columns - Main Column Left Sidebar',
                              image: 'template-cols2.gif',
                              description: 'An area with 2 columns. Small left column, wide right column ',
                              html:
											'<div class="row">' +
												'<div class="four columns">' +
													'<h2>Replace with content</h2>'+
												'</div>' +
												'<div class="eight columns">' +
													'<h2>Replace with content</h2>'+
												'</div>' +
											'</div>'
                      }
              ]
  });

}