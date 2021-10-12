const Results = () => {
	return (<div></div>)
}

export default Results;

export async function getServerSideProps(ctx) {
	const { id } = ctx.query
	const newId = id.split('_')[1]
	return {
		redirect: {
			destination: `/admin/44masq/${newId}/`,
			permanent:true
		}
	}
}
