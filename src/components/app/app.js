//import React from "react";
import classes from "./app.module.scss";
import panelClasses from "../search-panel/search-panel.module.scss";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ label: "WTF", important: true, like: false },
				{ label: "Oh god...", important: false, like: true },
				{ label: "Oh dog...", important: false, like: false },
			],
		};

		this.deleteItem = this.deleteItem.bind(this);
	}

	deleteItem(post) {
		this.setState(({ data }) => {
			const newData = data.filter((elem) => elem !== post);

			return {
				data: newData,
			};
		});
	}

	addItem(text) {
		const newItem = {
			label: text,
			important: false,
			like: false,
		};
		console.log(text);

		this.setState(({ data }) => {
			return {
				data: [...data, newItem],
			};
		});
	}

	onToggleImportant(post) {
		this.setState(({ data }) => {
			const idx = data.findIndex((elem) => elem === post);
			const old = data[idx];
			const newItem = { ...old, important: !old.important };
			const newData = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)];
			return {
				data: newData,
			};
		});
	}

	onToggleLiked(post) {
		this.setState(({ data }) => {
			// const newData = data.map((elem) => {
			// 	if (elem === post) elem.like = !elem.like;
			// 	console.log(elem);
			// 	return elem;
			// });
			// console.log(newData);
			const idx = data.findIndex((elem) => elem === post);
			const old = data[idx];
			const newItem = { ...old, like: !old.like };
			const newData = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)];
			return {
				data: newData,
			};
		});
	}

	render() {
		const { data } = this.state;
		const liked = data.filter((item) => item.like).length;
		const allPosts = data.length;

		return (
			<div className={classes.app}>
				<AppHeader liked={liked} allPosts={allPosts} />
				<div className={panelClasses["search-panel"] + " d-flex"}>
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList
					posts={data}
					onDelete={(post) => this.deleteItem(post)}
					onToggleImportant={this.onToggleImportant.bind(this)}
					onToggleLiked={this.onToggleLiked.bind(this)}
				/>
				<PostAddForm onAdd={this.addItem.bind(this)} />
			</div>
		);
	}
}

export default App;
