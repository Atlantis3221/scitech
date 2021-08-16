import React from 'react'
import { Layout } from '../../../../components/layout'
import { Table, Table_body, Table_column, Table_head, Table_row } from '../../../../components/table'
import { robots2humans } from '../../../../lib'
import { IRegModalInput } from '../../../../components/modals/ModalContext'


export default function Results({ _result }) {
	console.log(_result)

	const removeItem = (_id: string) => {
		// Requests.methods.remove(_id)
	}

	const memoizedKeys: IRegModalInput[] = ['participationType', 'name', 'role', 'company', 'phone', 'email', 'policy']
	const tableData = [
		{
			createdAt: 1629059201206,
			group: "scienceLeadSchoolNextSet",  // the same as in sendpulse
			payload: {
				participantType: 'individual',
				name: 'Test testovich',
				role: 'Tester',
				company: 'TestCOO LTD',
				phone: '+123456789',
				email: "test@test.com",
				policy: true,
			}
		}
	]

	return (
		<Layout>
				<Table fullSize scroll>
					<Table_head>
						<Table_column key={'indexation'}> </Table_column>
						{memoizedKeys.map((item, i) => {
							console.log(robots2humans.get(item))
							return (<Table_column key={`thead_${item + i}`}>
								{robots2humans.get(item)}
							</Table_column>)
						})}
						<Table_column>Время создания</Table_column>
						<Table_column key={'removeFromTable'}></Table_column>
					</Table_head>
					<Table_body>
						{tableData.map(({ payload, createdAt, _id }, i) => {
								const date = new Date(createdAt)

								return (
									<Table_row key={`row_${i}`}>
										<Table_column key={`indexation_${i}`}>{i + 1}</Table_column>
										{memoizedKeys.map((key, j) => {
											const value = payload[key]

											return <Table_column key={`col_${j}`}>{value}</Table_column>
										})}
										<Table_column>{date.toString()}</Table_column>
										<Table_column key={`removeFromTable${i}`}>
											<button onClick={() => removeItem(_id)} className="remove_btn"></button>
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