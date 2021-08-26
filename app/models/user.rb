class User < ApplicationRecord
    has_many :pedalboards
    has_many :pedalboard_pedals, through: :pedalboards
    validates :name, presence: true#, uniqueness: true
    validates :username, presence: true#, uniqueness: true
    validates :email, presence: true#, uniqueness: true
    validates :password_digest, presence: true#, uniqueness: true
    has_secure_password

    # def password=(value)
    #     self.password_digest = BCrypt::Password.create(user_params[:password])
    # end

    # def authenticate(password)
    #     BCrypt::Password.new(self.password_digest) == password
    # end
end
