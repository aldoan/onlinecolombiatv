class AddBasicInfoToProducers < ActiveRecord::Migration
  def change
    add_column :producers, :name, :string
    add_column :producers, :last_name, :string
    add_column :producers, :website, :string
    add_column :producers, :about, :text
  end
end
