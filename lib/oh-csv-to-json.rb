require 'csv'
require 'json'

inpath          = "./lib/data/oral-histories-metadata.csv"
outpath         = "./site/_data/oral-histories.json"
keys_dropable   = ["Cataloger Status", "pid"]
keys_repeatable = [
  "Personal Name", 
  "Language",
  "Notes",
  "Keyword",
  "Subject",
  "Genre",
  "Link",
  "Identifier"
]

data = CSV.read(inpath, headers: true).map(&:to_h).map do |item|
  item['id'] = item['pid']
  keys_dropable.each { |key| item.delete key }
  keys_repeatable.each { |key| item[key] = item[key].to_s.split("|") }
  item.each { |key, value| item.delete(key) if value.nil? or value.empty? }
  item
end

File.open(outpath, 'w') { |file| file.write(JSON.pretty_generate(data)) }