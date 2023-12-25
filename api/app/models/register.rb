# class Register < ApplicationRecord
#     has_secure_password

#     validates :username, presence: true
#     validates :email, presence: true, uniqueness: { case_sensitive: true }
#     validates :password, presence: true, length: { minimum: 3 }
# end

class Register < ApplicationRecord
    has_secure_password
  
    validates :username, presence: true
    validates :email, presence: true, uniqueness: { case_sensitive: true }
    validates :password, presence: true, length: { minimum: 3 }
    # password_confirmationのバリデーションはhas_secure_passwordによって自動的に処理される
  end
  