<cfoutput>
	<div class="row">
		<div class="twelve columns">
				<br>
				<!--- <div class="contain-to-grid fixed"> --->
					<nav class="top-bar">
						<ul>
							<!-- Title Area -->
							<li class="name">
								<h1>
									<a href="#$.createHREF(filename='')#">
										#$.siteConfig('site')#
									</a>
								</h1>
							</li>
							<li class="toggle-topbar"><a href="##"></a></li>
						</ul>

						<section>
							<cf_CacheOMatic key="dspPrimaryNav#$.content('contentid')#">
								#$.dspPrimaryNav(
									viewDepth=1,
									id="",
									class="",
									displayHome='Never',
									closePortals=false,
									showCurrentChildrenOnly=false,
									ulTopClass='left',
									liCurrentClass='active',
									ulNestedClass='dropdown',
									liHasKidsClass='has-dropdown',
									liHasKidsCustomString='',
									liHasKidsNestedClass='',
									liNestedClass='',
									aHasKidsClass='',
									aHasKidsCustomString='',
									aCurrentClass=''
								)#
								</cf_cacheomatic>
								<!--- Optional named arguments for Primary Nav are:
										displayHome="Always/Never/Conditional"
										openPortals/closePortals="contentid,contentid" (e.g. show specific sub-content in dropdown nav) --->
						</section>
					</nav>
				<!--- </div> ---> <!--- closes .fixed --->

		</div>
	</div> <!--- closes .row --->
</cfoutput>