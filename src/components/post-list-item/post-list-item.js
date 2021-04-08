import { Component } from "react";
import classes from "./post-list-item.module.scss";

class PostListItem extends Component {
	render() {
		const {
			label,
			onDelete,
			onToggleImportant,
			onToggleLiked,
			important,
			like,
		} = this.props;
		const cls = [classes["app-list-item"], "d-flex", "justify-content-between"];
		if (important) cls.push(classes.important);
		if (like) cls.push(classes.like);

		return (
			<li className={classes["list-group-item"] + " list-group-item"}>
				<div className={cls.join(" ")}>
					<span
						className={classes["app-list-item-label"]}
						onClick={onToggleLiked}
					>
						{label}
					</span>
					<div className="d-flex justify-content-center align-items-center">
						<button
							className={classes["btn-star"] + " btn-sm"}
							type="button"
							onClick={onToggleImportant}
						>
							<i className=" fa fa-star" />
						</button>
						<button
							className={classes["btn-trash"] + " btn-sm"}
							type="button"
							onClick={onDelete}
						>
							<i className="fa-trash fa" />
						</button>
						<i className={classes["fa-heart"] + " fa fa-heart"} />
					</div>
				</div>
			</li>
		);
	}
}

export default PostListItem;
