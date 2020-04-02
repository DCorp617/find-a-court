# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Court.create([
  {:name => 'Healy Field', :street => '4139 Washington St.', :city => 'Boston', :state => 'MA', :country => 'US', :latitude =>  '', :longitude => ''},
  {:name => 'Truman Parkway', :street => '1101 Truman Pkwy', :city => 'Hyde Park', :state => 'MA', :country => 'US', :latitude => '', :longitude => ''},
  {:name => 'Fallon Field', :street => '910 South St.', :city => 'Roslindale', :state => 'MA', :country => 'US', :latitude => '', :longitude => ''}
])
