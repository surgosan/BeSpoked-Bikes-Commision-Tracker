import Api from "./Api";

export default {
    get () {
        return Api.get('/');
    },

    post (postee) {
        return Api().post('post', postee);        
    }
}