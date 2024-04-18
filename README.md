# twi-ext

Unofficial utility to develop browser extensions for Twitter / X.

> [!IMPORTANT]
> This utility works only within page scripts. Running it within a content script may result in an error.

## Installation

```bash
npm install twi-ext
```

## Usage

```typescript
import { Timeline, Tweet } from "twi-ext";

const onNewTweet = (tweet: Tweet): void => {
    // Get the tweet element.
    const tweetElement = tweet.element;
    // Get the React props of the tweet.
    const props = tweet.props;
};

const timeline = new Timeline();
timeline.onNewTweet((tweet) => {
    // Do something when a new tweet is added to the timeline.
    onNewTweet(tweet);
});
```

See the [documentation](./docs/README.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Development

```bash
npm install
```

### Build

To build the project and generate the documentation:

```bash
npm run build
```

### Format

To format the code:

```bash
npm run format
```

### Lint

To lint the code:

```bash
npm run lint
```

### Pull Requests

This repository uses [Changesets](https://github.com/changesets/changesets) to manage versioning and releases. When creating a pull request, please run the Changesets CLI and commit the changeset file.

```bash
npx changeset
```
