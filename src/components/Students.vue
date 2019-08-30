<template>
    <div>
        <ul>
            <li v-for="(student, i) in getStudents" :key="i">
                {{ student.name }} - {{ student.age }}
                <!-- <button class="btnData" v-on:click="getStudentData(student)">Data</button> -->
                <!-- <button class="btnUpdate" v-on:click="updateStudent(student._id)">Update</button> -->
                <button class="btnDelete" v-on:click="deleteStudent(student._id)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "Students",
    methods: mapActions(['getStud', 'deleteStudent']),
    computed: mapGetters(['getStudents']),
    created(){
        this.getStud()
    }
}
</script>

<style>

</style>

<!-- 

-->