import classes from "./search-panel.module.scss";

const SearchPanel = () => {
	const cls = [classes["search-input"], "form-control"];

	return (
		<input
			className={cls.join(" ")}
			type="text"
			placeholder="Поиск по записям"
		/>
	);
};

export default SearchPanel;
