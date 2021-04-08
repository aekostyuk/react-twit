import classes from "./post-list.module.scss";
import PostListItem from "../post-list-item/post-list-item";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
	const cls = [classes["app-list"], "list-group"];

	return (
		<ul className={cls.join(" ")}>
			{posts.map((post, key) => (
				<PostListItem
					{...post}
					key={key}
					onDelete={() => {
						onDelete(post);
					}}
					onToggleImportant={() => onToggleImportant(post)}
					onToggleLiked={() => onToggleLiked(post)}
				/>
			))}
		</ul>
	);
};

export default PostList;
