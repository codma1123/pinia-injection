export interface CoreService {
  getCurrentInstance: () => CoreService
}

export class AxiosService implements CoreService {
  getCurrentInstance() {
    return this
  }
}

class Service {

  private service: CoreService

  constructor(_service: CoreService) {
    this.service = _service
  }

  public getCurrentService(): CoreService {
    return this.service.getCurrentInstance()
  }
}

const myService = new Service(new AxiosService())

myService.getCurrentService()