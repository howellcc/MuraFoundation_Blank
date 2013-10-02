<cfoutput>
	<cfinclude template="inc/html_head.cfm" />
	<body id="#$.getTopID()#" class="full-width #$.createCSSid($.content('menuTitle'))#">	
		
		<!--- Nav Bar Include --->
		<cfinclude template="inc/navbar.cfm" />

		<div class="row">
      		<div class="twelve columns" role="content">
				<cfinclude template="inc/breadcrumb.cfm" />
				#$.dspBody(body=$.content('body'),crumbList=0,showMetaImage=1)#
				#$.dspObjects(2)#
			</div>
		</div> <!--- closes .row --->

	<cfinclude template="inc/footer.cfm" />	
</cfoutput>