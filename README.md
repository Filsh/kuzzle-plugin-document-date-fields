## Installation

```sh
/var/app/bin/kuzzle plugins --install --gitUrl https://github.com/Filsh/kuzzle-plugin-auth-passport-oauth.git#persist_map kuzzle-plugin-auth-passport-oauth
/var/app/bin/kuzzle plugins --importConfig /plugins/kuzzle-plugin-auth-passport-oauth/config.json kuzzle-plugin-auth-passport-oauth
```

## Example config.json

```js
// JSON
{
  "pipes": {
    "data:beforeCreate": [
      {
        "field": "createdAt",
        "expression": "Date.now()"
      },
      {
        "field": "updatedAt",
        "expression": "Date.now()"
      }
    ]
  }
}
```

or

```js
// JSON
{
  "pipes": {
    "data:beforeCreate": [
      {
        "fields": ["createdAt", "updatedAt"],
        "expression": "Date.now()"
      }
    ]
  }
}
```
