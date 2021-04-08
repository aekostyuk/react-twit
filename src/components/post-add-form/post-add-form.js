import classes from "./post-add-form.module.scss";

const PostAddForm = ({ onAdd }) => {
	const cls = [classes.bottomPanel, "d-flex"];

	return (
		<div className={cls.join(" ")}>
			<input
				className={"form-control " + classes.newPostLabel}
				type="text"
				placeholder="О чем вы думаете сейчас?"
			/>
			<button
				className="btn btn-outline-secondary"
				type="submit"
				onClick={() => onAdd("Hello")}
			>
				Добавить
			</button>
		</div>
	);
};

export default PostAddForm;
