export const cls = (input: string) =>
	input
		.replace(/\s+/gm, ' ')
		.split(' ')
		.filter(cond => typeof cond === 'string')
		.join(' ')
		.trim()

export const formatISODate = (inputDate: string): string => {
	const date = new Date(inputDate)

	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
	}

	const formattedDate = date.toLocaleString('en-US', options)

	const [formattedMonth, formattedTime] = formattedDate.split(', ')
	const [year, month, day] = formattedMonth.split('/')
	const [hour, minute] = formattedTime.split(':')

	return `${day}.${month}.${year}, ${hour}:${minute}`
}
