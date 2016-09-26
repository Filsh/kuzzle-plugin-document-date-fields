## Installation

```sh
/var/app/bin/kuzzle plugins --install --gitUrl https://github.com/Filsh/kuzzle-plugin-evaluate-fields.git kuzzle-plugin-evaluate-fields
/var/app/bin/kuzzle plugins --importConfig /plugins/kuzzle-plugin-evaluate-fields/config.json kuzzle-plugin-evaluate-fields
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
