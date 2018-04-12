# Polis News Challenge

---

## Overview

This is a simple news site built in React for Polis.

**Features:**

* Users are able to see a list of sources on index page
* Users can click on a source card to be navigated to the 10 to articles of the source
* If the User is logged in, they will be able to save the article to his/her saved articles page
* Users can see his/her saved articles from the saved articles page
* Users can login using Google OAuth

## Install

Move to root project folder and with npm:

```
npm install
```

## Usage

**To run:**

1.  Move to root folder and with npm:

```
npm start
```

2.  Move to client folder and with npm:

```
npm start
```

## Details

**Libraries Used:**

* react-router-dom: Used for navigation and routing
* axios: Used for AJAX requests
* MaterializeCSS: for general styling
* Webpack: Used to compile ES6 to ES5
* Babel: Used to compile ES6 to ES5

## Notes: Some things I would have liked to add but did not have the time:

1.  Back/Home button link for each of the pages.
2.  Ability for user to choose sources (create another prop in data model savedSources and provide similar api end points like articles)
3.  Ability to add or remove a saved article based on the FAB button. So I could get rid of the alert messages and provide a better UX.
4.  Ability to remove saved articles with a "-" FAB button. Saved articles would refetch the saved articles after removing the article.
