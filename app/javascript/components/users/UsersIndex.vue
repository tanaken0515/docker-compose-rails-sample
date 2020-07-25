<template>
  <div>
    <p id="notice">{{ notice }}</p>

    <h1>Users</h1>

    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th colspan="3"></th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="user in users">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td><a :href="user.show">Show</a></td>
        <td><a :href="user.edit">Edit</a></td>
        <td><a :href="user.destroy" data-confirm="Are you sure?" rel="nofollow" data-method="delete">Destroy</a></td>
      </tr>
      </tbody>
    </table>

    <br>

    <a :href="newUserPath">New User</a>
  </div>
</template>

<script>
export default {
  name: 'UsersIndex',
  props: {
    notice: {
      type: String,
      required: true
    },
    users: {
      type: Array,
      required: true
    },
    newUserPath: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
