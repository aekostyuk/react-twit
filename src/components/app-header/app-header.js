//import React from "react";
import classes from "./app-header.module.scss";

const AppHeader = () => {
	const cls = [classes.appHeader, "d-flex"];

	return (
		<div className={cls.join(" ")}>
			<h1>Alexander Kostyuk</h1>
			<h2>5 записей, из них понравилось 0</h2>
		</div>
	);
};

export default AppHeader;
