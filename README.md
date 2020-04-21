## Demo of React Router Tricks ([Link](http://sin9k.com))

### Responsive Routes:

- [EN video](https://youtu.be/X3zE2eIpUmk)
- [RU video](https://youtu.be/FtYzwa0DjW8)
- [responsive routes source](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/ResponsiveRoutes/components/ResponsiveRoutesPage/index.jsx#L15)
- [device detector source](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/components/DeviceInfoHandler/index.jsx#L13)

### Popups Routes:

- [EN video](https://youtu.be/RYo3kwdDdBI)
- [RU video](https://youtu.be/4YHnZSMo9vo)
- [router children](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/PopupsRoutes/components/Post/PostCard/index.jsx#L62)
- [GET params config](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/const/router.js#L1)
- [useGetParameter hook](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/hooks/router/useGetParameter.js#L2)
- [URLSearchParams MDN](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
- [GET parameter popup manager](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/PopupsRoutes/components/GetParameterPopups/index.jsx#L16)
- [useGetPopupState hook](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/PopupsRoutes/components/GetParameterPopups/hooks/useGetPopupState.js#L9)
- [Notifications popup](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/PopupsRoutes/components/GetParameterPopups/Popups/Notifications/index.jsx#L13)

### How to use history.goBack for closing popup

- [EN video](https://youtu.be/tl5_k6YBRKg)
- [RU video](https://youtu.be/fqYk-b1lhyI)

1. [Use only history.push](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/ClosePopup/components/Push/index.js#L19)
2. [Custom Session History](https://github.com/Sin9k/react-router-dom-tricks/tree/master/src/pages/ClosePopup/components/CustomSessionHistory)
   - [history.listen documentation](https://github.com/ReactTraining/history/blob/3f69f9e07b0a739419704cffc3b3563133281548/docs/GettingStarted.md#listening)
   - [history.listen src](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/ClosePopup/components/CustomSessionHistory/HistoryLogger/index.js#L11)
   - [updateSessionHistory src](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/ClosePopup/components/CustomSessionHistory/services/updateSessionHistory.js)
   - [setCustomHistory src](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/ClosePopup/components/CustomSessionHistory/services/setCustomHistory.js)
   - [getCustomHistory src](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/ClosePopup/components/CustomSessionHistory/services/getCustomHistory.js)
   - [getHasPrevRoute src](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/ClosePopup/components/CustomSessionHistory/services/getHasPrevRoute.js)
   - [useClosePopup src](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/ClosePopup/components/CustomSessionHistory/hooks/useClosePopup.js)
3. [Custom Redux History](https://github.com/Sin9k/react-router-dom-tricks/tree/master/src/pages/ClosePopup/components/CustomReduxHistory)
   - [customPush src](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/ClosePopup/components/CustomReduxHistory/hooks/usePush.js)
   - [customGoBack src](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/ClosePopup/components/CustomReduxHistory/hooks/useGoBack.js)
   - [getHasPrevRoute src](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/ClosePopup/components/CustomReduxHistory/selectors/history.js#L5)
   - [closePopup src](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/ClosePopup/components/CustomReduxHistory/hooks/useClosePopup.js)
4. [Использование history state](https://github.com/Sin9k/react-router-dom-tricks/tree/master/src/pages/ClosePopup/components/State)
   - [openPopup src](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/ClosePopup/components/State/hooks/usePreparePopupLink.js#L7)
   - [closePopup src](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/ClosePopup/components/State/hooks/useClosePopup.js#L10)

### Custom Prompt:

- [EN video](https://youtu.be/ZE5I9RbMaGY)
- [RU video](https://youtu.be/qDJ2OMcz8is)
- [React Router Prompt](https://reacttraining.com/react-router/web/example/preventing-transitions)
- [Propmt](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/CustomPrompt/components/SignUpForm/index.jsx#L39)
- [getUserConfirmation](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/components/Router/index.jsx#L26)
- [Custom Prompt](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/components/CustomPrompt/index.jsx#L10)
- [usePreventReload](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/CustomPrompt/components/SignUpForm/usePreventReload.js#L3)
- [MDN beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload)

### Redirect After Login

- EN video
- [RU video](https://youtu.be/7Ot95R_TP4g)
- [Router src](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/RestorePreventedRoute/components/RestorePreventedRoutePage/index.jsx#L21)
- [AuthRoute src](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/RestorePreventedRoute/components/AuthRoute/index.jsx)
- [react-router Redirect (Auth)](https://reacttraining.com/react-router/web/example/auth-workflow)
- [SignIn src](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/RestorePreventedRoute/components/Login/index.jsx#L18)
- [Switcher src](https://github.com/Sin9k/react-router-dom-tricks/blob/master/src/pages/RestorePreventedRoute/components/Login/index.jsx#L44)
