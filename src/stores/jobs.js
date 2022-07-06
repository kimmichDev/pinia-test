import { defineStore } from 'pinia'

export const useJobsStore = defineStore({
  id: 'jobs',
  state: () => ({
    jobs: [
      {
        id: 1, title: "web designer", desc: "web designerLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti inventore a quisquam iusto dolorum veritatis laboriosam quam in facere quia officia culpa ea quaerat obcaecati, distinctio ad provident at aspernatur!"
      },
      {
        id: 2, title: "web developer", desc: "web developerLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti inventore a quisquam iusto dolorum veritatis laboriosam quam in facere quia officia culpa ea quaerat obcaecati, distinctio ad provident at aspernatur!"
      },
      {
        id: 3, title: "dev ops", desc: "dev opsLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti inventore a quisquam iusto dolorum veritatis laboriosam quam in facere quia officia culpa ea quaerat obcaecati, distinctio ad provident at aspernatur!"
      },
      {
        id: 4, title: "ui/ux designer", desc: "ui/ux designerLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti inventore a quisquam iusto dolorum veritatis laboriosam quam in facere quia officia culpa ea quaerat obcaecati, distinctio ad provident at aspernatur!"
      },
      {
        id: 5, title: "web admin", desc: "web adminLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti inventore a quisquam iusto dolorum veritatis laboriosam quam in facere quia officia culpa ea quaerat obcaecati, distinctio ad provident at aspernatur!"
      },
    ],
    currentId: 6,
  }),
  getters: {
    customJobs: (state) => state.jobs.map((job) => ({
      id: job.id,
      title: job.title,
      desc: job.desc.substring(0, 30) + " ..."
    })),
  },
  actions: {
    increment() {
      this.counter++
    },
  }
})