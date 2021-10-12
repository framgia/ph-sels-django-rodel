# ph-sels-django-rodel
## Initial Setup 
- ### **On terminal:** 
	   
    * **Run pipenv**
    
        +   change directory  to ``` ph-sels-django-rodel/ ``` 
	   
        +   run virtual environment ``` pipenv shell ```
	   
    * #### **Package installation ** 
    
        +  ``` pip install django djangorestframework  ```
        
        +  ``` pip install djangorestframework-simplejwt==4.8.0 PyJWT==2.1.0```  
	   
        +  ``` pip install django-cors-headers ``` 
	   
        +   change directory  to ``` ph-sels-django-rodel/src/sels_fe ```  then install the following node modules
	   
        ``` npm install redux react-redux redux-thunk react-router-dom ``` 
           
        ``` npm install @material-ui/core @material-ui/icons ```
	   
    * #### **Create a super-user to access django-admin  **
	   
        +   ``` python manage.py createsuperuser --user <username> --email <email> ``` 
	   
        + (first and last name can be skipped)
	   
        + Input your password and confirmation password
	   
    * #### **Runserver**
	   
        +  backend : ``` python manage.py runserver ``` 
	   
        +  react : change directory to ``` ph-sels-django-rodel/src/sels_fe ``` and enter ``` npm start  ```
	    
    * #### **Install Redux DevTools**
	   
        +  Go to chrome://extensions and search for : ```  Redux DevTools  ``` 
	   
        +  Click install.
	
- ### **On browser:**
	   
    * Check if the Server is running: Go to -
	   
         ``` localhost:3000 ``` 

