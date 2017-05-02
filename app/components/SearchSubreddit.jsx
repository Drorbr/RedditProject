import React from "react";
import { Divider, FlatButton, Paper, TextField, RaisedButton, MuiThemeProvider, AppBar, TimePicker } from "material-ui";
import injectTapEventPlugin from 'react-tap-event-plugin';
import DisplaySearchResults from "./DisplaySearchResults";


injectTapEventPlugin();

class SearchSubreddit extends React.Component {
	constructor() {
		super();
		this.state = {
			subreddit: "",
			searchWasClicked: false,
			needArray: [],
			renderNeed: false,

		};
	}
	addNeed(e) {
		e.preventDefault();
    	this.setState({
		renderNeed: true, 	
       	needArray: [<DisplaySearchResults subreddit={this.state.subreddit}  key={Math.random()}/>, ...this.state.needArray]
     });
	if(this.searchWasClicked)
		this.setState({searchWasClicked: false});
		const { subreddit } = this.state;
		console.log(subreddit);
		this.setState({searchWasClicked: true});
}

	handleChangesSubreddit(event, subreddit) {
		this.setState({ subreddit });
	}

	render() {
		return (
			<MuiThemeProvider>
		<div>
		<AppBar title="Reddit Gallery" showMenuIconButton={false} width="70%" />
		<br />
		<form >
				<TextField
					ref="subreddit"
					hintText="Type subreddit"
					value={this.state.subreddit}
					onChange={this.handleChangesSubreddit.bind(this)}
				/>		
					<FlatButton
				label="Search"
				primary={true}
				onTouchTap={this.addNeed.bind(this)}
				/>

			</form>
			<br/>
			{ this.state.renderNeed ? this.state.needArray : null}

	</div>
	</MuiThemeProvider>
		);
	}
}

export default SearchSubreddit;

