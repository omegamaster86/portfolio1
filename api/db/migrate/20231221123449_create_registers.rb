class CreateRegisters < ActiveRecord::Migration[6.0]
  def change
    create_table :registers do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :confirmpassword

      t.timestamps
    end
  end
end
