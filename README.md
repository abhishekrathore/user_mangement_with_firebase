### `yarn install or yarn` 
 To Install all modules dependencies, 
### `yarn start` 
 To start the application on Dev Server
### `yarn run build` 
 to build application for deploy
 ### `yarn test` 
 to run unit test cases

### User actions
1. hasErrored : Detects error while saving user info
2. isLoading: When user data is being saved, the loader is displayed
3. fetchDataSuccess: Is used to save User data in Redux Store
4. onUserSave Is used to save User Data in firebase and calls fetchdatasuccess function.

### Presentation Component
1.To separately save UI and Code, we use Presentation component. It is UserFormUI.Js