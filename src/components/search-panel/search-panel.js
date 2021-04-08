import { Component } from "react";
import classes from "./search-panel.module.scss";

class SearchPanel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: "",
		};
	}

	onUpdateSearch(event) {
		const term = event.target.value;

		this.setState({
			term,
		});
		this.props.onUpdateSearch(term);
	}

	render() {
		const cls = [classes["search-input"], "form-control"];

		return (
			<input
				className={cls.join(" ")}
				type="text"
				placeholder="Поиск по записям"
				onChange={this.onUpdateSearch.bind(this)}
				value={this.state.term}
			/>
		);
	}
}

export default SearchPanel;
