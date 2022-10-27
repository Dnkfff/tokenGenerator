declare global {
    namespace NodeJS {
        interface ProcessEnv {
            HEADERLIMIT: number
            PAYLOADLIMIT: number
            SEPARATOR: string
            headerExample: string
            payloadExample: string
            NODE_ENV: 'development'
        }
    }
}

export {}