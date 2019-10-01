function createStore() {
//    the store have four parts
//    1、the state
//    2、listen state
//    3、get state
//    4、update state
    let state
    const getState = ()=> state
    return {
        getState
    }
}