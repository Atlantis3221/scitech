import React from 'react'

export function Page(props) {
	const { children } = props

	// <!-- Yandex.Metrika counter-->
	const yandexMetrics = () => {
		return (
			"<script type=\"text/javascript\" >" +
					"(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};" +
					"m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})" +
					"(window, document, \"script\", \"https://mc.yandex.ru/metrika/tag.js\", \"ym\");" +
					"ym(68695612, \"init\", {" +
					"clickmap:true," +
					"trackLinks:true," +
					"accurateTrackBounce:true," +
					"webvisor:true" +
			"});" +
			"</script>" +
			"<noscript><div><img src=\"https://mc.yandex.ru/watch/68695612\" loading=\"lazy\" style=\"position:absolute; left:-9999px;\" alt=\"\" /></div></noscript>"
		)
	}

	return <React.Fragment>
		{children}
		<div dangerouslySetInnerHTML={{__html: yandexMetrics()}}/>
	</React.Fragment>
}