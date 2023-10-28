import {createStore} from "vuex";
// import {taskModule} from "./Task/taskModule";
    import {firs_Module} from "@/src/store/firs_Module.js";


export default createStore({
    modules:{
        firs: firs_Module
    }
});
