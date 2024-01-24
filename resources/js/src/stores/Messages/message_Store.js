import {defineStore} from 'pinia'
import axios from "axios";

export const message_Store = defineStore('message_store', {
    state: () => {
        return {
            user: {},
            listMessages: [],
            messageData: {body:''}
        }
    },

    actions: {
        async getListMessages() {
            const response = await axios.get('/api/messages');
            this.listMessages = response.data;
        },

        async createMessage(){
            const request = await axios.post('/api/messages',this.messageData);
            // this.listMessages.push(request.data);
            this.addMessageToList(request.data);
            this.messageData = {body:''};
        },

        addMessageToList(message){
            this.listMessages.push(message);
        }

    },
})
