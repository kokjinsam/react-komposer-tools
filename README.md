# Tools for React Komposer

> For more information on React Komposer, see [here](https://github.com/kadirahq/react-komposer).

## About this Package

This package exposes three React Komposer helper functions from three other npm packages:

1. **composeWatchQuery** from `react-komposer-watchQuery`
2. **composeWithQuery** from `react-komposer-query`
3. **composeWithRedux** from `react-komposer-redux`

## Installation

```
npm install --save react-komposer react-komposer-tools
```

If you want to use `composeWithQuery` or `composeWatchQuery`, you need to install `apollo-client`.

```
npm install --save apollo-client
```

## Usage

### Prerequisites

Assuming you're using [Mantra](https://github.com/kadirahq/mantra), you need to provide Apollo Client in your `client/configs/context.js`. This can be easily done using [`apollo-tools`](https://github.com/sammkj/apollo-tools).

For example,

```
import * as Collections from '../../lib/collections';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { Tracker } from 'meteor/tracker';
import { configureGraphQLClient } from 'apollo-tools';

export default function () {
  const Client = configureGraphQLClient({
    url: '/graphql',
    auth: false,
  });

  return {
    Meteor,
    FlowRouter,
    Collections,
    Tracker,
    Client, // make sure to provide this
  };
}
```

### composeWatchQuery

Here are the steps to use composeWatchQuery.

First create your query,

```
const options = {
  query: `
    query todos($type: TodoType) {
      allTodos(type: $type) {
        _id
        todo
        createdAt
      }
    }
  `,
  variables: {
    type: 'ACTIVE'
  }
};
```

Then map the result returned by the query. The query returns two things: `data` and `errors`

```
const resultMapper = ({
  data,
  errors,
}) => {
  const {
    allTodos,
  } = data;

  return {
    todos: allTodos,
    errors,
  };
};
```

Finally, composeWatchQuery!

```
composeAll(
  composeWatchQuery(options, resultMapper),
  useDeps()
)(ComponentA);
```

### composeWithQuery

`composeWithQuery` is the same as `composeWatchQuery` except at the final step, you do this:

```
composeAll(
  composeWithQuery(options, resultMapper),
  useDeps()
)(ComponentA);
```

### composeWithRedux

`composeWithRedux` is an improved version of Arunoda's code in [React Storybook](https://github.com/kadirahq/react-storybook/tree/master/src/client/manager).

Assuming that you're using Mantra, in your `client/configs/context.js`, you need to supply Redux `Store`.

For example,

```
import * as Collections from '../../lib/collections';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { Tracker } from 'meteor/tracker';
import { createStore } from 'redux';

export default function ({ reducer }) {
  const Store = createStore(reducer);

  return {
    Meteor,
    FlowRouter,
    Collections,
    Tracker,
    Store, // make sure to supply this
    dispatch: Store.dispatch,
  };
}
```

Then in a Mantra container, you write your state mapper like below,

```
import ComponentA from '../../components/component-a';
import composeWithRedux from 'react-komposer-redux';
import { useDeps, composeAll } from 'mantra-core';

export const mapStateToProps = ({ layout }) => {
  // layout is from reducers
  const { windowWidth } = layout;
  const data = {
    windowWidth,
  };

  return data;
};

export const mapDepsToProps = (context, actions) => ({
  context: () => context,
});

export default composeAll(
  composeWithRedux(mapStateToProps),
  useDeps()
)(ComponentA);
```
