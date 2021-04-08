//import React from "react";
import classes from "./app-header.module.scss";

const AppHeader = ({ liked, allPosts }) => {
	const cls = [classes.appHeader, "d-flex"];

	return (
		<div className={cls.join(" ")}>
			<h1>Alexander Kostyuk</h1>
			<h2>
				{allPosts} записей, из них понравилось {liked}
			</h2>
		</div>
	);
};

export default AppHeader;
