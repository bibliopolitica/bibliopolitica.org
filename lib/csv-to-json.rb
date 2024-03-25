require 'csv'
require 'json'

inpath          = "./lib/data/items-metadata.csv"
outpath         = "./lib/data/items.json"
keys_dropable   = ["Checked", "Status", "pid"]
keys_repeatable = [
  "Alternate title", 
  "Corporate Name", 
  "Personal Name", 
  "Place of Publication or Production",
  "Date of Publication or Production",
  "Publisher Name",
  "Language",
  "Notes",
  "Keyword",
  "Subject",
  "Genre",
  "Format",
  "Link",
  "Identifier"
]

data = CSV.read(inpath, headers: true).map(&:to_h).map do |item|
  item['id'] = item['pid']
  keys_dropable.each { |key| item.delete key }
  keys_repeatable.each { |key| item[key] = item[key].to_s.split("|") }
  item
end

File.open(outpath, 'w') { |file| file.write(JSON.pretty_generate(data)) }