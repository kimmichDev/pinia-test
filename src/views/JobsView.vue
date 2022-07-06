<template>
  <div>job view</div>
  <div class="row g-3">
    <div class="col-4" v-for="job in jobStore.customJobs" :key="job.id">
      <div class="card">
        <div class="card-header">
          {{ job.title }}
        </div>
        <div class="card-body">
          <p>|{{ job.desc }}</p>
        </div>
        <div class="card-footer">
          <router-link class="btn btn-primary" :to="{ name: 'jobDetail', params: { id: job.id } }"> Detail </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useJobsStore } from "../stores/jobs";
export default {
  setup() {
    let jobStore = useJobsStore();

    return { jobStore };
  },
};
</script>

<style lang="scss" scoped></style>
