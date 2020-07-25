module UsersHelper
  def users_index_json(users)
    users.map do |user|
      {
        name: user.name,
        email: user.email,
        show: user_path(user),
        edit: edit_user_path(user),
        destroy: user_path(user)
      }
    end.to_json
  end
end
