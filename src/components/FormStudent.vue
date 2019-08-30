<template>
    <div>
        <form v-on:submit.prevent="addNewStudent">
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" v-model="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name...">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Age</label>
                <input type="text" v-model="age" class="form-control" id="exampleInputPassword1" placeholder="Enter age...">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "FormStudent",
    data() {
        return {
            name: "", age: ""
        }
    },
    methods: {
        ...mapActions(['addStudent']),
        addNewStudent: function () {
            this.addStudent({name: this.name, age: this.age})
        }
    }
    // computed: mapGetters(['getStudents']),
    // created(){
    //     this.getStud()
    // }
}
</script>

<style>

</style>