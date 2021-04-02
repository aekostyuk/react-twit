import classes from "./post-add-form.module.scss";

const PostAddForm = () => {
	const cls = [classes.bottomPanel, "d-flex"];

	return (
		<form className={cls.join(" ")}>
			<input
				className={"form-control " + classes.newPostLabel}
				type="text"
				placeholder="О чем вы думаете сейчас?"
			/>
			<button className="btn btn-outline-secondary" type="submit">
				Добавить
			</button>
		</form>
	);
};

export default PostAddForm;
