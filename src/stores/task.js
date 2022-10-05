import { defineStore } from "pinia";
import { transformVNodeArgs } from "vue";
import { supabase } from "../supabase";
import { useUserStore } from "./user";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
      return this.tasks;
    },
    // New code
    async addTask(title, description) {
      console.log(useUserStore().user.id);
      const { data, error } = await supabase.from("tasks").insert([
        {
          user_id: useUserStore().user.id,
          title: title,
          is_complete: false,
          description: description,
        },
      ]);
    },
    //funcion para borrar tarea de supabase
    async deleteTask(id) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ id: id });
    },
    //funcion para actualizar
    async updateTask(id, title, description, is_complete) {
      const { data, error } = await supabase
        .from("tasks")
        .update({
          title: title,
          description: description,
          is_complete: is_complete,
        })
        .match({ id: id });
    },
  },
});

// hint
// para editar pendiente como hemos pasado el argumento en la linea 31, aca el argumento que quieres greta vienen siendo el id de la transformVNodeArgs, el titulo y la descripcion.
