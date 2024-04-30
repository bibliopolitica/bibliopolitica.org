require 'csv'
require 'json'

inpath          = "./lib/data/oral-histories-metadata.csv"
outpath         = "./site/_data/oral-histories.json"
keys_dropable   = ["Status"]
keys_repeatable = [
  "Personal Name", 
  "Notes",
  "Topic",
  "Type",
  "Format",
  "Language"
]

data = CSV.read(inpath, headers: true).map(&:to_h).map do |item|
  keys_dropable.each { |key| item.delete key }
  keys_repeatable.each { |key| item[key] = item[key].to_s.split("|") }
  item.each do |key, value| 
    item.delete(key) if value.nil? or value.empty?
  end
  item
end

File.open(outpath, 'w') { |file| file.write(JSON.pretty_generate(data)) }