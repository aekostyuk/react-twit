import { Component } from "react";
import classes from "./post-add-form.module.scss";

class PostAddForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: "",
		};
	}

	onValueChange(event) {
		this.setState({
			text: event.target.value,
		});
	}

	onSubmit(event) {
		event.preventDefault();
		this.props.onAdd(this.state.text);
		this.setState({
			text: "",
		});
	}

	render() {
		const cls = [classes.bottomPanel, "d-flex"];
		return (
			<form className={cls.join(" ")} onSubmit={this.onSubmit.bind(this)}>
				<input
					className={"form-control " + classes.newPostLabel}
					type="text"
					placeholder="О чем вы думаете сейчас?"
					onChange={this.onValueChange.bind(this)}
					value={this.state.text}
				/>
				<button className="btn btn-outline-secondary" type="submit">
					Добавить
				</button>
			</form>
		);
	}
}

export default PostAddForm;
