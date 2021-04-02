//import React from "react";
import classes from "./app.module.scss";
import panelClasses from "../search-panel/search-panel.module.scss";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

const App = () => {
	return (
		<div className={classes.app}>
			<AppHeader />
			<div className={panelClasses["search-panel"] + " d-flex"}>
				<SearchPanel />
				<PostStatusFilter />
			</div>
			<PostList />
			<PostAddForm />
		</div>
	);
};

export default App;
