import released from '../../components/content/JSON/releasedGames'
import upcomming from '../../components/content/JSON/upcommingGames'

const getGameId = () => {
    let game = localStorage.getItem('gameId')
    return game !== null || game !== undefined ? game : null
}
const getLocation = () => {
    let location = localStorage.getItem('location')
    return location !== null || location !== undefined ? location : null
}
export default {
    state() {
        return {
            gameId: getGameId(),
            requestLocation: getLocation(),
            released: released,
            upcomming: upcomming
        }
    },

    actions: {
        setCurrentGame({commit, state}, data){
            if(state.gameId !== null) {
                commit('clearGameId')
            }
            commit('setGameId', data.game.id)
        },
        searchGameObject({commit, state}){
            //much of this code would normally be handled by the backend.
            console.log(state.gameId)
            if(state.gameId > 0 && state.gameId <= 9) {
                return
            } else if (state.gameId > 9 && state.gameId <= 12) {
                return upcomming.find(state.gameId)
            } else {
                return 'not found'
            }
        }
    },

    mutations: {
        setGameId: (state, data) => {
            localStorage.setItem('gameId', data)

            state.gameId = data
        },
        clearGameId: (state) => {
            state.gameId = null
        },
    },

    getters: {
        getCurrentGameId: state => state.gameId,
        getReleasedGame: (state) => (id) => {
            return state.released.find(released => released.id === id)
        },
        getUpcommingGame: (state) => (id) => {
            return state.upcomming.find(upcomming => upcomming.id === id)
        },
        getTodoById: (state) => (id) => {
            return state.released.find(released => released.id === id)
        }
    }
}