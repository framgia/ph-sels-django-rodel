# ph-sels-django-rodel

- ## **E-Learning System Web Application with Django and React**

## Initial Setup

- ### **On terminal:**

  - **Run pipenv**

    - change directory to `ph-sels-django-rodel/`

    - run virtual environment `pipenv shell`

  - #### **Package installation**
    | Command                        | Description                                   | Directory                          |
    | ------------------------------ | --------------------------------------------- | ---------------------------------- |
    | `pip install requirements.txt` | Install Back-end and environment dependencies | `ph-sels-django-rodel/`            |
    | `npm install`                  | Install node modules dependecies              | `ph-sels-django-rodel/src/sels_fe` |
    - change directory to `ph-sels-django-rodel/src/sels_fe` then install the following node modules
  - #### **Create a super-user to access django-admin**

    - `python manage.py createsuperuser --user <username> --email <email>`

    - (first and last name can be skipped)

    - Input your password and confirmation password

  - #### **Runserver**

    | Command                      | Description                               | Directory                          |
    | ---------------------------- | ----------------------------------------- | ---------------------------------- |
    | `python manage.py runserver` | Run Django Server Instance                | `ph-sels-django-rodel/src`         |
    | `npm start`                  | Run Node Server and start ELS application | `ph-sels-django-rodel/src/sels_fe` |

  - #### **Install Redux DevTools**

    - Go to chrome://extensions and search for : `Redux DevTools`

    - Click install.

- ### **On browser:**
  - Check if the Django Server is running: Go to -
    `localhost:3000`
  - Check if the Node Server is running: Go to -
    `localhost:8000`
