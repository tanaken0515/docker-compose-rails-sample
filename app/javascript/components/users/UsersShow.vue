<template>
  <div>
    <p id="notice">{{ notice }}</p>

    <p>
      <strong>Name:</strong>
      {{ name }}
    </p>

    <p>
      <strong>Email:</strong>
      {{ email }}
    </p>

    <a :href="editUserPath">Edit</a> |
    <a :href="usersPath">Back</a>
  </div>
</template>

<script>
export default {
  name: 'UsersShow',
  props: {
    notice: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    editUserPath: {
      type: String,
      required: true
    },
    usersPath: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
