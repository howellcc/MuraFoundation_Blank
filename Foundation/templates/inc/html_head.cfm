<cfoutput>
<!DOCTYPE html>
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"<cfif $.hasFETools()> class="mura-edit-mode"</cfif>> <!--<![endif]-->
<head>
	<meta charset="utf-8" />

	<!-- Set the viewport width to device width for mobile -->
	<meta name="viewport" content="width=device-width, initial-scale=1"/>

	<title>#HTMLEditFormat($.content('HTMLTitle'))# - #HTMLEditFormat($.siteConfig('site'))#</title>
	<meta name="description" content="#HTMLEditFormat($.content('metaDesc'))#">
	<meta name="keywords" content="#HTMLEditFormat($.content('metaKeywords'))#">
	<cfif len($.content('credits'))><meta name="author" content="#HTMLEditFormat($.content('credits'))#" /></cfif>
	<meta name="generator" content="Mura CMS #$.globalConfig('version')#" />

	<!--- Favicon --->
	<link rel="shortcut icon" href="#$.siteConfig('themeAssetPath')#/images/ico/favicon.ico">

	<!--- CSS --->
	<!--- <link rel="stylesheet" href="#$.siteConfig('assetPath')#/css/mura.6.0.min.css"> --->

	<!--- CfStatic CSS --->
	<cf_CacheOMatic key="globalheadercss">
		#$.static().renderIncludes('css')#
	</cf_CacheOMatic>

	<!--- CDN jQuery With Local Backup --->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="#$.siteConfig('assetPath')#/jquery/jquery.js">\x3C/script>')</script>

	<!--- IE SHIM - for IE6-8 support of HTML5 elements --->
	<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	<!--- MURA Feeds --->
	<cfset rs=$.getBean('feedManager').getFeeds($.event('siteID'),'Local',true,true) />
	<cfloop query="rs"><link rel="alternate" type="application/rss+xml" title="#HTMLEditFormat($.siteConfig('site'))# - #HTMLEditFormat(rs.name)#" href="#XMLFormat('http://#listFirst(cgi.http_host,":")##$.globalConfig('context')#/tasks/feed/?feedID=#rs.feedID#')#"></cfloop>
</head>
</cfoutput>