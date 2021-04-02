import classes from "./post-list.module.scss";
import PostListItem from "../post-list-item/post-list-item";

const PostList = () => {
	const cls = [classes["app-list"], "list-group"];

	return (
		<ul className={cls.join(" ")}>
			<PostListItem />
			<PostListItem />
			<PostListItem />
		</ul>
	);
};

export default PostList;
