<cfoutput>
	<footer class="row">
		<div class="twelve columns">
			<hr />
			<div class="row">
				<div class="six columns">
					<p>&copy; Copyright no one at all. Go to town.</p>
				</div>
				<div class="six columns">
					<p class="right">Right Side</p>
				</div>
			</div>
		</div>
	</footer>

	<!--- CfStatic JS --->
		<cf_CacheOMatic key="globalfooterjs">
			#$.static().renderIncludes('js')#
		</cf_CacheOMatic>

	</body>
</html>
</cfoutput>