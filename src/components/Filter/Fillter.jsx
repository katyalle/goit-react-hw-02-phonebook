 const Filter = ({ findContact }) => {
	return (
		<label htmlFor="filter">
			Find contacts by name
			<input
				type="text"
				id="filter"
				name="filter"
				onInput={findContact}
			/>
		</label>
	);
};
export default Filter