# REQUEST

## TYPE 1: DETAIL

```json
{
  "token": "acascas",
  "type": "detail",
  "data": {
    "detailType": "ascascac",
    "detailData": "acacazxcs"
  }
}
```
```
detailType: {
  1: `course`, // detailData is course code
  2: `course-material`, // detailData is type of material
  3: `tutor-matching`, // return tutor status: for both pho`s and tutors
  4: `quiz-mark`, // detailData is course code and quiz number
  5. `quiz-leaderboard` // detailData is course code, quiz number
}
```

## TYPE 2: UPLOAD MATERIAL

```json
{
  "token": "acascas",
  "type": "upload",
  "data": {
    "uploadCourse": "xasacas",
    "uploadType": "ascasca",
    "uploadData": "binary-encoded"
  }
}
```


## TYPE 3: TUTOR ACTIVATE
```json
{
  "token": "ascasaca",
  "type": "tutoractivate",
  "data": {
    "registerCourse": "scascasc",
  }
}
```

