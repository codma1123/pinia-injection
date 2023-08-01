import type { PiniaCustomProperties, PiniaPluginContext } from "pinia";
export interface CoreService {
  getCurrentInstance: () => CoreService
}

export class AxiosService implements CoreService {
  getCurrentInstance() {
    return this
  }
}

export class LoggerService implements CoreService {
  private loggerId: number

  constructor(_loggerId = 5) {
    this.loggerId = _loggerId
  }

  public getCurrentInstance() {
    return this
  }

  public getLogger() {
    return this.loggerId
  }
}

export class Service<T extends CoreService> {

  private service: T

  constructor(_service: T) {
    this.service = _service    
  }

  getCurrentService(): T {
    return this.service.getCurrentInstance() as T
  }
  
}

export const piniaServiceInjectionPlugin = ({ store }: PiniaPluginContext) => {

  const axiosService = new Service(new AxiosService())
  const loggerService = new Service(new LoggerService())
    
  store.services = {
    axiosService,
    loggerService
  }
}