require 'csv'
require 'json'

inpath          = "./lib/data/items-metadata.csv"
outpath         = "./site/_data/items.json"
keys_dropable   = ["Checked", "Status", "Identifier"]
keys_repeatable = [
  "Alternate Title", 
  "Corporate Name", 
  "Personal Name", 
  "Place of Publication or Production",
  "Publisher",
  "Date of Publication or Production",
  "Notes",
  "Topic",
  "Type",
  "Format",
  "Language",
  "Link"
]

data = CSV.read(inpath, headers: true).map(&:to_h).map do |item|
  keys_dropable.each { |key| item.delete key }
  keys_repeatable.each { |key| item[key] = item[key].to_s.split("|") }
  item.each do |key, value| 
    item.delete(key) if value.nil? or value.empty?
  end
  item unless item.key? 'Unpublished'
end.compact

File.open(outpath, 'w') { |file| file.write(JSON.pretty_generate(data)) }