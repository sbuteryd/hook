function createStore() {
//    the store have four parts
//    1、the state
//    2、listen state
//    3、get state
//    4、update state
    let state
    let listeners =[]
    const getState = ()=> state
    const subscribe = (listener)=>{
        listeners.push(listener)
        return ()=>{
            listeners.filter((l)=> l !==listener)
        }
    }
    return {
        getState,
        subscribe
    }
}

const store = createStore()
store.subscribe(()=>{
    console.log('The new State is',store.getState())
})

const unsubscribe = store.subscribe(()=>{
    console.log('The store changed.')
})

unsubscribe()