// import "https://cdn.jsdelivr.net/npm/peerjs@1.5.0/dist/peerjs.js";
import "https://cdnjs.cloudflare.com/ajax/libs/peerjs/1.5.0/peerjs.min.js"

"use strict"


class Chat {

    constructor(userName){
        this.setUserName(userName)
        this.createPeer()
    }


    setUserName(userName){
        this.encryptedUserName = this.constructor.encryptUserName(userName)
    }


    createPeer(){
        const peer = new Peer(this.encryptedUserName)

        peer.on('open', encryptedUserName => {
            const userName = this.constructor.decryptUserName(encryptedUserName)
            console.log('Te has conectado con el ID:', userName)
        })
        
        peer.on('connection',   connection  => this.setConnection(connection))
        peer.on('error',        error       => this.__peerOnError(error))

        this.peer = peer
    }


    setConnection(connection){
        if(!this.connections) this.connections = {}
        const encryptedUserName = connection.peer
        const userName = this.constructor.decryptUserName(encryptedUserName)
        this.connections[userName] = connection
        connection.on('data',   data => this.processData(userName, data))
        connection.on('open',   () => this.processOpen(userName))
        connection.on('close',  () => this.processClose(userName))
        connection.on('error',  () => this.processError(userName, connection))
    }


    __peerOnError(error){
        switch(error.type){
            case 'browser-incompatible':    console.error(error.type); break
            case 'disconnected':            console.error(error.type); break
            case 'invalid-id':              console.error(error.type); break
            case 'invalid-key':             console.error(error.type); break
            case 'network':                 console.error(error.type); break
            case 'peer-unavailable':        console.error(error.type); break
            case 'ssl-unavailable':         console.error(error.type); break
            case 'server-error':            console.error(error.type); break
            case 'socket-error':            console.error(error.type); break
            case 'socket-closed':           console.error(error.type); break
            case 'unavailable-id':          console.error(error.type); break
            default:                        console.error("Unknown Error: ", JSON.stringify(error))
        }
    }

    processData(userName, data){
        console.log(`"${userName}" ha enviado: `, data)
    }
    processOpen(userName){
        console.log(`"${userName}" se ha conectado!`)
    }
    processClose(userName){
        console.log(`"${userName}" se ha desconectado!`)
    }
    processError(userName, connection){
        console.log(`processError of "${userName}": `, connection)
    }


    connect(userName){
        const encryptedUserName = this.constructor.encryptUserName(userName)
        const connection = this.peer.connect(encryptedUserName)
        this.setConnection(connection)
    }


    send(userName, data){
        if(!this.connections?.[userName]) throw new Error('no existe la conexion con el usuario: ' + userName)
        this.connections[userName].send(data)
    }

    disconnect(){
        // if(this.peer) 
            this.peer.destroy()
    }



    static encryptUserName(userName){
        // simular encripcion
        return `SK256_${userName}`
    }
    
    static decryptUserName(encryptedUserName){
        // simular decripcion
        return encryptedUserName.replace('SK256_', '')
    }

}

// utils
const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds))

self.Chat = Chat

const client1 = new Chat('Client1') // Te has conectado con el ID: Client1
const client2 = new Chat('Client2') // Te has conectado con el ID: Client2
const client3 = new Chat('Client3') // Te has conectado con el ID: Client3
const client4 = new Chat('Client4') // Te has conectado con el ID: Client3
await sleep(2000)
client1.connect('Client2')
client1.connect('Client3')
client1.connect('Client4')
await sleep(1000)
client4.connections.Client1.send('Hola!, Soy Client4')
await sleep(1000)
client1.connections.Client4.send('Recibido Gracias!')
await sleep(1000)
client4.disconnect()
    

