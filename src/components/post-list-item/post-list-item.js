import classes from "./post-list-item.module.scss";

const PostListItem = () => {
	const cls = [classes["app-list-item"], "d-flex", "justify-content-between"];

	return (
		<li className={cls.join(" ")}>
			<span className={classes["app-list-item-label"]}>Hello world</span>
			<div className="d-flex justify-content-center align-items-center">
				<button className={classes["btn-star"] + " btn-sm"} type="button">
					<i className=" fa fa-star" />
				</button>
				<button className={classes["btn-trash"] + " btn-sm"} type="button">
					<i className="fa-trash fa" />
				</button>
				<i className={classes["fa-heart"] + " fa"} />
			</div>
		</li>
	);
};

export default PostListItem;
