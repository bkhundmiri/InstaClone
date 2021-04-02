class AddColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :img_url, :text
  end
end
