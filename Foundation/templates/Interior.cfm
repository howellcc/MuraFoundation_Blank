<cfoutput>
	<cfinclude template="inc/html_head.cfm" />
	<body id="#$.getTopID()#" class="interior #$.createCSSid($.content('menuTitle'))#">

		<!--- Nav Bar Include --->
		<cfinclude template="inc/navbar.cfm" />
      	
      	<div class="row">
      		<div class="nine columns" role="content">
      			<cfinclude template="inc/breadcrumb.cfm" />
				#$.dspBody(body=$.content('body'),crumbList=0,showMetaImage=1)#
				#$.dspObjects(2)#
      		</div>

      		<!--- Sidebar --->
      		<aside class="three columns">
      			#$.dspObjects(3)#
      		</aside>
      	</div> <!--- closes .row --->

		<!--- Modal Component Include --->
      	#$.dspObject('component','E71E2F73-C291-72EF-225CFAC9B4BF1000')#

	<cfinclude template="inc/footer.cfm" />	
</cfoutput>