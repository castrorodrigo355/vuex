import Vuex from "vuex"
import Vue from "vue"
import axios from "axios"
// import todos from "./components/Todos"

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        students : [
            // {name: "rodrigo", age: "31"},
            // {name: "fernando", age: "46"},
            // {name: "giovani", age: "44"}
        ]
    },
    getters : {
        getStudents: state => state.students
    },
    actions : {
        async getStud({commit}){
            const response = await axios.get("http://localhost:3000/api/students/")
            // this.state.students = response.data
            commit('setStudents', response.data)
        },
        async addStudent({commit}, student) {
            const response = 
                await axios.post("http://localhost:3000/api/students/", student);
            commit('addStud', response.data)
        },
        async deleteStudent({commit}, id) {
            // const response = 
                await axios.delete(`http://localhost:3000/api/students/${id}`);
            commit('deleteStud', id)
        }
    },
    mutations : {
        setStudents : (state, students) => (state.students = students),
        addStud : (state, student) => (state.students.unshift(student)),
        deleteStud : (state, id) => (state.students = state.students.filter((s, i) => s._id !== id))
    }
})