import Router,{  useRouter } from "next/dist/client/router"
import { useEffect } from "react"
import Head from 'next/head'

const Index = () => {
	const { query, replace } = useRouter()

	useEffect(() => {
		console.log()
		Router.replace(`/ru`)
	}, [query])

	return (
		<>
			<Head>
				<meta name="robots" content="noindex, nofollow" />
			</Head>
		</>
	)
}

export default Index
