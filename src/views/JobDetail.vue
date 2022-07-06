<template>
  <h2>{{ job[0].title }}</h2>
  <p>{{ job[0].desc }}</p>
  <button @click="goBack" class="btn btn-primary">Back</button>
</template>

<script>
import { useRouter } from "vue-router";
import { useJobsStore } from "../stores/jobs";
export default {
  props: ["id"],
  setup(props) {
    let jobStore = useJobsStore();
    // [{}] job
    let router = useRouter();
    let job = jobStore.jobs.filter((job) => job.id == props.id);

    let goBack = () => router.go(-1);

    return { job, goBack };
  },
};
</script>

<style lang="scss" scoped></style>
