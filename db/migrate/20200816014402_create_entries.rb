class CreateEntries < ActiveRecord::Migration[6.0]
  def change
    create_table :entries do |t|
      t.string :day
      t.decimal :totalExpenses, precision: 8, scale: 2
      t.decimal :cash, precision: 8, scale: 2
      t.decimal :totalEntry, precision: 8, scale: 2
      t.references :category, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
