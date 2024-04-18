# React-Redux Reddit Client (ReadOnlyReddit)
This project came from a portfolio project which was part of the [Codecademy Full Stack Engineer Course](https://www.codecademy.com/career-journey/full-stack-engineer). The project uses React-Redux to create a read-only Reddit client. Users can view the Reddit front page, view post comments, and search for subreddits and posts. This is also the first project I have built where I have used component libraries. I used [Bootstrap](https://getbootstrap.com) and [react-bootstrap](https://react-bootstrap.github.io) All data is derived from the [Reddit API](https://www.reddit.com/dev/api/).

## What Did I learn?
This project was an excellent way for me to practice building redux stores and reducers and linking them with React components. I also learned a great deal about how to interact with APIs by using [Redux Toolkit's](https://redux-toolkit.js.org) `createAsyncThunk()` function. I also learned the utility of component libraries. Using Bootstrap for my layout and styling allowed me to create a basic function UI and saved me from wasting a lot of time fiddling around with CSS.

## Limitations
This app only uses the unauthenticated sections of the Reddit API. This means that there can be no interaction with posts such as sending upvotes or posting comments. I decided to make this a 'selling point' of my app and instead offer a read-only experience. Some media types (Reddit video) are not supported and the user must follow the link to Reddit to view the content. I also have not yet implemented proper selection of subs. It had been my intention to use [react-router](https://reactrouter.com/en/main) to allow the app to display different subreddit's feeds based on URL routing. I did not have time to implement this in the initial version of the app and so links to subreddits just link externally to Reddit. The app currently can only be used to view the Reddit front page or a list of posts corresponding to a search term.

## Next Steps
The next thing I would like to do with this project is to implement proper routing using [react-router](https://reactrouter.com/en/main). This would require a fairly extensive rebuild of the page logic and structure but it would open the door to displaying a list of posts based on a particular subreddit, greatly enhancing the functionality of the app.