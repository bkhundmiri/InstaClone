class CreatePictures < ActiveRecord::Migration[6.1]
  def change
    create_table :pictures do |t|
      t.text :img_url
      t.references :post, null: false, foreign_key: true

      t.timestamps
    end
  end
end
