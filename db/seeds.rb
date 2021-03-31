# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Picture.destroy_all
Comment.destroy_all

20.times { User.create!(
    username: Faker::Internet.username(separators: %w(. _ -)),
    email: Faker::Internet.safe_email,
    password: Faker::Internet.password(min_length: 6)
    )}

User.all.find_each do |user|
    3.times { Post.create!(
        content: Faker::Hipster.sentence,
        user: user
    )}
end

Post.all.find_each do |post|
    2.times { Picture.create!(
        img_url: Faker::LoremFlickr.image(search_terms: ['all']),
        post: post
    )}
end

User.all.find_each do |user|
    @user = user
    user.posts.find_each do |post|
        2.times { Comment.create!(
            content: Faker::Lorem.sentence,
            post: post,
            user: @user
        )}
    end
end


puts "Created #{User.all.count} Users"
puts "Created #{Post.all.count} Posts"
puts "Created #{Picture.all.count} Pictures"
puts "Created #{Comment.all.count} Comments"
