class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.text :img_url
      t.string :full_name
      t.integer :phone_number
      t.string :location
      t.datetime :birthday
      t.text :bio

      t.timestamps
    end
  end
end
