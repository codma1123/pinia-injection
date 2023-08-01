import { describe } from 'node:test';
import { CounterStore, useCounterStore } from './../../src/stores/counter';
import { setActivePinia, createPinia } from 'pinia';
import PiniaLogger from 'pinia-logger';

describe('스토어 초기화 확인', () => {
  let store: CounterStore

  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`    

     setActivePinia(createPinia()).use(PiniaLogger({ expanded: true }))
     store = useCounterStore() as CounterStore

  })

  it('스토어 초기화 확인', () => {    
    expect(store).toBeDefined()    
  })

  it('스토어 플러그인 확인', () => {    
    expect(store.count).toBe(0)
  })

  it('스토어 increase 테스트', () => {
    store.increment()
    expect(store.count).toBe(1)
  })
  
  
})