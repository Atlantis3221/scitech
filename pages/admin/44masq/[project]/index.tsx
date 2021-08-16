import React, { useEffect, useState } from 'react'
import { Layout } from '../../../../components/layout'
import { Table, Table_body, Table_column, Table_head, Table_row } from '../../../../components/table'
import { robots2humans } from '../../../../lib'
import { IRegModalInput } from '../../../../components/modals/ModalContext'
import { getAllRequestData } from '../../../../helpers/axios'
import { useRouter } from 'next/dist/client/router'


const Results = (props) => {
	const { query: {project: project} } = useRouter()
	const [tableData, setTableData] = useState([
		{
			participantType: 'individual',
			name: 'Test testovich',
			role: 'Tester',
			company: 'TestCOO LTD',
			phone: '+123456789',
			email: "test@test.com",
			confidential: true,
			project: "becomeClient"
		}
	])
	const removeItem = (_id: string) => {
		// Requests.methods.remove(_id)
	}

	useEffect(async() => {
		const { data } = await getAllRequestData(project)
		if(data && data.length) {
			const sortedData = data.filter(res => res.project === project) ?? []
			setTableData(sortedData)
			console.log(sortedData)
		}
	},[])

	const memoizedKeys: IRegModalInput[] = ['participationType', 'name', 'role', 'company', 'phone', 'email', 'confidential']

	return (
		<Layout>
				<Table fullSize scroll>
					<Table_head>
						<Table_column key={'indexation'}> </Table_column>
						{memoizedKeys.map((item, i) => {
							return (<Table_column key={`thead_${item + i}`}>
								{robots2humans.get(item)}
							</Table_column>)
						})}
						<Table_column>Время создания</Table_column>
						<Table_column key={'removeFromTable'}></Table_column>
					</Table_head>
					<Table_body>
						{tableData.map((res, i) => {
								const date = new Date(Date.now())

								return (
									<Table_row key={`row_${i}`}>
										<Table_column key={`indexation_${i}`}>{i + 1}</Table_column>
										{memoizedKeys.map((key, j) => {
											const value = res[key]

											return <Table_column key={`col_${j}`}>{value}</Table_column>
										})}
										<Table_column>{date.toString()}</Table_column>
										<Table_column key={`removeFromTable${i}`}>
											<button onClick={() => removeItem(res._id)} className="remove_btn"></button>
										</Table_column>
									</Table_row>
								)
							})
						}
					</Table_body>
				</Table>
		</Layout>
	)
}

export default Results