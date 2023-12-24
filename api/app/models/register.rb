class Register < ApplicationRecord
    has_secure_password

    validates :username, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: { minimum: 3 }
end
