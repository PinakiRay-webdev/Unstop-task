# User authenticator app 🔏

## Overview ✅
The User Authenticator App is designed to authenticate users against a dummy JSON server. The app only recognizes the credentials of a specific user: "emilys". Once the user successfully logs in, they remain authenticated until they choose to log out.

## Hosting URL 🚀 : - 
https://unstop-task.web.app/

## Current Status 📝
This application meets all the specified requirements in the task description. It is well-documented with clear and concise comments.

## Tech stacks used here 💻
  1) Vite: For a fast and efficient development experience.
  2) Tailwind CSS: For sleek and responsive styling.
  3) Firebase: For hosting and integrating Google authentication.
     
## important notice ⚠️
  1) Credential Details:
      a) Username: emilys
      b) Password: emilyspass
      c) The app only authenticates users with these exact credentials stored in the dummy JSON server.
  
  2) Session Management:
    a) The app keeps the user logged in after successful authentication.
    b) Logging out manually is required to reset the session.

## additional feature 🔥
Implemented google authentication via firebase. 


## Known Issue 🐛
  ### Username Trim Bug
  1) When entering the username with additional spaces (e.g., ' emilys '), the app fails to authenticate.
  2) The trim() method was implemented to address this issue, but the bug still remains.

## Tips for usage 💡💡
1) Use the exact username emilys (without trailing or leading spaces).
2) Ensure the password matches the stored value (emilyspass).

# Thanks for considering. 
## Best Regards!!
