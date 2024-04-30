var resultsContainer  = document.getElementById('results');
var resultsInfo       = document.getElementById('results-info');
var searchInput       = document.getElementById("search-input");
var searchLimit       = document.getElementById("search-limit-select");
var searchSubmit      = document.getElementById("search-submit");


function toQueryString(tokens) {
  if (searchLimit.value == 'All Fields') {
    return tokens.map((token) => `${token}^100 +${token}*^10 ${token}~1`).join(' ')
  }
  else {
    limitStr = searchLimit.value.replaceAll(" ", "_");
    return tokens.map((token) => `${limitStr}:${token}^100 +${limitStr}:${token}*^10 ${limitStr}:${token}~1`).join(' ');
  }
}

function submitSearchQuery(idx) {
  let query = '* *'
  if (searchInput.value) {
    input = searchInput.value;
    tokens = input.split(' ');
    query = toQueryString(tokens);
  }  
  console.log(query);
  return idx.search(query) || [];
}

function truncateString(string){
  let max = 60;
  if (string.length < max) {
    return string;
  }
  else {
    return string.substring(0, max) + "...";
  }
  
}

function appendSearchResults(results, resultsLookupMap) {
  resultsContainer.innerHTML = null;
  results.forEach(function (res) {
    let item = resultsLookupMap[res.ref];
    let resultDiv = document.createElement('div');
    let thumbnail = `https://d1b7k5w7yjwpfg.cloudfront.net/iiif/2/bibliopolitica_${ item.id }_${ item.id }_001/full/250,/0/default.jpg`;
    resultDiv.innerHTML = `<div class="mb-8"><a href="${prefixUrl}item/${item.id}.html"><img loading="lazy" src="${ thumbnail }" alt="thumbnail for ${truncateString(item.label)}" class="max-w-full h-auto"><div class="mt-2 leading-snug md:text-sm text-xs">${truncateString(item.label)}</div></a></div>`;
    resultsContainer.appendChild(resultDiv);
  })
}

function appendSearchInfo(results) {
  resultsInfo.innerHTML = null;
  let infoDiv = document.createElement('div');
  infoDiv.innerHTML = `Found ${results.length} results`;
  resultsInfo.appendChild(infoDiv);
}

function toDoc(doc) {
  return {
      'id': doc.id,
      'label': doc.label,
      'Personal_Name': (doc['Personal Name'] || []).join(' '),
      'Corporate_Name': (doc['Corporate Name'] || []).join(' '),
      'Date_of_Publication_or_Production': (doc['Date of Publication or Production'] || []).join(' '),
      'Narrative_Summary': doc['Narrative Summary'] || '',
      'Subject': (doc['Subject'] || [] ).join(' '),
      'Genre': (doc['Genre'] || [] ).join(' '),
      'Format': (doc['Format'] || [] ).join(' '),
      'Keyword': (doc['Keyword'] || [] ).join(' ')
    };
}

promisedData.then(function(data) {
  const resultsLookupMap = data.reduce(function (memo, doc) {
	  memo[doc.id] = doc
	  return memo
	}, {});
  let idx = lunr(function () {
    this.ref('id');
    this.field('label');
    this.field('Personal_Name');
    this.field('Corporate_Name');
    this.field('Date_of_Publication_or_Production');
    this.field('Narrative_Summary');
    this.field('Subject');
    this.field('Genre');
    this.field('Format');
    this.field('Keyword');

    this.pipeline.remove(lunr.stemmer);
    this.searchPipeline.remove(lunr.stemmer);

    data.forEach(function (doc) {
      this.add(toDoc(doc))
    }, this)
  })
  // default: start with all results shown
  results = submitSearchQuery(idx);
  appendSearchResults(results, resultsLookupMap);

  document.body.addEventListener('keypress', function(e) {
    if (e.key === "Enter") {
      results = submitSearchQuery(idx);
      appendSearchInfo(results);
      appendSearchResults(results, resultsLookupMap);
    }
  });
  searchSubmit.addEventListener('click', function() { 
    results = submitSearchQuery(idx);
    appendSearchInfo(results);
    appendSearchResults(results, resultsLookupMap);
  }, false);
  searchInput.addEventListener('keyup', function() { 
    results = submitSearchQuery(idx);
    appendSearchInfo(results);
    appendSearchResults(results, resultsLookupMap);
  }, false);
  searchLimit.addEventListener('change', function() {
    results = submitSearchQuery(idx);
    appendSearchInfo(results);
    appendSearchResults(results, resultsLookupMap);
  }, false);
});
  