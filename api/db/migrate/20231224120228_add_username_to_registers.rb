class AddUsernameToRegisters < ActiveRecord::Migration[6.0]
  def change
    add_column :registers, :username, :string
  end
end
