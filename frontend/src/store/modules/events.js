import axios from 'axios'

const state = {
    listOfEvents: [],
    featured: []
}

const getters = {}

const mutations = {
    setListOfEvents(state, payload) {
        state.listOfEvents = payload
    },
    setFeatured(state, payload) {
        state.featured = payload
    }
}

const actions = {
    events( { commit } ) {
        return new Promise( (resolve, reject) => {
            axios.get('http://localhost:3000/events')
                .then( res =>  {
                    commit('setListOfEvents', res.data.events)
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    eventById(context, id) {
        return new Promise( (resolve, reject) => {
            axios.get(`http://localhost:3000/events/${id}`)
                .then( res => {
                    resolve(res)
                })
                .catch( err => {
                    reject(err)
                })
        })
    },
    
    featuredEvents({ commit }) {
        return new Promise( (resolve, reject) => {
            axios.get('http://localhost:3000/events/featured')
                .then( res => {
                    commit('setFeatured', res.data.events)
                    resolve(res)
                })
                .catch( err => {
                    reject(err)
                })
        })
    },

    createEvent(context, event) {
        return new Promise( (resolve, reject) => {
            axios.post('http://localhost:3000/events', { event }) 
                .then( res => {
                    resolve(res)
                })
                .catch( err => {
                    reject(err)
                }) 
        })
    }
        
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
