class User < ApplicationRecord
    has_secure_password
    has_many :posts, dependent: :destroy
    has_many :comments, dependent: :destroy

    validates :username, presence: true, uniqueness: true, on: :create
    validates :email, presence: true, uniqueness: true, on: :create
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, presence: true, on: :create, length: { minimum: 6 }
end
