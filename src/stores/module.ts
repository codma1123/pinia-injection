import 'pinia'
import type { AxiosService, CoreService, LoggerService, Service } from './plugins';

declare module 'pinia' {
  export interface PiniaCustomProperties {
    set services(_services: Record<string, Service<any>>)
    get services(): {
      axiosService: Service<AxiosService>
      loggerService: Service<LoggerService>
    }
  }
}