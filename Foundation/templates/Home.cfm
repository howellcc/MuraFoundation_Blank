<cfoutput>
	<cfinclude template="inc/html_head.cfm" />
	<body id="#$.getTopID()#" class="home #$.createCSSid($.content('menuTitle'))#">
		
		<!--- Nav Bar Include --->
		<cfinclude template="inc/navbar.cfm" />
		<div class="row">
			<div class="twelve columns">
				<br>
				<h1>Default <small>DO NOT USE THIS SITE</small></h1>
				<hr />
			</div>
		</div> <!--- closes .row --->

		<div class="row">
			<div class="nine columns" role="content">
				#$.dspBody(body=$.content('body'), pageTitle='', crumbList=0, showMetaImage=true)#
				#$.dspObjects(2)#
			</div>

			<!--- Sidebar --->
			<aside class="three columns">
				<div class="panel">
					<h5>Sidebar</h5>
					<p>Stuff can go here too!</p>
				</div>
				#$.dspObjects(3)#
			</aside>
		</div> <!--- closes .row --->

	<cfinclude template="inc/footer.cfm" />
</cfoutput>