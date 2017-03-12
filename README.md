# React Native / Redux / Saga
This project is used to help the newbies like me to integrate react-native project with redux and redux-saga.
If you do not know what are redux and redux-saga, please learn the basic concepts of them first, then back to this example again.

### v0.1
Please use `git checkout -b version0_1 v0.1` to get v0.1 release. In this version I accomplished a very simple example which contains an asynchronous increment button

### v0.2
Please use `git checkout -b version0_2 v0.2` to get v0.2 release. In this version I separate the counter component into two components, one is for counter and one is for api tester. I use [axios](https://github.com/mzabriskie/axios) to post the request to a [public api server](https://jsonplaceholder.typicode.com/) and get the response result.

## <a name='requirement'>Requirements
- react-native
- react-redux
- redux-saga
- redux-logger
- axios

## Installation
Use yarn or npm to install the packages listed in [Requirements](#requirement) section.

## References
This example is based on [anliz's](https://github.com/alinz/example-react-native-redux/tree/master/Counter) Counter Example which gives me great help on how things are working in redux, and how to integrate redux with react-native. And [wutonke's](https://github.com/wutongke/react-native-one) project is what I refers when studying redux-saga.

By using [redux-saga official document](https://redux-saga.github.io/redux-saga/docs/introduction/BeginnerTutorial.html), I integrate redux-saga into this sample project, and fulfill the asynchronous counter with react-redux/redux-saga.

## Contribution
Any comment are welcome.
