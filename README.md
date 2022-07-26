# Sample project demonstrating issue 2040 in Ajv

This repo demonstrates the error that occurs in [Ajv] when trying to make a JSON
schema that expects a key property to an optional string and not null.

[Ajv issue #2040]

## Setup

```
yarn install
```

## See failed build

```
yarn build
```

## See failed tests

```
yarn test
```

[Ajv issue #2040]: https://github.com/ajv-validator/ajv/issues/2040
[Ajv]: https://github.com/ajv-validator/ajv
