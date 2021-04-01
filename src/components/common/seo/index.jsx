import React from 'react'
import Helmet from 'react-helmet'

import { url, defaultDescription, social, defaultTitle, socialLinks, address, contact, legalName, foundingDate, logo } from 'data/config'

export const SEO = ({ title = defaultTitle, description = defaultDescription, location = '' }) => {
  const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
			"${socialLinks.twitter}",
			"${socialLinks.youtube}",
			"${socialLinks.linkedin}",
			"${socialLinks.github}"
		]
  	}`

  return (
    <Helmet>
      <meta name='description' content={description} />

      <meta property='og:url' content={`${url}${location}/?ref=mulesoft.com`} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='fb:app_id' content={social.facebook} />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content={socialLinks.twitter} />
      <meta name='twitter:site' content={social.twitter} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <script type='application/ld+json'>{structuredDataOrganization}</script>
      <link rel='publisher' href={socialLinks.google} />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&display=swap'
        rel='stylesheet'
      />
      <title>{title}</title>
      <html lang='en' dir='ltr' />
    </Helmet>
  )
}
