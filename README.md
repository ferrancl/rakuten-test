# RAKUTEN-TEST
React-redux project that consumes the Rakuten API. The application shows the movies separated by category and shows a detail page if we click on a movie.

## 1.Table of contents
* [Technologies](#2.technologies)
* [Setup](#3.setup)
* [Structure](#4.structure)
** [Pages](#4.1.pages)
*** [Not-Found](#4.1.1.not-found)
** [Containers](#4.2.containers)
** [Components](#4.3.components)
* [Redux](#5.redux)
** [Containers](#5.1.State)
*** [Error State](#5.1.1.error state)
*** [Movies and Details State](#5.1.2.movies and details state)
** [Selectors](#5.2.selectors)
*** [Error Selector](#5.2.1.error selector)
*** [Movie Selector](#5.2.2.movie selector)
*** [Details Selector](#5.2.3.details selector)
** [Middleware](#5.3.middleware)
* [Code Coverage](#6.code coverage)
* [Conclusion](#7.conclusion)

## 2.Technologies
* Javascript
* React v.
* Redux v.
* Jest v26.0.6
* Webpack v.5

## 3.Setup
To run this project, you have to:

```bash
# Clone this repository
$ git clone https://github.com/ferrancl/rakuten-test

# Go into the repository
$ cd rakuten-test

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## 4.Structure

The application is split in views, containers and components.
This structure has been made for making the application cleaner, and if something needs to be corrected, the person that is going to make the change knows immediately which file to go.

### 4.1.Pages
In App.js there are the different routes managed with react-router.
In this project, there are three different pages: Home, Detail and Not-found. Inside them, the containers and components are rendered.\

#### 4.1.1.Not-Found
I want to point out when this page is being rendered. There are two situations in which the application will guide us to the ./not-found path:
* If we put directly this path in the url bar.
* If we put a invalid path

It is important to notice that an invalid path can be for two different situations. An invalid path could be a path that does not appear in our routes, so, we redirect the user to this view.\
But it is important to consider that, if we put ./movies/movie-that-not-exists, if we didn't manage the error when we make the API call, it would be a valid path.
We will deepen into it later, in the [Redux](#5. redux) section.

### 4.2.Containers
Containers encapsulate the logic needed and are responsible for providing it to their child components.

### 4.3.Components
Components only receive props and render their content. 

## 5.Redux
Redux is the responsible for managing the global state of the application. Actions, reducers, thunks, selectors and the store are separated in their particular folder.\
### 5.1.States
#### 5.1.1.Error State
There is a global error state for the whole app. ErrorContainer has a selector that distinguish if the error is 404 or not. This is because if the error is 404, we will redirect
to the Not-Found page and not show the ErrorMessage. The ErrorMessage The error is cleaned automatically after 4 seconds.

#### 5.1.2.Movies and Details State
Both Movies and Details state have loading state and an array with the data. The data fetched is put into them and is processed with selectors.\

### 5.2.Selectors
#### 5.2.1. Error Selector
This selector is looking to the state.error and passes the error to the ErrorMessage component to show it. If error is 404, it renders the Not-Found page.

#### 5.2.2. Movies Selector
This selector looks to state.movies, which is made up state.movies.loading and state.movies.movies (the data). If the app has already made the call to the API and has set the movies state with the data, the application doesn't fetch the data again.

#### 5.2.3. Details Selector
It works in the same way like state.movies but looks to state.details. State.details.details save the data of the last one details of the movie selected. I have decided to add only the last and not the entire data of the details visited for avoiding to iterate every time we render the Detail page.

### 5.3.Middlware
The middlware used for managing the asynchronous calls is redux-thunk.

## 6.Code Coverage

## 7.Conclusion
The main objective of the project has been replicate this part of the Rakuten webpage, making use of good practices, clean code and reusable, with a good structure 
and easy to understand for a person who sees the code for first time.
The next step will be add more information in the detail page, like the official webpage of Rakuten.
