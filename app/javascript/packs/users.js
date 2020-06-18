/* eslint no-console: 0 */

import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue'
import UsersShow from '../components/users/UsersShow.vue'

Vue.use(TurbolinksAdapter)

const mountUsersShow = () => {
  const el = document.querySelector('.js-users-show')

  if (el == null) {
    return
  }

  const { notice, name, email, editUserPath, usersPath } = el.dataset

  const props = {
    notice: notice,
    name: name,
    email: email,
    editUserPath: editUserPath,
    usersPath: usersPath
  }

  new Vue({
    el: el,
    render: h => h(UsersShow, { props })
  }).$mount()
}

document.addEventListener('turbolinks:load', () => {
  mountUsersShow()
})
