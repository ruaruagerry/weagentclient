declare interface WXGame {
    login(func?: any): Promise<any>
    createUserInfoButton(arg0: any): any
    showModal(func?: any): Promise<any>
}

declare let wx: WXGame