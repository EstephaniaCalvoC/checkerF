# checkerF
Script to check Holberton task from your Terminal 🍔

### Functionalities:
* Check Holberton tasks.

## Table of Content
* [Installation](#installation)
* [File Descriptions](#file-descriptions)
* [Usage](#usage)
* [Examples of use](#examples-of-use)
* [Prerequisites](#prerequisites)
* [Bugs](#bugs)
* [Authors](#authors)
* [License](#license)

## Installation
* Clone this repository: `git clone https://github.com/EstephaniaCalvoC/checkerF.git"`
* Access checkerF directory: `cd checkerF`
* run file: `./install.sh` and fill in the data.

## File Descriptions
[package-lock.json](package-lock.json) - no sé :v

[package.json](package.json) - This file is very important as it saves JavaScript dependencies.

## Usage


## Examples of use

### Authentication
```
$ curl -XPOST https://intranet.hbtn.io/users/auth_token.json -H "Content-Type: application/json" -d '{"api_key": "1234567890", "email": "guillaume@holbertonschool.com", "password": "HolbertonForever", "scope": "checker"}'
{
    "user_id": 1,
    "full_name": "Guillaume Salva",
    "auth_token": "0123456789abcdef",
    "expiration_date": "11/11/2019 10:49:00"
}
$
```

### Get my profile
```
$ curl -XGET https://intranet.hbtn.io/users/me.json?auth_token=0123456789abcdef -H "Content-Type: application/json"
{
    "id": 1,
    "email": "guillaume@holbertonschool.com",
    "full_name": "Guillaume Salva",
    "first_name": "Guillaume",
    "last_name": "Salva",
    "linkedin_url": "https://www.linkedin.com/in/guillaume-salva-35320314/",
    "twitter_username": "guillaumesalva",
    "github_username":"papamuziko",
    "profile_pic":"https://..."
}
$
```

### Get a project
```
$ curl -XGET https://intranet.hbtn.io/projects/434.json?auth_token=0123456789abcdef -H "Content-Type: application/json"
{
    "id": 434,
    "name": "Hack day: Checker challenge!",
    "track_id": 6,
    "created_at": "2018-04-24T01:29:24.000Z",
    "updated_at": "2019-10-02T21:01:17.000Z",
    "tasks": [
        {
            "id": 3433,
            "title": "Evaluation",
            "position": 1,
            "checker_available": false,
            "github_repo": "",
            "github_dir": "",
            "github_file": ""
        }
    ]
}
$
```

### Get a task
```
$ curl -XGET https://intranet.hbtn.io/tasks/1007.json?auth_token=0123456789abcdef -H "Content-Type: application/json"
{
    "id": 1007,
    "title": "Run Python file",
    "github_repo": "holbertonschool-higher_level_programming",
    "github_dir": "0x00-python-hello_world",
    "github_file": "0-run",
    "position": 1,
    "project_id": 231,
    "created_at": "2018-05-08T04:25:53.000Z",
    "updated_at": "2019-09-30T04:34:50.000Z",
    "checker_available":true
}
$
```

### Request a correction
```
$ curl -XPOST https://intranet.hbtn.io/tasks/1007/start_correction.json?auth_token=0123456789abcdef -H "Content-Type: application/json" -d ""
{
    "id": 1408957
}
$
```

### Get a correction Result
```
$ curl -XGET https://intranet.hbtn.io/correction_requests/1408957.json?auth_token=0123456789abcdef -H "Content-Type: application/json"
{
    "id": 1408957,
    "user_id": 1,
    "task_id": 1007,
    "request_type":" Test review",
    "status":"Done",
    "result_display": {
        "error": null,
        "info": null,
        "delay": 0,
        "info_message": null,
        "checks": [
            {
                "id": 5690,
                "passed": true,
                "title": "Check 0",
                "check_label": "requirement",
                "commands": [
                    {
                        "id": "3371",
                        "success": true
                    }
                ]
            },
            {
                "id": 5302,
                "passed": false,
                "title": "Check 1",
                "check_label": "requirement",
                "commands": [
                    {
                        "id": "3370",
                        "success": false
                    }
                ]
            },
            {
                "id": 5692,
                "passed": false,
                "title": "Check 2",
                "check_label": "requirement",
                "commands": []
            },
            {
                "id": 5691,
                "passed": false,
                "title": "Check 3",
                "check_label": "requirement",
                "commands": []
            },
            {
                "id": 5693,
                "passed": false,
                "title":"Check 4",
                "check_label": "code",
                "commands": []
            }
        ]
    },
    "created_at":"2019-10-02T23:45:59.000Z",
    "updated_at":"2019-10-02T23:46:01.000Z"
}
$
```

## Prerequisites
* Node v: 10.x
* Npm Version XXX

## Bugs
No known bugs at this time. 

## Authors
Jhon Alex Freyre N. - [Github](https://github.com/Jhonalex1199) / [Twitter](https://twitter.com/Jhonf_2c)  
Estephania Calvo C. - [Github](https://github.com/EstephaniaCalvoC) / [Twitter](https://twitter.com/estephaniacalv2)
David Alzate - [Github](https://github.com/illker) / [Twitter](https://twitter.com/illker)
Juan Manuel Ramirez - [Github](https://github.com/Juan8bits) / [Twitter](https://twitter.com/Juan_8bits)

## License
Public Domain. No copy write protection.
