# INTERFACE

```json
{
  "type": "authentication",
  "data": {
    ...
  }
}
```

```json
{
  "type": "request",
  "data": {
    ...
  }
}
```

- `data` fields are specified as below

### AUTHENTICATION

- `login`

```json
{
  "username": "acascas",
  "password": "ascvsbvsxd"
}
```

```json
{
  "status": "success",
  "token": "ascascasca",
}
```

```json
{
  "status": "fail",
  "token": "",
}
```

- `register`

```json
{
  "username": "ascavsas",
  "password": "ascascas",
  "detail": {
    ...
  }
}
```

```json
{
  "status": "success",
  "token": "ascascasca",
}
```

```json
{
  "status": "fail",
  "token": "",
}
```

- `logout`

```json
{
  "token": "ascavdscazscda",
}
```

### REQUEST

```json
{
  "token": "ascascasa",
  "type": "acvascas",
  "data": {
    ...
  }
}
```
